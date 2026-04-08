# 🎨 UI Customizer - Aplicación Desktop White Label

Una aplicación de escritorio para Windows que permite personalizar completamente la interfaz en tiempo real. Diseñada como **solución White Label** para que cada cliente adapte la app a su marca y identidad visual.

## ✨ Características Principales

### 🎯 White Label (Personalización Total)
- ✅ Cambios en tiempo real sin necesidad de reiniciar
- ✅ Persistencia automática en `config.json`
- ✅ Fácil exportación de configuraciones personalizadas
- ✅ Interfaz intuitiva para clientes finales
- ✅ Temas preestablecidos (Dark, Light, Corporate, Modern)
- ✅ Historial de cambios (Undo/Redo)
- ✅ Validación de accesibilidad (contraste de colores)
- ✅ Comparación antes/después de cambios

### 🖼️ Dashboard Personalizable
- 📊 Dashboard simulado con estadísticas
- 🎨 Colores completamente customizables
- 🔤 Tamaño de fuente ajustable
- 🎭 Emojis/iconos editables
- 📈 Gráficos con colores personalizados
- 🎯 Vista previa en tiempo real
- 📊 Barras de estado personalizables

### ⚙️ Panel de Configuración Completo
- Información de la app (nombre, icono, imagen)
- Personalización de colores (fondo, texto, acentos)
- Estilos (tamaño fuente, radio de bordes)
- **Personalización visual del dashboard:**
  - Emojis de estadísticas (Ingresos, Órdenes, Clientes, Crecimiento)
  - Color de gráficos
  - Color de barras de categorías
  - Colores de estados (Completada, Pendiente, Procesando)

### 🚀 Características Avanzadas

#### 1. **Temas Preestablecidos** 🎨
4 temas listos para usar con un solo clic:
- 🌙 **Dark**: Tema oscuro profesional (por defecto)
- ☀️ **Light**: Tema claro minimalista
- 💼 **Corporate**: Tema corporativo azul
- 🚀 **Modern**: Tema moderno estilo GitHub

#### 2. **Historial de Cambios** 🔄
- Botones Deshacer/Rehacer
- Hasta 20 cambios en historial
- Navegación rápida entre versiones
- Sin pérdida de datos

#### 3. **Comparación Antes/Después** 🔀
- Modal visual comparando configuración original vs actual
- Muestra todos los parámetros lado a lado
- Ayuda a visualizar el impacto de los cambios

#### 4. **Validación de Accesibilidad** ✓
- Verifica contraste entre fondo y texto
- Niveles: Excelente ≥7:1, Bueno ≥4.5:1, Bajo <4.5:1
- Aviso automático si el contraste es insuficiente

## 🚀 Instalación y Ejecución

### Opción 1: Con VS Code (Recomendado)

1. **Abre VS Code y carga la carpeta del proyecto**

