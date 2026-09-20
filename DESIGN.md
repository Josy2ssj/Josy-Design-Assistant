---
name: Josy Design Assistant
description: Estudio gráfico personal de Windows, minimalista y centrado en el contenido.
colors:
  primary: "#285ed4"
  bg: "#f6f7f9"
  panel: "#fff"
  rail: "#eef0f4"
  ink: "#242831"
  muted: "#626b79"
  line: "#dce0e7"
  soft: "#e7edfc"
  dark-primary: "#9dbbff"
  dark-bg: "#181b21"
  dark-panel: "#22262e"
  dark-rail: "#1c2027"
  dark-ink: "#edf0f6"
  dark-muted: "#a8b1c0"
  dark-line: "#3b424f"
  dark-soft: "#303e5b"
  dark-primary-text: "#142348"
  success: "#40976b"
  danger: "#bc3e45"
  board: "#f0f0ee"
  selection: "#3774ea"
  note: "#fff6d9"
  note-ink: "#363224"
typography:
  display:
    fontFamily: "'Segoe UI Variable', 'Segoe UI', sans-serif"
    fontSize: "42px"
    fontWeight: 550
    lineHeight: 1.18
    letterSpacing: "-1.25px"
  headline:
    fontFamily: "'Segoe UI Variable', 'Segoe UI', sans-serif"
    fontSize: "32px"
    fontWeight: 580
    lineHeight: 1.2
    letterSpacing: "-0.9px"
  title:
    fontFamily: "'Segoe UI Variable', 'Segoe UI', sans-serif"
    fontSize: "19px"
    fontWeight: 600
    letterSpacing: "-0.3px"
  body:
    fontFamily: "'Segoe UI Variable', 'Segoe UI', sans-serif"
    fontSize: "14px"
    lineHeight: 1.6
  label:
    fontFamily: "'Segoe UI Variable', 'Segoe UI', sans-serif"
    fontSize: "12px"
    fontWeight: 600
rounded:
  field: "8px"
  button: "9px"
  navigation: "10px"
  cover: "12px"
  sheet: "14px"
  dialog: "16px"
spacing:
  compact: "8px"
  control: "10px"
  small: "12px"
  medium: "18px"
  grid: "22px"
  section: "24px"
  sheet: "26px"
  dialog: "30px"
  page: "38px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.panel}"
    rounded: "{rounded.button}"
    padding: "10px 15px"
  button-secondary:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "10px 15px"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.button}"
    padding: "10px 15px"
  button-danger:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.danger}"
    rounded: "{rounded.button}"
    padding: "10px 15px"
  input:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "10px 12px"
  navigation:
    textColor: "{colors.muted}"
    rounded: "{rounded.navigation}"
    padding: "12px 15px"
  chip:
    backgroundColor: "{colors.soft}"
    textColor: "{colors.primary}"
    rounded: "6px"
    padding: "4px 8px"
  card:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.sheet}"
    padding: "26px"
---

# Design System: Josy Design Assistant

## Overview

**Creative North Star: "Estudio gráfico personal de Windows"**

Un espacio claro, sereno y preciso para organizar trabajo gráfico. Las superficies discretas y la jerarquía tipográfica dejan el protagonismo a imágenes, proyectos e identidades. La dirección premium se expresa con aire, alineación y herramientas contextuales.

La interfaz usa convenciones de Windows y texto en español. El tema oscuro mantiene la misma estructura y cambia los roles cromáticos. La aplicación funciona con Node local y una ventana de Microsoft Edge; esta documentación describe la implementación, sin atribuirle una validación del motor de Impeccable, que no estuvo disponible.

**Key Characteristics:**
- Contenido protagonista.
- Segoe UI y jerarquía operativa clara.
- Superficies neutras y acento azul preciso.
- Temas claro y oscuro con estructura compartida.

Fuente de extracción: `src/renderer/style.css`; dirección confirmada en `PRODUCT.md` y `SURFACE.md`. Los tokens del frontmatter son normativos. La revisión independiente y las pruebas funcionales pertenecen al cierre del proyecto; no se han repetido para esta extracción documental.

## Colors

### Primary

Azul preciso para acciones principales, foco e indicadores activos. En oscuro se sustituye por azul luminoso, con tinta oscura en el botón principal para conservar contraste.

### Neutral

Fondo perla, panel blanco, rail gris frío, tinta grafito y texto secundario gris azulado. Los separadores distinguen regiones sin convertir cada objeto en una caja. Los tokens con prefijo `dark-` corresponden a las sustituciones del tema oscuro.

