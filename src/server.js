const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),{spawn}=require('node:child_process');
const {Store}=require('./store');
const appRoot=path.resolve(__dirname,'..'),root=process.env.JOSY_DATA_DIR||path.join(appRoot,'data'),port=Number(process.env.JOSY_PORT||47831);
const store=new Store(root),token=crypto.randomBytes(32).toString('hex'),origin=`http://127.0.0.1:${port}`;
const assets=path.join(root,'assets');let lastSeen=Date.now();
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.jfif':'image/jpeg','.webp':'image/webp','.gif':'image/gif','.bmp':'image/bmp','.svg':'image/svg+xml','.pdf':'application/pdf'};
function openFolder(p){if(process.env.JOSY_TEST)return;spawn('explorer.exe',[p],{detached:true,windowsHide:true,stdio:'ignore'}).unref();}
function launchWindow(){if(process.env.JOSY_NO_OPEN)return;const edge=[process.env['ProgramFiles(x86)'],process.env.ProgramFiles].filter(Boolean).map(p=>path.join(p,'Microsoft','Edge','Application','msedge.exe')).find(fs.existsSync);if(edge)spawn(edge,[`--app=${origin}`,`--user-data-dir=${path.join(appRoot,'.browser-profile')}`,'--no-first-run','--no-default-browser-check','--window-size=1440,940'],{detached:true,windowsHide:false,stdio:'ignore'}).unref();else spawn('rundll32.exe',['url.dll,FileProtocolHandler',origin],{detached:true,windowsHide:false,stdio:'ignore'}).unref();}
function send(res,status,value){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8'});res.end(JSON.stringify(value));}
async function body(req){let bytes=0,chunks=[];for await(const c of req){bytes+=c.length;if(bytes>50*1024*1024)throw Error('El archivo supera el límite de importación.');chunks.push(c);}return JSON.parse(Buffer.concat(chunks).toString('utf8'));}
const server=http.createServer(async(req,res)=>{
 const url=new URL(req.url,origin);res.setHeader('Cache-Control','no-store');res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Content-Security-Policy',"default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'; object-src 'none'; frame-ancestors 'none'");
 if(req.headers.host!==`127.0.0.1:${port}`||(req.headers.origin&&req.headers.origin!==origin)||['cross-site','same-site'].includes(req.headers['sec-fetch-site']))return send(res,403,{error:'Acceso local no válido.'});
 try{
 if(req.method==='GET'&&url.pathname==='/bootstrap.js'){res.writeHead(200,{'Content-Type':'text/javascript'});return res.end(`window.JOSY_TOKEN=${JSON.stringify(token)};`);}
 if(req.method==='GET'&&url.pathname==='/health')return send(res,200,{app:'josy-design-assistant',version:'0.1.0'});
 if(url.pathname.startsWith('/api/')){
  if(req.method!=='POST'||req.headers['x-josy-token']!==token)return send(res,403,{error:'Sesión no válida. Vuelve a abrir la aplicación.'});lastSeen=Date.now();const b=await body(req);
  if(url.pathname==='/api/library')return send(res,200,store.list());
  if(url.pathname==='/api/ping')return send(res,200,true);
  if(url.pathname==='/api/save')return send(res,200,store.save(b.kind,b.doc));
  if(url.pathname==='/api/import')return send(res,200,store.importAsset(b.name,Buffer.from(b.base64,'base64')));
  if(url.pathname==='/api/data-folder'){openFolder(root);return send(res,200,true);}
  if(url.pathname==='/api/backup'){const dest=path.join(appRoot,'backups','Josy-'+new Date().toISOString().replace(/[:.]/g,'-'));fs.mkdirSync(dest,{recursive:true});for(const dir of ['projects','boards','brands','assets'])fs.cpSync(path.join(root,dir),path.join(dest,dir),{recursive:true});openFolder(path.dirname(dest));return send(res,200,dest);}
  return send(res,404,{error:'Acción desconocida.'});
 }
 if(req.method!=='GET')return send(res,405,{error:'Método no permitido.'});
 let file;if(url.pathname.startsWith('/assets/')){const id=decodeURIComponent(url.pathname.slice(8));store.assetURL(id);file=path.join(assets,id);}else{const allowed={'/':'index.html','/app.js':'app.js','/api.js':'api.js','/style.css':'style.css'};if(!allowed[url.pathname])return send(res,404,{error:'No encontrado'});file=path.join(__dirname,'renderer',allowed[url.pathname]);}
 if(!fs.existsSync(file))return send(res,404,{error:'No se encontró el recurso.'});res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});fs.createReadStream(file).pipe(res);
 }catch(e){if(!res.headersSent)send(res,400,{error:e.message});else res.end();}
});
server.on('error',e=>{if(e.code==='EADDRINUSE'){http.get(origin+'/health',res=>{let raw='';res.on('data',c=>raw+=c);res.on('end',()=>{try{if(JSON.parse(raw).app==='josy-design-assistant'){launchWindow();process.exit(0);}}catch{}console.error('El puerto 47831 está ocupado.');process.exit(1);});}).on('error',()=>process.exit(1));}else{console.error(e);process.exit(1);}});
server.listen(port,'127.0.0.1',()=>{console.log('Josy Design Assistant '+origin);launchWindow();});
setInterval(()=>{if(!process.env.JOSY_TEST&&Date.now()-lastSeen>180000)server.close(()=>process.exit(0));},30000).unref();
