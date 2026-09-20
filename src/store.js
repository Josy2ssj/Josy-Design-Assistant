const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const {pathToFileURL} = require('node:url');
class Store {
  constructor(root) { this.root=root; this.warnings=[]; for(const p of ['projects','boards','brands','assets']) fs.mkdirSync(path.join(root,p),{recursive:true}); }
  file(kind,id) { if(!['projects','boards','brands'].includes(kind)||!/^[-\w]{1,80}$/.test(id)) throw Error('Documento no válido'); return path.join(this.root,kind,id+'.json'); }
  read(kind,id) { const f=this.file(kind,id); try{return JSON.parse(fs.readFileSync(f,'utf8'));}catch(e){if(fs.existsSync(f+'.bak')) {this.warnings.push('Se recuperó una copia anterior de '+id);return JSON.parse(fs.readFileSync(f+'.bak','utf8'));}throw e;} }
  list() { const result={warnings:this.warnings.splice(0)}; for(const kind of ['projects','boards','brands']) result[kind]=fs.readdirSync(path.join(this.root,kind)).filter(n=>n.endsWith('.json')).flatMap(n=>{try{return [this.read(kind,n.slice(0,-5))];}catch(e){result.warnings.push('No se pudo leer '+n+'. Se conservó el archivo.');return [];}}); result.warnings.push(...this.warnings.splice(0)); return result; }
  save(kind,doc) { if(!doc||typeof doc.name!=='string'||!doc.name.trim()) throw Error('Escribe un nombre para guardar.'); const f=this.file(kind,doc.id); const value={...doc,schemaVersion:1,updatedAt:new Date().toISOString()}; const raw=JSON.stringify(value,null,2);if(Buffer.byteLength(raw)>20*1024*1024)throw Error('El documento es demasiado grande. Divide el moodboard.'); fs.writeFileSync(f+'.tmp',raw); if(fs.existsSync(f)){try{JSON.parse(fs.readFileSync(f,'utf8'));fs.copyFileSync(f,f+'.bak');}catch{}}fs.renameSync(f+'.tmp',f);return value; }
  importAsset(name,bytes) {const ext=path.extname(name).toLowerCase();if(!['.png','.jpg','.jpeg','.jfif','.webp','.gif','.bmp','.svg','.pdf','.ttf','.otf'].includes(ext))throw Error('Formato no compatible. Usa imágenes, PDF, TTF u OTF.'); const data=Buffer.from(bytes);if(!data.length||data.length>35*1024*1024)throw Error('Cada archivo debe ocupar entre 1 byte y 35 MB.');const id=crypto.randomUUID()+ext;const f=path.join(this.root,'assets',id);fs.writeFileSync(f,data);return {id,name,size:data.length,image:['.png','.jpg','.jpeg','.jfif','.webp','.gif','.bmp','.svg'].includes(ext)}; }
  assetURL(id) {if(!/^[-\w]+\.(png|jpg|jpeg|jfif|webp|gif|bmp|svg|pdf|ttf|otf)$/.test(id))throw Error('Recurso no válido');return pathToFileURL(path.join(this.root,'assets',id)).href;}
}
module.exports={Store};
