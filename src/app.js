let currentConfig = {};

// Elementos de navegación
const dashboardView = document.getElementById('dashboardView');
const settingsView = document.getElementById('settingsView');
const settingsBtn = document.getElementById('settingsBtn');
const backBtn = document.getElementById('backBtn');
const dashboardTitle = document.getElementById('dashboardTitle');
const dashboardIcon = document.getElementById('dashboardIcon');

// Elementos del DOM para configuración
const appNameInput = document.getElementById('appName');
const iconPathInput = document.getElementById('iconPath');
const iconImageInput = document.getElementById('iconImage');
const iconPreview = document.getElementById('iconPreview');
const bgColorInput = document.getElementById('bgColor');
const bgColorText = document.getElementById('bgColorText');
const textColorInput = document.getElementById('textColor');
const textColorText = document.getElementById('textColorText');
const accentColorInput = document.getElementById('accentColor');
const accentColorText = document.getElementById('accentColorText');
const fontSizeInput = document.getElementById('fontSize');
const fontSizeDisplay = document.getElementById('fontSizeDisplay');
const borderRadiusInput = document.getElementById('borderRadius');
const borderRadiusDisplay = document.getElementById('borderRadiusDisplay');

// Elementos para personalización del dashboard
const emojiIngresosInput = document.getElementById('emojiIngresos');
const emojiOrdenesInput = document.getElementById('emojiOrdenes');
const emojiClientesInput = document.getElementById('emojiClientes');
const emojiCrecimientoInput = document.getElementById('emojiCrecimiento');
const chartColorInput = document.getElementById('chartColor');
const chartColorText = document.getElementById('chartColorText');
const barColorInput = document.getElementById('barColor');
const barColorText = document.getElementById('barColorText');
const statusCompletedColorInput = document.getElementById('statusCompletedColor');
const statusCompletedColorText = document.getElementById('statusCompletedColorText');
const statusPendingColorInput = document.getElementById('statusPendingColor');
const statusPendingColorText = document.getElementById('statusPendingColorText');
const statusProcessingColorInput = document.getElementById('statusProcessingColor');
const statusProcessingColorText = document.getElementById('statusProcessingColorText');

const resetBtn = document.getElementById('resetBtn');
const exportBtn = document.getElementById('exportBtn');
const appPreview = document.getElementById('appPreview');
const configDisplay = document.getElementById('configDisplay');

// ========== FUNCIONES DE NAVEGACIÓN ==========

function showDashboard() {
  dashboardView.classList.add('active');
  settingsView.classList.remove('active');
}

function showSettings() {
  dashboardView.classList.remove('active');
  settingsView.classList.add('active');
}

// Event listeners para navegación
settingsBtn.addEventListener('click', showSettings);
backBtn.addEventListener('click', showDashboard);

// ========== FUNCIONES DE CONFIGURACIÓN ==========

// Cargar configuración inicial
async function loadConfig() {
  try {
    currentConfig = await window.electronAPI.getConfig();
    updateAllControls();
    updatePreview();
    updateDashboard();
  } catch (error) {
    console.error('Error loading config:', error);
  }
}

// Actualizar todos los controles con la configuración
function updateAllControls() {
  appNameInput.value = currentConfig.appName || '';
  iconPathInput.value = currentConfig.iconPath || '';
  bgColorInput.value = currentConfig.bgColor || '#1a1a1a';
  bgColorText.value = currentConfig.bgColor || '#1a1a1a';
  textColorInput.value = currentConfig.textColor || '#ffffff';
  textColorText.value = currentConfig.textColor || '#ffffff';
  accentColorInput.value = currentConfig.accentColor || '#00bfff';
  accentColorText.value = currentConfig.accentColor || '#00bfff';
  fontSizeInput.value = currentConfig.fontSize || 16;
  fontSizeDisplay.textContent = (currentConfig.fontSize || 16) + 'px';
  borderRadiusInput.value = currentConfig.borderRadius || 8;
  borderRadiusDisplay.textContent = (currentConfig.borderRadius || 8) + 'px';

  // Actualizar emojis del dashboard
  emojiIngresosInput.value = currentConfig.emojiIngresos || '💰';
  emojiOrdenesInput.value = currentConfig.emojiOrdenes || '📦';
  emojiClientesInput.value = currentConfig.emojiClientes || '👥';
  emojiCrecimientoInput.value = currentConfig.emojiCrecimiento || '📈';

  // Actualizar colores de dashboard
  chartColorInput.value = currentConfig.chartColor || '#00bfff';
  chartColorText.value = currentConfig.chartColor || '#00bfff';
  barColorInput.value = currentConfig.barColor || '#4ade80';
  barColorText.value = currentConfig.barColor || '#4ade80';
  statusCompletedColorInput.value = currentConfig.statusCompletedColor || '#4ade80';
  statusCompletedColorText.value = currentConfig.statusCompletedColor || '#4ade80';
  statusPendingColorInput.value = currentConfig.statusPendingColor || '#ffc107';
  statusPendingColorText.value = currentConfig.statusPendingColor || '#ffc107';
  statusProcessingColorInput.value = currentConfig.statusProcessingColor || '#00bfff';
  statusProcessingColorText.value = currentConfig.statusProcessingColor || '#00bfff';

  // Actualizar preview de la imagen
  if (currentConfig.iconImage) {
    iconPreview.innerHTML = `<img src="${currentConfig.iconImage}" alt="icon">`;
  } else {
    iconPreview.innerHTML = '';
  }
}