2. **Abre la terminal integrada** (Ctrl + `)

3. **Instala las dependencias**
   ```bash
   npm install
   ```

4. **Ejecuta la aplicación**
   ```bash
   npm start
   ```

### Opción 2: Doble-clic en Windows

1. **Doble-clic en `install.bat`** - Instala Electron
2. **Doble-clic en `start.bat`** - Ejecuta la app

### Opción 3: Desde Línea de Comandos

```bash
cd "tu-ruta-a-la-carpeta"
npm install
npm start
```

## 📁 Estructura del Proyecto

```
Prueba app modificable/
├── main.js                  # Proceso principal de Electron
├── preload.js               # Puente de comunicación segura
├── package.json             # Configuración del proyecto
├── config.json              # Archivo de propiedades (persistente)
├── config.example.json      # Ejemplo de configuración
├── install.bat              # Instalador rápido (Windows)
├── start.bat                # Ejecutar rápido (Windows)
├── README.md                # Este archivo
├── QUICKSTART.md            # Guía rápida
├── .gitignore               # Configuración git
└── src/
    ├── index.html           # Interfaz (Dashboard + Settings)
    ├── styles.css           # Estilos (1000+ líneas)
    └── app.js               # Lógica de personalización
```

## ⚙️ Archivo de Configuración (config.json)

```json
{
  "appName": "UI Customizer",
  "bgColor": "#1a1a1a",
  "textColor": "#ffffff",
  "accentColor": "#00bfff",
  "fontSize": 16,
  "borderRadius": 8,
  "iconPath": "📎",
  "iconImage": null,
  "emojiIngresos": "💰",
  "emojiOrdenes": "📦",
  "emojiClientes": "👥",
  "emojiCrecimiento": "📈",
  "chartColor": "#00bfff",
  "barColor": "#4ade80",
  "statusCompletedColor": "#4ade80",
  "statusPendingColor": "#ffc107",
  "statusProcessingColor": "#00bfff"
}
```

## 📋 Parámetros Personalizables

### 📱 Información de la App

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `appName` | string | Nombre mostrado de la aplicación |
| `iconPath` | emoji | Emoji o símbolo a mostrar |
| `iconImage` | base64 | Imagen (JPG, PNG, ICO) codificada |

### 🎨 Estilos Generales

| Parámetro | Tipo | Rango | Descripción |
|-----------|------|-------|-------------|
| `bgColor` | hex | #000000 - #FFFFFF | Color de fondo principal |
| `textColor` | hex | #000000 - #FFFFFF | Color del texto |
| `accentColor` | hex | #000000 - #FFFFFF | Color de acentos |
| `fontSize` | number | 12 - 24 px | Tamaño de fuente |
| `borderRadius` | number | 0 - 20 px | Radio de bordes |

### 📊 Personalización del Dashboard

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `emojiIngresos` | emoji | Emoji tarjeta "Ingresos" |
| `emojiOrdenes` | emoji | Emoji tarjeta "Órdenes" |
| `emojiClientes` | emoji | Emoji tarjeta "Clientes" |
| `emojiCrecimiento` | emoji | Emoji tarjeta "Crecimiento" |
| `chartColor` | hex | Color de la gráfica |
| `barColor` | hex | Color de las barras de categorías |
| `statusCompletedColor` | hex | Color status "Completada" |
| `statusPendingColor` | hex | Color status "Pendiente" |
| `statusProcessingColor` | hex | Color status "Procesando" |

## 🎮 Cómo Usar la App

### 🏠 Vista Dashboard
La app abre mostrando un dashboard de ventas simulado con:
- Tarjetas de estadísticas personalizables
- Gráficos de ventas
- Tabla de órdenes recientes
- Botón **⚙️ Configuración** para acceder al panel de control

### ⚙️ Vista Configuración

#### 1️⃣ **Temas Preestablecidos**
- 4 botones para temas listos: Dark, Light, Corporate, Modern
- Cambio instantáneo de toda la paleta de colores
- Perfecto para pruebas rápidas

#### 2️⃣ **Control de Cambios**
- **Deshacer (↶)**: Revierte al estado anterior
- **Rehacer (↷)**: Avanza al estado siguiente
- Historial de hasta 20 cambios
- Botones deshabilitados cuando no hay acciones

#### 3️⃣ **Validación de Accesibilidad**
- Badge que muestra el ratio de contraste
- Colores: Verde (excelente), Azul (bueno), Rojo (advertencia)
- Ayuda a crear interfaces accesibles

#### 4️⃣ **Información de la App**
- Cambia el nombre de la aplicación
- Selecciona emoji o sube una imagen (JPG, PNG, ICO)
- Los cambios aparecen instantáneamente

#### 5️⃣ **Colores Generales**
- Selector de color o código hexadecimal
- Cambios sincronizan entre selector y campo de texto
- Se aplican a toda la interfaz

#### 6️⃣ **Estilos**
- **Tamaño de Fuente**: Desliza de 12px a 24px
- **Radio de Borde**: Desliza de 0px a 20px

#### 7️⃣ **Personalización del Dashboard**
- **Emojis de Estadísticas**: Cambia los 4 emojis de las tarjetas
- **Color de Gráfica**: Define el color de las líneas del gráfico
- **Color de Barras**: Define el color de las barras de categorías
- **Colores de Estados**: Personaliza los 3 colores de status

#### 8️⃣ **Vista Previa**
- **Lado derecho**: Preview en vivo de cómo se vería
- **Panel JSON**: Muestra la configuración actual en tiempo real

#### 9️⃣ **Botones de Acción**
- **🔄 Restablecer**: Vuelve a valores por defecto
- **🔄 Comparar**: Abre modal comparando antes/después
- **💾 Exportar Config**: Descarga JSON con la configuración actual

### 🔄 Navegación
- **Dashboard → Configuración**: Clic en botón "⚙️ Configuración"
- **Configuración → Dashboard**: Clic en botón "← Volver al Dashboard"

## 💾 Persistencia de Datos

✅ **Todos los cambios se guardan automáticamente** en `config.json`
✅ **Las configuraciones persisten** al cerrar y reabrir la app
✅ **Si eliminas `config.json`**, se cargarán los valores por defecto

## 🔄 Cambios en Tiempo Real

La app sincroniza instantáneamente entre:

```
Panel de Control
     ↓
  Config JSON (guardado automático)
     ↓
Dashboard (actualización visual)
     ↓
Preview (refleja cambios)
```

**Todos sin necesidad de recargar o reiniciar.**

## 🎯 Caso de Uso: White Label

**Flujo típico para un cliente:**

1. Cliente recibe la app
2. Abre "Configuración"
3. Selecciona un tema preestablecido o personaliza manualmente
4. Usa Undo/Redo para experimentar sin miedo
5. Compara antes/después para ver cambios
6. Verifica accesibilidad con validación de contraste
7. Exporta su `config.json`
8. ¡Parece una app completamente nueva!

## 🔧 Modo Desarrollo

Para abrir las herramientas de desarrollador:

```bash
npm run dev
```

Abre automáticamente la consola de Electron.

## 🐛 Troubleshooting

| Problema | Solución |
|----------|----------|
| "npm: command not found" | Instala Node.js desde https://nodejs.org/ |
| App no abre | Ejecuta `npm install` nuevamente |
| Los cambios no se guardan | Verifica permisos de escritura en la carpeta |
| Colores inválidos | Usa formato hexadecimal: `#RRGGBB` |
| Imagen no carga | Usa JPG, PNG o ICO (máx 2MB) |
| Botones Undo/Redo deshabilitados | No hay historial de cambios aún |

## 📦 Dependencias

- **Electron** (latest): Framework para apps de escritorio
- **Node.js** (v12+): Entorno de ejecución (requerido)

## 🎨 Ejemplos: Temas Personalizados

### Tema Corporativo Azul
```json
{
  "bgColor": "#001f3f",
  "textColor": "#ffffff",
  "accentColor": "#0074d9",
  "statusCompletedColor": "#2ecc40",
  "statusPendingColor": "#ff851b"
}
```

### Tema Moderno Verde
```json
{
  "bgColor": "#0d1117",
  "textColor": "#c9d1d9",
  "accentColor": "#58a6ff",
  "statusCompletedColor": "#3fb950"
}
```

### Tema Pastel Suave
```json
{
  "bgColor": "#fff5f7",
  "textColor": "#2c3e50",
  "accentColor": "#e74c3c",
  "statusCompletedColor": "#27ae60",
  "statusPendingColor": "#f39c12"
}
```

## 📝 Notas Importantes

- 🖥️ **Windows**: Optimizado para Windows 11/10
- 🔄 **Actualizaciones**: Los cambios se sincronizan instantáneamente
- 📱 **Responsive**: Interfaz adaptable
- 🎭 **Dark Theme**: Tema oscuro profesional por defecto
- 🚀 **Sin instalación compleja**: Solo Node.js es requerido
- 🔒 **Archivos Git**: `config.json` está en `.gitignore` para no subir configs personalizadas

## 🎯 Características Futuras

- [ ] Múltiples perfiles de configuración guardados
- [ ] Importar configuración desde archivo JSON
- [ ] Tema claro/oscuro automático según Sistema Operativo
- [ ] Animaciones personalizables
- [ ] Selector de fuentes personalizadas
- [ ] Versión web con sincronización en la nube
- [ ] Exportar como imagen PNG del dashboard

## 📄 Licencia

MIT

---

**¿Preguntas o problemas?** Todos los estilos y configuraciones pueden modificarse directamente en los archivos para experimentar.

**Hecho con ❤️ como solución White Label customizable**
