# 🎨 UI Customizer - Aplicación Desktop Personalizable

Una aplicación de escritorio para Windows que permite personalizar completamente la interfaz en tiempo real. Cambia colores, tamaños de fuente, iconos y más sin necesidad de reiniciar.

## 📋 Características

✅ **Cambios en Tiempo Real** - Todos los ajustes se aplican instantáneamente
✅ **Personalización Completa** - Colores, fuentes, iconos y estilos
✅ **Persistencia** - Los cambios se guardan automáticamente en `config.json`
✅ **Vista Previa** - Visualiza los cambios mientras los realizas
✅ **Exportar Configuración** - Descarga tu configuración personalizada
✅ **Restablecer Valores** - Vuelve a los valores por defecto fácilmente

## 🚀 Instalación y Ejecución

### Opción 1: Con VS Code (Recomendado)

1. **Abre la carpeta del proyecto en VS Code**
   ```bash
   Abre VS Code y carga la carpeta del proyecto
   ```

2. **Abre la terminal integrada** (Ctrl + `)

3. **Instala las dependencias**
   ```bash
   npm install
   ```

4. **Ejecuta la aplicación**
   ```bash
   npm start
   ```

¡Listo! La app debería abrirse automáticamente.

### Opción 2: Desde Línea de Comandos

1. **Abre una terminal** (PowerShell o CMD)

2. **Navega a la carpeta del proyecto**
   ```bash
   cd "tu-ruta-a-la-carpeta"
   ```

3. **Instala dependencias**
   ```bash
   npm install
   ```

4. **Ejecuta la app**
   ```bash
   npm start
   ```

## 📁 Estructura del Proyecto

```
Prueba app modificable/
├── main.js              # Proceso principal de Electron
├── preload.js           # Puente de comunicación segura
├── package.json         # Configuración del proyecto
├── config.json          # Archivo de propiedades personalizable
├── src/
│   ├── index.html       # Interfaz principal
│   ├── styles.css       # Estilos de la app
│   └── app.js          # Lógica de la aplicación
└── README.md           # Este archivo
```

## ⚙️ Archivo de Configuración (config.json)

El archivo `config.json` contiene todas las propiedades personalizables:

```json
{
  "appName": "UI Customizer",
  "bgColor": "#1a1a1a",
  "textColor": "#ffffff",
  "accentColor": "#00bfff",
  "fontSize": 16,
  "borderRadius": 8,
  "iconPath": "📎"
}
```

### Parámetros Personalizables:

| Parámetro | Tipo | Rango | Descripción |
|-----------|------|-------|-------------|
| `appName` | string | - | Nombre mostrado de la aplicación |
| `bgColor` | hex color | #000000 - #FFFFFF | Color de fondo principal |
| `textColor` | hex color | #000000 - #FFFFFF | Color del texto |
| `accentColor` | hex color | #000000 - #FFFFFF | Color de los acentos (bordes, iconos) |
| `fontSize` | number | 12 - 24 | Tamaño de fuente en píxeles |
| `borderRadius` | number | 0 - 20 | Radio de los bordes en píxeles |
| `iconPath` | string | emoji/símbolo | Emoji o símbolo a mostrar |

## 🎮 Cómo Usar la App

### Panel de Control (Lado Izquierdo)

1. **Información de la App**
   - Cambia el nombre y el emoji/icono
   - Los cambios aparecen en la vista previa instantáneamente

2. **Colores**
   - Usa el selector de color o escribe el código hexadecimal
   - Puedes alternar entre el selector visual y el código hex

3. **Estilos**
   - **Tamaño de Fuente**: Desliza para cambiar de 12px a 24px
   - **Radio de Borde**: Desliza para cambiar de 0px a 20px

4. **Botones de Acción**
   - **🔄 Restablecer**: Vuelve a la configuración por defecto
   - **💾 Exportar Config**: Descarga tu configuración actual como JSON

### Vista Previa (Lado Derecho)

- Visualiza en tiempo real cómo se verá tu aplicación personalizada
- Incluye ejemplos de tarjetas (cards) que muestran diferentes secciones
- Muestra la configuración actual en formato JSON

## 💾 Persistencia de Datos

- Todos los cambios se guardan **automáticamente** en `config.json`
- La configuración se mantiene incluso después de cerrar la app
- Si eliminas `config.json`, la app cargará los valores por defecto

## 🔧 Parámetros Personalizables en Tiempo Real

La app permite cambiar en VIVO:

✅ Nombre de la aplicación
✅ Icono/Emoji (cualquier emoji Unicode)
✅ Color de fondo
✅ Color de texto
✅ Color de acento
✅ Tamaño de fuente
✅ Radio de los bordes

Todos estos cambios se sincronizan instantáneamente en:
- Panel de control
- Vista previa
- Archivo de configuración (`config.json`)

## 🔄 Modo Desarrollo

Si quieres abrir las herramientas de desarrollador:

```bash
npm run dev
```

Esto abrirá automáticamente la consola del desarrollador de Electron.

## 📝 Notas Importantes

- **Node.js es requerido**: La app necesita Node.js para funcionar
- **Windows**: Optimizado para Windows, aunque debería funcionar en macOS y Linux
- **Cambios en tiempo real**: Las actualizaciones son instantáneas sin necesidad de recargar
- **Archivos generados**: El archivo `config.json` se crea/actualiza automáticamente

## 🐛 Troubleshooting

### "npm: command not found"
- Node.js no está instalado correctamente
- Instala Node.js desde https://nodejs.org/

### App no abre
- Asegúrate de tener Node.js v12 o superior
- Ejecuta `npm install` nuevamente
- Elimina la carpeta `node_modules` y ejecuta `npm install`

### Los cambios no se guardan
- Verifica que tengas permisos de escritura en la carpeta
- Asegúrate de que `config.json` no está marcado como "solo lectura"

### Problemas de color
- Usa formato hexadecimal válido: `#RRGGBB` (ej: #FF0000)
- Los colores se sincronizan automáticamente entre el selector y el campo de texto

## 📦 Dependencias

- **Electron** (v latest): Framework para crear aplicaciones de escritorio
- **Node.js**: Entorno de ejecución (requerido)

## 🎯 Próximas Mejoras (Sugerencias)

- [ ] Guardar múltiples perfiles de configuración
- [ ] Importar configuración desde archivo
- [ ] Tema claro/oscuro automático
- [ ] Animaciones personalizables
- [ ] Fuentes personalizadas
- [ ] Versión web

## 📄 Licencia

MIT

---

**¿Preguntas o sugerencias?** Puedes modificar directamente los archivos para experimentar con diferentes configuraciones.