// Actualizar dashboard con los cambios
function updateDashboard() {
  // Aplicar fondo al dashboard view
  dashboardView.style.backgroundColor = currentConfig.bgColor;

  dashboardTitle.textContent = currentConfig.appName || 'Dashboard';
  dashboardIcon.textContent = currentConfig.iconPath || '📊';

  // Mostrar icono (emoji o imagen)
  if (currentConfig.iconImage) {
    dashboardIcon.innerHTML = `<img src="${currentConfig.iconImage}" alt="icon" style="width: 32px; height: 32px; object-fit: contain;">`;
  } else {
    dashboardIcon.textContent = currentConfig.iconPath || '📊';
  }

  // Aplicar estilos dinámicos al dashboard container
  const dashboardContainer = dashboardView.querySelector('.dashboard-container');
  if (dashboardContainer) {
    dashboardContainer.style.color = currentConfig.textColor;
    dashboardContainer.style.fontSize = currentConfig.fontSize + 'px';
  }

  // Aplicar estilos al header
  const dashboardHeader = dashboardView.querySelector('.dashboard-header');
  if (dashboardHeader) {
    dashboardHeader.style.backgroundColor = currentConfig.bgColor;
    dashboardHeader.style.color = currentConfig.textColor;
    dashboardHeader.style.fontSize = currentConfig.fontSize + 'px';
    dashboardHeader.style.borderRadius = currentConfig.borderRadius + 'px';
    dashboardHeader.style.borderColor = currentConfig.accentColor;
  }

  // Actualizar título y icono del header
  const headerH1 = dashboardView.querySelector('.dashboard-header h1');
  if (headerH1) {
    headerH1.style.fontSize = (currentConfig.fontSize + 12) + 'px';
    headerH1.style.color = currentConfig.accentColor;
  }

  // Aplicar estilos a las stat-cards
  const statCards = dashboardView.querySelectorAll('.stat-card');
  statCards.forEach(card => {
    card.style.backgroundColor = lightenColor(currentConfig.bgColor, 5);
    card.style.color = currentConfig.textColor;
    card.style.borderRadius = currentConfig.borderRadius + 'px';
    card.style.borderColor = currentConfig.accentColor;

    // Actualizar textos dentro de stat-card
    const statLabel = card.querySelector('.stat-label');
    const statValue = card.querySelector('.stat-value');
    if (statLabel) statLabel.style.fontSize = (currentConfig.fontSize - 2) + 'px';
    if (statValue) {
      statValue.style.fontSize = (currentConfig.fontSize + 12) + 'px';
      statValue.style.color = currentConfig.accentColor;
    }
  });

  // Aplicar estilos a los chart-cards
  const chartCards = dashboardView.querySelectorAll('.chart-card');
  chartCards.forEach(card => {
    card.style.backgroundColor = lightenColor(currentConfig.bgColor, 5);
    card.style.color = currentConfig.textColor;
    card.style.borderRadius = currentConfig.borderRadius + 'px';
    card.style.borderColor = currentConfig.accentColor;

    const chartH3 = card.querySelector('h3');
    if (chartH3) {
      chartH3.style.color = currentConfig.accentColor;
      chartH3.style.fontSize = (currentConfig.fontSize + 2) + 'px';
    }
  });

  // Aplicar estilos a recent-orders
  const recentOrders = dashboardView.querySelector('.recent-orders');
  if (recentOrders) {
    recentOrders.style.backgroundColor = lightenColor(currentConfig.bgColor, 5);
    recentOrders.style.color = currentConfig.textColor;
    recentOrders.style.borderRadius = currentConfig.borderRadius + 'px';
    recentOrders.style.borderColor = currentConfig.accentColor;

    const ordersH3 = recentOrders.querySelector('h3');
    if (ordersH3) {
      ordersH3.style.color = currentConfig.accentColor;
      ordersH3.style.fontSize = (currentConfig.fontSize + 2) + 'px';
    }
  }

  // Aplicar estilos a la tabla
  const table = dashboardView.querySelector('.orders-table');
  if (table) {
    const thead = table.querySelector('thead');
    if (thead) {
      thead.style.backgroundColor = lightenColor(currentConfig.bgColor, 15);
      const ths = thead.querySelectorAll('th');
      ths.forEach(th => {
        th.style.color = currentConfig.accentColor;
        th.style.fontSize = (currentConfig.fontSize - 2) + 'px';
      });
    }

    const tbody = table.querySelector('tbody');
    if (tbody) {
      const tds = tbody.querySelectorAll('td');
      tds.forEach(td => {
        td.style.color = currentConfig.textColor;
        td.style.fontSize = currentConfig.fontSize + 'px';
      });
    }
  }
}

