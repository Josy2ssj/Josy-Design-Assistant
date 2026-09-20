# Josy Design Assistant · 0.1

Abre **Abrir Josy.vbs** con doble clic. Se abre una ventana de Microsoft Edge dedicada a tu estudio. No necesita internet ni instalar paquetes. Si Windows bloquea VBS, utiliza **Abrir Josy.cmd** y deja esa consola abierta mientras trabajas.

## Primer recorrido
1. En **Identidades**, crea una marca. Define su paleta, fuentes y reglas; importa logos o una carpeta de recursos. Se guardan copias de los originales.
2. En **Moodboards**, crea un lienzo y arrastra imágenes. Añade notas y colores. Selecciona un elemento para ver sus controles; el tirador de la esquina cambia el tamaño. **Encuadrar contenido**, junto al zoom, centra tus referencias.
3. En **Proyectos**, crea un trabajo con formato, contexto y contenido. Vincula la identidad y uno o varios moodboards.
4. Espera el indicador **Guardado** antes de cerrar. Puedes continuar desde Inicio la próxima vez.

## Dónde está tu trabajo
Todo vive en **data/** dentro de esta carpeta: projects, boards, brands y assets. Los documentos son JSON y conservan una copia anterior .bak. Los originales importados nunca se mueven ni se editan.

En **Configuración → Crear respaldo** se crea una carpeta fechada dentro de **backups/** y se abre su ubicación. Copia ese respaldo a otra unidad si quieres protección adicional.

Para trasladar la app, ciérrala, espera tres minutos a que termine el servicio y copia **toda esta carpeta**. Para restaurar un respaldo, conserva primero una copia de data y luego copia las cuatro carpetas del respaldo dentro de data con la app cerrada. No combines dos bibliotecas distintas.

## Controles rápidos
- Ctrl+Z / Ctrl+Y: deshacer y rehacer elementos del moodboard.
- Ctrl+D: duplicar elemento seleccionado; Supr: quitarlo del lienzo.
- Clic en el fondo: volver al contexto del moodboard.
- Ctrl+rueda o selector de porcentaje: zoom.
- Exportar PNG: descarga la composición del moodboard ajustada a su contenido.
- Archivar conserva el documento; **Archivados** permite abrirlo y restaurarlo.

## Alcance actual
Esta versión organiza el trabajo y permite componer moodboards. El editor de diseños, layouts/propuestas, plantillas, Brand Book, mockups, IA y galería de versiones quedan para próximas sesiones. No hay consumo de IA.

Requisitos: Windows con Microsoft Edge y permiso de escritura en esta carpeta. El servicio utiliza exclusivamente 127.0.0.1:47831 y termina tras tres minutos sin actividad. La app empieza vacía; las imágenes de pruebas no forman parte de tu biblioteca.
