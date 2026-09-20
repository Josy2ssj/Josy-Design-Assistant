# JOSY DESIGN ASSISTANT
## BUILD BRIEF
MODE NEW · USER Josy · OBJECTIVE estudio gráfico local incremental.
CORE FEATURES Inicio, proyectos, moodboards e identidades con persistencia y archivos originales copiados.
FLOWS crear → editar → guardar automáticamente → reabrir; vincular moodboards e identidad a proyectos.
CONSTRAINTS offline, Windows, simplicidad, sin generación de IA ni servicios en esta versión.
TECHNICAL APPROACH Node.js 24.20.0 incluido + ventana Edge + JS/CSS sin dependencias de aplicación. Servicio HTTP solo 127.0.0.1:47831, token por arranque y control de origen; JSON por documento.
DATA carpeta data junto a la app; assets originales; JSON atómico y copia .bak anterior.
VISUAL DIRECTION ver PRODUCT.md y DESIGN.md. DELIVERY carpeta ejecutable portable con runtime.
RISKS carpeta debe tener permiso de escritura; respaldar data antes de mover/actualizar. No instalador firmado.
SUCCESS CRITERIA crear y recuperar las tres entidades, importar imágenes sin alterar bytes, mover/redimensionar moodboard, navegar con guardado, comprobar temas y ventana de escritorio.
## Estado
Versión 0.1.0, funcional y en revisión del usuario. Verificación completada el 13 de septiembre de 2026. No marcada STABLE ni aceptada todavía por Josy.
## Estructura
src/store.js persistencia; src/server.js servicio local y arranque de Edge; src/renderer/api.js puente HTTP; src/renderer/app.js interfaz. No dependencias npm.
## Ejecutar
Doble clic en Abrir Josy.vbs; Abrir Josy.cmd como alternativa con consola de diagnóstico. Runtime Node incluido. Requiere Microsoft Edge instalado; si falta, abre el navegador predeterminado. No requiere Python, npm ni conexión.
El servicio termina tras tres minutos sin actividad de ventanas. Una segunda ventana de la misma biblioteca pide continuar en la primera para evitar sobrescrituras.
Edge usa un perfil dedicado en .browser-profile junto al programa; no utiliza el perfil personal del navegador. Esa carpeta contiene preferencias/caché, no proyectos. Cierre documental y checkpoint: 20 de septiembre de 2026; las pruebas registradas conservan sus fechas reales.
## Funciones de esta versión
- Inicio, búsqueda, proyectos recientes; crear, editar, duplicar, archivar y restaurar las tres entidades.
- Proyectos: contexto, contenido, formato/dimensiones, identidad y varios moodboards; referencias importadas.
- Moodboards: importar/arrastrar imágenes, notas, colores, mover, redimensionar, bloquear, orden frontal, etiquetas, zoom, encuadrar y deshacer/rehacer hasta 40 acciones de elementos. Contexto, identidad y fondo. PNG recortado al contenido, miniatura automática.
- Identidades: concepto, fuentes como texto, reglas, paleta editable, moodboard y archivos importados individualmente o desde carpeta. Logo principal seleccionable.
- Originales copiados byte por byte. Descarga de copias de recursos de proyectos/identidades. Guardado por documento, .bak anterior y respaldo completo desde Configuración en backups/.
- Tema claro/oscuro, foco visible, movimiento reducido. Biblioteca vacía al entregar, sin marcas o recursos ficticios.
## Validación
Ver VALIDACION.md. Flujos reales con Edge y paquete movido pasaron; recuperación de JSON corrupto y respaldo de originales comprobados. Capturas revisadas en 1440×900 y 1000×740. Revisión visual independiente: ship al alcance de esta base.
## Decisiones y limitaciones
Electron provocó errores de GPU/proceso y una excepción 0x80000003 confirmada por captura del usuario. Se retiró del entregable y se conservó en work/ únicamente como historial técnico. No reintroducirlo sin una prueba de arranque concluyente.
Lienzo fijo amplio 2400×1600, sin agrupación, rotación, recorte de imágenes, fuentes instalables ni JPG de moodboards en esta entrega. Recursos SVG rasterizan mediante el navegador; GIF exporta un fotograma. Cada archivo hasta 35 MB, 100 por importación. Las imágenes originales grandes todavía se decodifican al abrir un moodboard; miniaturas optimizadas de assets quedan pendientes.
El historial actual es deshacer de sesión y copia .bak de documento, no galería visual de versiones. El respaldo se restaura manualmente con la app cerrada. No es un editor de diseños todavía. Abrir una sola biblioteca a la vez; no está diseñado para edición simultánea desde distintos navegadores.
## Protección de versión
Checkpoint de código y documentación: ../Josy-0.1.0-checkpoint.zip y manifiesto SHA256. Excluye datos personales y runtime, que permanecen separados; no implica aceptación STABLE.
## Siguiente alcance
Nuevo diseño, layouts locales y tres propuestas editables; después editor y exportación de diseños. Mantener biblioteca y documentos compatibles.