// Actualizar vista previa
function updatePreview() {
  const preview = appPreview;
  const header = preview.querySelector('header');
  const appIcon = preview.querySelector('.app-icon');
  const appTitle = preview.querySelector('header h1');
  const cards = preview.querySelectorAll('.card');

  // Aplicar estilos al preview
  preview.style.backgroundColor = currentConfig.bgColor;
  preview.style.color = currentConfig.textColor;
  preview.style.fontSize = currentConfig.fontSize + 'px';
  preview.style.borderRadius = currentConfig.borderRadius + 'px';

  appTitle.textContent = currentConfig.appName;

  // Mostrar icono (emoji o imagen)
  if (currentConfig.iconImage) {
    appIcon.innerHTML = `<img src="${currentConfig.iconImage}" alt="icon" style="width: 32px; height: 32px; object-fit: contain;">`;
  } else {
    appIcon.textContent = currentConfig.iconPath;
    appIcon.innerHTML = appIcon.innerHTML;
  }

  // Actualizar header
  header.style.borderBottomColor = currentConfig.accentColor;
  header.style.fontSize = currentConfig.fontSize + 'px';

  // Actualizar título
  appTitle.style.fontSize = (currentConfig.fontSize + 8) + 'px';

  // Actualizar cards
  cards.forEach(card => {
    card.style.backgroundColor = lightenColor(currentConfig.bgColor, 10);
    card.style.borderLeftColor = currentConfig.accentColor;
    card.style.borderRadius = currentConfig.borderRadius + 'px';
    card.style.color = currentConfig.textColor;

    const cardH3 = card.querySelector('h3');
    const cardP = card.querySelector('p');

    if (cardH3) cardH3.style.fontSize = (currentConfig.fontSize + 2) + 'px';
    if (cardP) cardP.style.fontSize = currentConfig.fontSize + 'px';
  });

  // Actualizar info de configuración
  updateConfigDisplay();
}

// Mostrar configuración actual
function updateConfigDisplay() {
  const configText = JSON.stringify(currentConfig, null, 2);
  configDisplay.textContent = configText;
}

// Función para aclarar colores
function lightenColor(color, percent) {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, (num >> 16) + amt);
  const G = Math.min(255, (num >> 8 & 0x00FF) + amt);
  const B = Math.min(255, (num & 0x0000FF) + amt);
  return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
}

// ========== EVENT LISTENERS ==========

appNameInput.addEventListener('input', (e) => {
  currentConfig.appName = e.target.value;
  updatePreview();
  updateDashboard();
  saveConfig();
});

iconPathInput.addEventListener('input', (e) => {
  currentConfig.iconPath = e.target.value;
  updatePreview();
  updateDashboard();
  saveConfig();
});

iconImageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      currentConfig.iconImage = event.target.result;
      updateAllControls();
      updatePreview();
      updateDashboard();
      saveConfig();
    };
    reader.readAsDataURL(file);
  }
});