El verde identifica disponibilidad local y el rojo acciones destructivas. El lienzo, las notas y los colores importados son material de trabajo: sus colores propios permanecen independientes del tema de la interfaz.

**The Content Rule.** El acento guía acciones y estados; las imágenes y paletas del usuario aportan la variedad visual.

## Typography

Una sola familia de Windows sostiene títulos, controles y lectura. Display corresponde a la bienvenida; headline a títulos de página; title a secciones; body a párrafos y label a etiquetas de campos. Los párrafos tienen un ancho máximo de 70ch. Los títulos de objetos usan 15px y peso 600; metadatos usan 12px. El título de bienvenida se reduce a 35px en el breakpoint compacto.

## Layout

Estructura de escritorio con ancho mínimo de 920px y altura de ventana completa. Rail izquierdo de 196px, barra superior de 72px y contenido con desplazamiento propio. La biblioteca usa tres columnas y separación del token grid; la región inferior de Inicio reparte espacio en proporción 1.4:1. Los detalles usan dos columnas, separación de 40px y ancho máximo de 1100px.

A 1150px o menos, el rail pasa a 170px, el margen de página a 27px y la separación de biblioteca a 16px. No existe una composición móvil en esta versión.

El moodboard reserva una barra de herramientas de 64px, inspector de 255px (230px en compacto) y estado inferior de 29px. Su lienzo mide 2400 × 1600px y admite desplazamiento y zoom. La retícula visual usa pasos de 24px.

## Elevation & Depth

La profundidad combina superficies tonales, separadores finos y sombras suaves. La sombra compartida de paneles y navegación es `0 8px 28px #1825400c`, y en oscuro `0 8px 28px #0002`. Las portadas al pasar el cursor usan `0 12px 25px #15203a19` y suben 2px. Los diálogos usan `0 24px 80px #0003`, fondo de cobertura `#15203355` y desenfoque de 4px.

## Shapes

Esquinas suavemente redondeadas según función: campos e iconos pequeños, botones, navegación, portadas, hojas y diálogos. Los círculos se reservan para muestras de color e indicadores. Los iconos son trazos SVG de 20px, grosor 1.6 y extremos redondeados; dentro de botones miden 17px.

## Components

### Buttons

Acciones compactas, peso 550 y espacio de 8px entre icono y texto. El primario usa acento; secundario usa panel y línea interior; quiet usa fondo transparente y texto secundario; danger emplea texto rojo. El hover primario aumenta brillo a 1.08; otros controles cambian al fondo del rail. Foco visible de 3px con separación de 3px. Deshabilitado reduce opacidad a 0.4.

### Inputs / Fields

Panel con borde de 1px y radio field. El foco usa contorno de acento de 2px, separado 1px. Etiquetas pequeñas preceden al campo. Las áreas de texto tienen altura mínima de 100px, interlineado 1.65 y ajuste vertical.

### Navigation

Filas con texto secundario, icono y separación de 12px. La activa usa panel, tinta principal y sombra compartida; su icono cambia al acento. La navegación permanece lateral en el rango de escritorio soportado.

### Chips

Etiquetas compactas de 11px, fondo soft y texto de acento. Son indicadores; no se documenta un estado interactivo que no existe.

### Cards / Containers

Las hojas de formulario usan panel y sombra compartida. Las tarjetas de biblioteca presentan una portada y texto debajo, sin caja decorativa exterior. Las imágenes de portada usan `object-fit: contain`. Estados vacíos usan borde discontinuo y una acción concreta; no simulan archivos existentes.

### Moodboard

Selección con contorno azul de 2px y separación de 3px; manejador blanco con borde azul. Las notas conservan su material amarillo claro y tinta cálida. El inspector expone herramientas del objeto seleccionado.

Botones transicionan fondo y sombra en 160ms; portadas y toast usan 200ms. La llegada de contenido dura 220ms con `ease-out`, opacidad inicial 0.7 y desplazamiento de 5px. La preferencia de movimiento reducido desactiva animaciones, transiciones y desplazamiento suave.

## Do's and Don'ts

### Do:
- Do mantener Segoe UI y los roles de tema compartidos.
- Do mostrar contenido real y estados vacíos honestos.
- Do conservar foco visible y respetar movimiento reducido.
- Do mantener los colores del contenido independientes del tema.

### Don't:
- Don't sustituir la biblioteca por métricas decorativas.
- Don't introducir convenciones visuales de macOS.
- Don't recortar imágenes de portada que usan ajuste completo.
- Don't declarar adaptación móvil ni validación del motor no realizadas.
