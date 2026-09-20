# Validación · 13 de septiembre de 2026

Resultado: primera versión funcional para revisión del usuario. No implica aceptación ni release STABLE.

## Pruebas ejecutadas
- Edge real mediante Playwright: crear y editar proyectos, identidades y moodboards; relaciones proyecto-identidad-moodboard recuperadas al reiniciar proceso y navegador.
- Importación de PNG, comprobación byte a byte del original; movimiento y redimensionado con eventos reales de ratón; notas, colores, bloqueo, duplicado, deshacer/rehacer.
- Duplicar, archivar y restaurar proyectos; modos claro/oscuro; escritorio 1440×900 y 1000×740 sin desbordamiento de página. Sin errores de JavaScript del renderer.
- Exportación a PNG mediante el botón y evento real de descarga del navegador, archivo no vacío.
- Guardado atómico y copia .bak anterior; recuperación de documento JSON corrupto sin destruir la copia válida.
- Respaldo completo, presencia de JSON y coincidencia de bytes de assets.
- Copia de código y runtime a una carpeta diferente con espacios; arranque, creación, relectura, importación y exportación allí.
- Rechazo de rutas fuera de biblioteca, extensiones no permitidas, nombre vacío, peticiones sin token y origen ajeno. Segunda ventana bloqueada para evitar edición simultánea en el mismo navegador.
- Recarga sin peticiones a dominios remotos. Todos los recursos de la aplicación son locales.

La automatización funcional se ejecutó en modo headless sobre Edge instalado. Las capturas son de la interfaz realmente renderizada. El 14 de septiembre también pasó una prueba de Edge con ventana (headless:false) en modo aplicación: Inicio renderizado, título Josy Design Assistant y captura visible-window.png. El lanzador VBS inició el servicio local y su endpoint de salud respondió correctamente. No se verificó el foco de la ventana abierta por VBS mediante una herramienta nativa.

## Revisión visual
Siete capturas actuales: Inicio vacío/con contenido, tema oscuro, ventana de 1000 px, proyecto, identidad y moodboard. Revisión independiente: **ship** al alcance de esta base; sin bloqueos visuales observados. Contraste de tokens calculado: texto secundario claro 4.72:1 y oscuro 7.02:1; botones principales claro 5.77:1 y oscuro 8.06:1.
Motor/detector automático de Impeccable no disponible por permisos de caché; se aplicaron sus referencias y revisión visual. No se evaluó móvil porque el destino es escritorio Windows.

## Evidencia para continuar
En el workspace, work/qa/functional.cjs y work/qa/storage-package.cjs conservan las pruebas. result.json y storage-package-result.json registran el éxito y las rutas de datos aislados. Ningún dato de prueba se entrega como trabajo del usuario.

## Limitaciones
No se probó en otra computadora. No hay instalador firmado. No se probaron todas las combinaciones de formatos e imágenes enormes; el límite es 35 MB por archivo. Las capturas de prueba contienen un recurso sintético expresamente rotulado como referencia de prueba.