bgColorInput.addEventListener('change', (e) => {
  currentConfig.bgColor = e.target.value;
  bgColorText.value = e.target.value;
  updatePreview();
  updateDashboard();
  saveConfig();
});

bgColorText.addEventListener('change', (e) => {
  if (isValidColor(e.target.value)) {
    currentConfig.bgColor = e.target.value;
    bgColorInput.value = e.target.value;
    updatePreview();
    updateDashboard();
    saveConfig();
  }
});

textColorInput.addEventListener('change', (e) => {
  currentConfig.textColor = e.target.value;
  textColorText.value = e.target.value;
  updatePreview();
  updateDashboard();
  saveConfig();
});

textColorText.addEventListener('change', (e) => {
  if (isValidColor(e.target.value)) {
    currentConfig.textColor = e.target.value;
    textColorInput.value = e.target.value;
    updatePreview();
    updateDashboard();
    saveConfig();
  }
});

accentColorInput.addEventListener('change', (e) => {
  currentConfig.accentColor = e.target.value;
  accentColorText.value = e.target.value;
  updatePreview();
  updateDashboard();
  saveConfig();
});

accentColorText.addEventListener('change', (e) => {
  if (isValidColor(e.target.value)) {
    currentConfig.accentColor = e.target.value;
    accentColorInput.value = e.target.value;
    updatePreview();
    updateDashboard();
    saveConfig();
  }
});

fontSizeInput.addEventListener('input', (e) => {
  currentConfig.fontSize = parseInt(e.target.value);
  fontSizeDisplay.textContent = e.target.value + 'px';
  updatePreview();
  updateDashboard();
  saveConfig();
});

borderRadiusInput.addEventListener('input', (e) => {
  currentConfig.borderRadius = parseInt(e.target.value);
  borderRadiusDisplay.textContent = e.target.value + 'px';
  updatePreview();
  updateDashboard();
  saveConfig();
});

// Event listeners para emojis del dashboard
emojiIngresosInput.addEventListener('input', (e) => {
  currentConfig.emojiIngresos = e.target.value;
  const estatua = dashboardView.querySelectorAll('.stat-card')[0];
  if (estatua) estatua.querySelector('.stat-icon').textContent = e.target.value;
  saveConfig();
});

emojiOrdenesInput.addEventListener('input', (e) => {
  currentConfig.emojiOrdenes = e.target.value;
  const estatua = dashboardView.querySelectorAll('.stat-card')[1];
  if (estatua) estatua.querySelector('.stat-icon').textContent = e.target.value;
  saveConfig();
});

emojiClientesInput.addEventListener('input', (e) => {
  currentConfig.emojiClientes = e.target.value;
  const estatua = dashboardView.querySelectorAll('.stat-card')[2];
  if (estatua) estatua.querySelector('.stat-icon').textContent = e.target.value;
  saveConfig();
});

emojiCrecimientoInput.addEventListener('input', (e) => {
  currentConfig.emojiCrecimiento = e.target.value;
  const estatua = dashboardView.querySelectorAll('.stat-card')[3];
  if (estatua) estatua.querySelector('.stat-icon').textContent = e.target.value;
  saveConfig();
});

// Event listeners para colores del dashboard
chartColorInput.addEventListener('change', (e) => {
  currentConfig.chartColor = e.target.value;
  chartColorText.value = e.target.value;
  const miniChart = dashboardView.querySelector('.mini-chart');
  if (miniChart) miniChart.style.color = e.target.value;
  saveConfig();
});

chartColorText.addEventListener('change', (e) => {
  if (isValidColor(e.target.value)) {
    currentConfig.chartColor = e.target.value;
    chartColorInput.value = e.target.value;
    const miniChart = dashboardView.querySelector('.mini-chart');
    if (miniChart) miniChart.style.color = e.target.value;
    saveConfig();
  }
});

barColorInput.addEventListener('change', (e) => {
  currentConfig.barColor = e.target.value;
  barColorText.value = e.target.value;
  const barras = dashboardView.querySelectorAll('.category-fill');
  barras.forEach(barra => {
    barra.style.background = `linear-gradient(90deg, ${e.target.value}, ${e.target.value}cc)`;
  });
  saveConfig();
});

barColorText.addEventListener('change', (e) => {
  if (isValidColor(e.target.value)) {
    currentConfig.barColor = e.target.value;
    barColorInput.value = e.target.value;
    const barras = dashboardView.querySelectorAll('.category-fill');
    barras.forEach(barra => {
      barra.style.background = `linear-gradient(90deg, ${e.target.value}, ${e.target.value}cc)`;
    });
    saveConfig();
  }
});

statusCompletedColorInput.addEventListener('change', (e) => {
  currentConfig.statusCompletedColor = e.target.value;
  statusCompletedColorText.value = e.target.value;
  const statusCompleted = dashboardView.querySelectorAll('.status.completed');
  statusCompleted.forEach(status => {
    status.style.color = e.target.value;
    status.style.backgroundColor = `rgba(${hexToRgb(e.target.value).join(', ')}, 0.2)`;
  });
  saveConfig();
});

statusCompletedColorText.addEventListener('change', (e) => {
  if (isValidColor(e.target.value)) {
    currentConfig.statusCompletedColor = e.target.value;
    statusCompletedColorInput.value = e.target.value;
    const statusCompleted = dashboardView.querySelectorAll('.status.completed');
    statusCompleted.forEach(status => {
      status.style.color = e.target.value;
      status.style.backgroundColor = `rgba(${hexToRgb(e.target.value).join(', ')}, 0.2)`;
    });
    saveConfig();
  }
});

statusPendingColorInput.addEventListener('change', (e) => {
  currentConfig.statusPendingColor = e.target.value;
  statusPendingColorText.value = e.target.value;
  const statusPending = dashboardView.querySelectorAll('.status.pending');
  statusPending.forEach(status => {
    status.style.color = e.target.value;
    status.style.backgroundColor = `rgba(${hexToRgb(e.target.value).join(', ')}, 0.2)`;
  });
  saveConfig();
});

statusPendingColorText.addEventListener('change', (e) => {
  if (isValidColor(e.target.value)) {
    currentConfig.statusPendingColor = e.target.value;
    statusPendingColorInput.value = e.target.value;
    const statusPending = dashboardView.querySelectorAll('.status.pending');
    statusPending.forEach(status => {
      status.style.color = e.target.value;
      status.style.backgroundColor = `rgba(${hexToRgb(e.target.value).join(', ')}, 0.2)`;
    });
    saveConfig();
  }
});

statusProcessingColorInput.addEventListener('change', (e) => {
  currentConfig.statusProcessingColor = e.target.value;
  statusProcessingColorText.value = e.target.value;
  const statusProcessing = dashboardView.querySelectorAll('.status.processing');
  statusProcessing.forEach(status => {
    status.style.color = e.target.value;
    status.style.backgroundColor = `rgba(${hexToRgb(e.target.value).join(', ')}, 0.2)`;
  });
  saveConfig();
});

statusProcessingColorText.addEventListener('change', (e) => {
  if (isValidColor(e.target.value)) {
    currentConfig.statusProcessingColor = e.target.value;
    statusProcessingColorInput.value = e.target.value;
    const statusProcessing = dashboardView.querySelectorAll('.status.processing');
    statusProcessing.forEach(status => {
      status.style.color = e.target.value;
      status.style.backgroundColor = `rgba(${hexToRgb(e.target.value).join(', ')}, 0.2)`;
    });
    saveConfig();
  }
});

resetBtn.addEventListener('click', async () => {
  if (confirm('¿Deseas restablecer la configuración por defecto?')) {
    currentConfig = await window.electronAPI.resetConfig();
    updateAllControls();
    updatePreview();
    updateDashboard();
  }
});

exportBtn.addEventListener('click', () => {
  const configJson = JSON.stringify(currentConfig, null, 2);
  const blob = new Blob([configJson], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'config.json';
  a.click();
  URL.revokeObjectURL(url);
});

// Función auxiliar para validar colores
function isValidColor(color) {
  return /^#[0-9A-F]{6}$/i.test(color);
}

// Función para convertir hex a RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : [0, 0, 0];
}

// Función para guardar configuración
function saveConfig() {
  window.electronAPI.saveConfig(currentConfig);
}

// Escuchar actualizaciones de configuración desde otros procesos
window.electronAPI.onConfigUpdate((config) => {
  currentConfig = config;
  updateAllControls();
  updatePreview();
  updateDashboard();
});

// Cargar configuración al iniciar
document.addEventListener('DOMContentLoaded', loadConfig);
