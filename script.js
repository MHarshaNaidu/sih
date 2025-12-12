// Location permission modal
let locationPermissionRequested = false;

function showLocationPermissionModal() {
  if (locationPermissionRequested) return;
  
  const modal = document.createElement('div');
  modal.className = 'location-permission-modal';
  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <div class="modal-header">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="modal-icon">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
        <h3>Enable Location Services</h3>
      </div>
      <div class="modal-body">
        <p>VEGA Command Center can use your location for accurate robot tracking and survivor detection mapping.</p>
        <p>If denied, the system will use default location and show all sensor data.</p>
      </div>
      <div class="modal-footer">
        <button class="modal-button primary" id="allowLocation">Allow Location</button>
        <button class="modal-button secondary" id="useDefault">Use All Sensor Data</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  locationPermissionRequested = true;
  
  // Add CSS for modal
  const style = document.createElement('style');
  style.textContent = `
    .location-permission-modal {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }
    
    .modal-overlay {
      position: absolute;
      inset: 0;
      background: rgba(15, 23, 42, 0.7);
      backdrop-filter: blur(4px);
    }
    
    .modal-content {
      position: relative;
      background: white;
      border-radius: 1rem;
      padding: 1.5rem;
      max-width: 400px;
      width: 100%;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(13, 148, 136, 0.1);
    }
    
    .modal-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }
    
    .modal-icon {
      width: 2rem;
      height: 2rem;
      color: #0d9488;
    }
    
    .modal-header h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #0f1724;
    }
    
    .modal-body {
      margin-bottom: 1.5rem;
    }
    
    .modal-body p {
      font-size: 0.9rem;
      color: #475569;
      line-height: 1.5;
      margin-bottom: 0.5rem;
    }
    
    .modal-footer {
      display: flex;
      gap: 0.75rem;
    }
    
    .modal-button {
      flex: 1;
      padding: 0.6rem 1rem;
      border-radius: 0.5rem;
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      border: none;
    }
    
    .modal-button.primary {
      background: linear-gradient(135deg, #0d9488, #06b6d4);
      color: white;
    }
    
    .modal-button.primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(13, 148, 136, 0.2);
    }
    
    .modal-button.secondary {
      background: rgba(15, 23, 42, 0.04);
      color: #475569;
      border: 1px solid rgba(15, 23, 42, 0.1);
    }
    
    .modal-button.secondary:hover {
      background: rgba(15, 23, 42, 0.08);
    }
  `;
  document.head.appendChild(style);
  
  // Event listeners
  document.getElementById('allowLocation').addEventListener('click', () => {
    modal.remove();
    style.remove();
    initializeMaps();
  });
  
  document.getElementById('useDefault').addEventListener('click', () => {
    modal.remove();
    style.remove();
    const fallbackLat = 40.7128;
    const fallbackLng = -74.0060;
    userLocation = { lat: fallbackLat, lng: fallbackLng };
    
    // Initialize with default location
    setTimeout(() => {
      initializeHumanMap(fallbackLat, fallbackLng);
      initializeSensorMap(fallbackLat, fallbackLng);
      addUserLocationMarker(fallbackLat, fallbackLng);
      addStaticHumanMarkers(fallbackLat, fallbackLng);
      addStaticSensorMarkers(fallbackLat, fallbackLng);
      updateDetectionCounters();
    }, 100);
  });
}

// Survivor stats with updated logos (no gradient backgrounds)
const survivorStats = [
  {
    title: 'Survivors detected',
    value: 47,
    change: 8,
    unit: 'active',
    color: '#10b981',
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <circle cx="32" cy="20" r="8" fill="#10b981" />
        <path d="M20 44c0-6.6 5.4-12 12-12s12 5.4 12 12v8H20v-8z" fill="#10b981" />
        <circle cx="32" cy="32" r="20" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="4,4" opacity="0.6" />
      </svg>
    `
  },
  {
    title: 'Heartbeat / breath signals',
    value: 23,
    change: 5,
    unit: 'channels',
    color: '#ef4444',
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <path d="M32 52c-8-8-20-16-20-28 0-8 6-12 12-12 4 0 8 2 8 6 0-4 4-6 8-6 6 0 12 4 12 12 0 12-12 20-20 28z" fill="#ef4444" />
        <path d="M8 32h8l4-8 4 16 4-12 4 8h8" fill="none" stroke="#ef4444" stroke-width="2" opacity="0.8" />
      </svg>
    `
  },
  {
    title: 'Gas levels (CO₂)',
    value: 420,
    change: -15,
    unit: 'ppm',
    color: '#f59e0b',
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <circle cx="32" cy="32" r="24" fill="#f59e0b" opacity="0.3" />
        <circle cx="32" cy="32" r="16" fill="#f59e0b" opacity="0.5" />
        <circle cx="32" cy="32" r="8" fill="#f59e0b" />
        <path d="M20 20c4-4 8-4 12 0s8 4 12 0" fill="none" stroke="#f59e0b" stroke-width="2" opacity="0.7" />
      </svg>
    `
  },
  {
    title: 'Thermal heat points',
    value: 156,
    change: 12,
    unit: 'sources',
    color: '#f97316',
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <circle cx="32" cy="32" r="6" fill="#f97316" />
        <circle cx="32" cy="32" r="12" fill="none" stroke="#f97316" stroke-width="2" opacity="0.6" />
        <circle cx="32" cy="32" r="18" fill="none" stroke="#f97316" stroke-width="1" opacity="0.4" />
        <circle cx="32" cy="32" r="24" fill="none" stroke="#f97316" stroke-width="1" opacity="0.2" />
        <path d="M32 8v8M32 48v8M8 32h8M48 32h8" stroke="#f97316" stroke-width="2" opacity="0.8" />
      </svg>
    `
  },
  {
    title: 'Acoustic alerts',
    value: 34,
    change: 6,
    unit: 'signals',
    color: '#8b5cf6',
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <path d="M20 24v16l8-4v-8l-8-4z" fill="#8b5cf6" />
        <path d="M32 20c0 0 8 4 8 12s-8 12-8 12" fill="none" stroke="#8b5cf6" stroke-width="3" />
        <path d="M36 16c0 0 12 6 12 16s-12 16-12 16" fill="none" stroke="#8b5cf6" stroke-width="2" opacity="0.7" />
        <circle cx="32" cy="32" r="20" fill="none" stroke="#8b5cf6" stroke-width="1" stroke-dasharray="2,2" opacity="0.4" />
      </svg>
    `
  },
  {
    title: 'Void spaces found',
    value: 89,
    change: 4,
    unit: 'cavities',
    color: '#06b6d4',
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <rect x="8" y="8" width="48" height="48" fill="none" stroke="#06b6d4" stroke-width="2" />
        <circle cx="32" cy="32" r="12" fill="none" stroke="#06b6d4" stroke-width="2" stroke-dasharray="4,4" />
        <path d="M16 16l32 32M48 16L16 48" stroke="#06b6d4" stroke-width="1" opacity="0.5" />
        <circle cx="20" cy="20" r="2" fill="#06b6d4" opacity="0.8" />
        <circle cx="44" cy="20" r="2" fill="#06b6d4" opacity="0.8" />
        <circle cx="20" cy="44" r="2" fill="#06b6d4" opacity="0.8" />
        <circle cx="44" cy="44" r="2" fill="#06b6d4" opacity="0.8" />
      </svg>
    `
  },
  {
    title: 'Structural risk level',
    value: 73,
    change: -5,
    unit: '% risk',
    color: '#ef4444',
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <path d="M32 8L8 56h48L32 8z" fill="#ef4444" />
        <path d="M32 20v16M32 40v4" stroke="white" stroke-width="3" stroke-linecap="round" />
        <circle cx="32" cy="32" r="28" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,6" opacity="0.4" />
      </svg>
    `
  },
  {
    title: 'Hazardous objects',
    value: 28,
    change: 3,
    unit: 'identified',
    color: '#ec4899',
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <circle cx="32" cy="32" r="20" fill="#ec4899" />
        <path d="M32 16v32M16 32h32" stroke="white" stroke-width="4" />
        <circle cx="32" cy="32" r="24" fill="none" stroke="#ec4899" stroke-width="2" stroke-dasharray="8,4" opacity="0.6" />
        <path d="M20 20l24 24M44 20L20 44" stroke="#ec4899" stroke-width="1" opacity="0.5" />
      </svg>
    `
  }
];

// System performance metrics
const performanceMetrics = [
  { name: 'HAWK network', value: 98, type: 'high' },
  { name: 'Command latency', value: 96, type: 'high' },
  { name: 'Video / telemetry', value: 94, type: 'medium' },
  { name: 'VEGA AI core', value: 92, type: 'good' },
  { name: 'Data pipeline', value: 99, type: 'high' }
];

// Operations (stacked bars)
const operationsData = [
  { time: '00:00', rescues: 12, threats: 3, surveillance: 8 },
  { time: '04:00', rescues: 18, threats: 5, surveillance: 12 },
  { time: '08:00', rescues: 25, threats: 8, surveillance: 15 },
  { time: '12:00', rescues: 32, threats: 12, surveillance: 20 },
  { time: '16:00', rescues: 28, threats: 7, surveillance: 18 },
  { time: '20:00', rescues: 22, threats: 4, surveillance: 14 }
];

// Performance (lines)
const performanceData = [
  { time: '06:00', productivity: 65, success: 78, response: 82 },
  { time: '08:00', productivity: 72, success: 85, response: 88 },
  { time: '10:00', productivity: 85, success: 92, response: 90 },
  { time: '12:00', productivity: 95, success: 96, response: 94 },
  { time: '14:00', productivity: 88, success: 89, response: 91 },
  { time: '16:00', productivity: 92, success: 94, response: 89 },
  { time: '18:00', productivity: 78, success: 82, response: 85 },
  { time: '20:00', productivity: 70, success: 75, response: 80 }
];

// Map instances and data
let humanMapInstance = null;
let sensorMapInstance = null;
let userLocationMarker = null;
let userLocation = null;
let humanMarkers = [];

// Static detection data
const staticHumanData = [
  { type: 'survivor', name: 'Survivor A', description: 'Strong vital signs detected' },
  { type: 'survivor', name: 'Survivor B', description: 'Weak signals, needs attention' },
  { type: 'survivor', name: 'Survivor C', description: 'Trapped in rubble' },
  { type: 'survivor', name: 'Survivor D', description: 'Multiple injuries detected' },
  { type: 'personnel', name: 'Team Alpha', description: 'Rescue team, 4 members' },
  { type: 'personnel', name: 'Team Bravo', description: 'Medical team, 3 members' },
  { type: 'personnel', name: 'Medic Unit', description: 'Mobile medical station' },
  { type: 'personnel', name: 'Engineer Unit', description: 'Structural assessment team' }
];

const staticSensorData = [
  { 
    type: 'thermal', 
    name: 'Heat Source A', 
    value: '45°C', 
    description: 'High temperature anomaly',
    page: 'thermal-details.html'
  },
  { 
    type: 'thermal', 
    name: 'Heat Source B', 
    value: '52°C', 
    description: 'Potential fire hazard',
    page: 'thermal-details.html'
  },
  { 
    type: 'thermal', 
    name: 'Heat Source C', 
    value: '38°C', 
    description: 'Body heat signature',
    page: 'thermal-details.html'
  },
  { 
    type: 'gas', 
    name: 'Gas Sensor A', 
    value: '420 ppm', 
    description: 'CO₂ levels elevated',
    page: 'gas-details.html'
  },
  { 
    type: 'gas', 
    name: 'Gas Sensor B', 
    value: '150 ppm', 
    description: 'CO levels normal',
    page: 'gas-details.html'
  },
  { 
    type: 'gas', 
    name: 'Gas Sensor C', 
    value: '80 ppm', 
    description: 'Methane detected',
    page: 'gas-details.html'
  },
  { 
    type: 'acoustic', 
    name: 'Audio Sensor A', 
    value: '65 dB', 
    description: 'Voice patterns detected',
    page: 'acoustic-details.html'
  },
  { 
    type: 'acoustic', 
    name: 'Audio Sensor B', 
    value: '72 dB', 
    description: 'Structural creaking',
    page: 'acoustic-details.html'
  },
  { 
    type: 'acoustic', 
    name: 'Audio Sensor C', 
    value: '58 dB', 
    description: 'Faint tapping sounds',
    page: 'acoustic-details.html'
  }
];

// Core functions
function createStatCard(stat, index) {
  const changeClass = stat.change >= 0 ? 'change-positive' : 'change-negative';
  const changeSymbol = stat.change > 0 ? '+' : '';

  return `
    <article class="stat-card" style="animation-delay: ${(index + 1) * 0.06}s">
      <div class="card-header">
        <div class="logo-container">
          ${stat.logo}
        </div>
        <span class="change-indicator ${changeClass}">
          ${changeSymbol}${stat.change}
        </span>
      </div>
      <div class="stat-content">
        <div class="stat-value">${stat.value.toLocaleString()}</div>
        <div class="stat-title">${stat.title}</div>
        <div class="stat-unit">${stat.unit}</div>
      </div>
    </article>
  `;
}

function renderStats() {
  const grid = document.getElementById('statsGrid');
  if (!grid) return;
  grid.innerHTML = survivorStats.map((s, i) => createStatCard(s, i)).join('');
}

function updateStats() {
  survivorStats.forEach((stat) => {
    const randomChange = Math.floor(Math.random() * 5) - 2;
    stat.value = Math.max(0, stat.value + randomChange);
    stat.change = randomChange;
  });
  renderStats();
}

function createPerformanceMetrics() {
  const container = document.getElementById('performanceMetrics');
  if (!container) return;
  container.innerHTML = performanceMetrics
    .map(
      (metric) => `
    <div class="performance-metric">
      <div class="metric-header">
        <span class="metric-name">${metric.name}</span>
        <span class="metric-value">${metric.value}%</span>
      </div>
      <div class="metric-bar">
        <div class="metric-fill ${metric.type}" style="width:${metric.value}%"></div>
      </div>
    </div>
  `
    )
    .join('');
}

function drawOperationsChart() {
  const canvas = document.getElementById('operationsChart');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;
  ctx.clearRect(0, 0, width, height);

  const padding = {
    top: 15,
    right: 20,
    bottom: 35,
    left: 40
  };
  
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const barWidth = (chartWidth / operationsData.length) * 0.6;
  const barSpacing = (chartWidth / operationsData.length) * 0.4;
  const maxValue = Math.max(
    ...operationsData.flatMap((d) => [d.rescues, d.threats, d.surveillance])
  );

  // Draw grid
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.15)';
  ctx.lineWidth = 1;
  
  for (let i = 0; i <= 5; i++) {
    const y = padding.top + (i * chartHeight) / 5;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();
    
    // Y-axis labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px ui-monospace';
    ctx.textAlign = 'right';
    ctx.fillText(`${Math.round(maxValue * i / 5)}`, padding.left - 8, y + 3);
  }

  // Draw bars with improved spacing
  operationsData.forEach((d, index) => {
    const x = padding.left + index * (barWidth + barSpacing);
    
    const rescHeight = (d.rescues / maxValue) * chartHeight;
    const threatHeight = (d.threats / maxValue) * chartHeight;
    const survHeight = (d.surveillance / maxValue) * chartHeight;

    // Surveillance (bottom layer)
    ctx.fillStyle = '#06b6d4';
    ctx.fillRect(x, padding.top + chartHeight - survHeight, barWidth, survHeight);
    
    // Threats (middle layer)
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(x, padding.top + chartHeight - survHeight - threatHeight, barWidth, threatHeight);
    
    // Rescues (top layer)
    ctx.fillStyle = '#10b981';
    ctx.fillRect(x, padding.top + chartHeight - survHeight - threatHeight - rescHeight, barWidth, rescHeight);

    // X-axis labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px ui-monospace';
    ctx.textAlign = 'center';
    ctx.fillText(d.time, x + barWidth / 2, height - padding.bottom + 15);
  });

  // Add subtle 3D effect to bars
  operationsData.forEach((d, index) => {
    const x = padding.left + index * (barWidth + barSpacing);
    
    const rescHeight = (d.rescues / maxValue) * chartHeight;
    const threatHeight = (d.threats / maxValue) * chartHeight;
    const survHeight = (d.surveillance / maxValue) * chartHeight;
    
    // Add top highlight to bars
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, padding.top + chartHeight - survHeight - threatHeight - rescHeight);
    ctx.lineTo(x + barWidth, padding.top + chartHeight - survHeight - threatHeight - rescHeight);
    ctx.stroke();
  });
}

function drawPerformanceChart() {
  const canvas = document.getElementById('performanceChart');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;
  ctx.clearRect(0, 0, width, height);

  // Optimized padding for better space utilization
  const padding = {
    top: 15,
    right: 10,
    bottom: 30,
    left: 40
  };
  
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Draw subtle grid lines
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.15)';
  ctx.lineWidth = 1;
  
  // Horizontal grid lines
  for (let i = 0; i <= 5; i++) {
    const y = padding.top + (i * chartHeight) / 5;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();
    
    // Y-axis labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px ui-monospace';
    ctx.textAlign = 'right';
    ctx.fillText(`${100 - i * 20}%`, padding.left - 8, y + 3);
  }

  // X-axis grid lines (vertical)
  performanceData.forEach((d, index) => {
    const x = padding.left + (index * chartWidth) / (performanceData.length - 1);
    ctx.beginPath();
    ctx.moveTo(x, padding.top);
    ctx.lineTo(x, height - padding.bottom);
    ctx.stroke();
  });

  // Draw data lines with improved clarity
  const drawLine = (key, color, lineWidth = 2.8) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.beginPath();
    
    performanceData.forEach((d, index) => {
      const x = padding.left + (index * chartWidth) / (performanceData.length - 1);
      const y = padding.top + chartHeight - (d[key] / 100) * chartHeight;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    
    ctx.stroke();
    
    // Add data points
    performanceData.forEach((d, index) => {
      const x = padding.left + (index * chartWidth) / (performanceData.length - 1);
      const y = padding.top + chartHeight - (d[key] / 100) * chartHeight;
      
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
  };

  // Draw lines with distinct colors
  drawLine('productivity', '#10b981', 2.6);
  drawLine('success', '#3b82f6', 2.6);
  drawLine('response', '#8b5cf6', 2.6);

  // X-axis labels
  ctx.fillStyle = '#94a3b8';
  ctx.font = '11px ui-monospace';
  ctx.textAlign = 'center';
  
  // Show only some labels for clarity
  const showIndices = [0, Math.floor(performanceData.length / 2), performanceData.length - 1];
  performanceData.forEach((d, index) => {
    if (showIndices.includes(index)) {
      const x = padding.left + (index * chartWidth) / (performanceData.length - 1);
      ctx.fillText(d.time, x, height - padding.bottom + 15);
    }
  });

  // Add subtle gradient under productivity line for better visibility
  const gradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
  gradient.addColorStop(0, 'rgba(16, 185, 129, 0.1)');
  gradient.addColorStop(1, 'rgba(16, 185, 129, 0.01)');
  
  ctx.fillStyle = gradient;
  ctx.beginPath();
  performanceData.forEach((d, index) => {
    const x = padding.left + (index * chartWidth) / (performanceData.length - 1);
    const y = padding.top + chartHeight - (d.productivity / 100) * chartHeight;
    
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  
  // Complete the path to create a filled area
  ctx.lineTo(padding.left + chartWidth, height - padding.bottom);
  ctx.lineTo(padding.left, height - padding.bottom);
  ctx.closePath();
  ctx.fill();
}

function initializeAIAssistant() {
  const toggle = document.getElementById('aiToggle');
  const chat = document.getElementById('aiChat');
  const close = document.getElementById('aiClose');
  const input = document.getElementById('aiInput');
  const send = document.getElementById('aiSend');
  const messages = document.getElementById('aiMessages');

  if (!toggle || !chat || !close || !input || !send || !messages) return;

  toggle.addEventListener('click', () => {
    chat.classList.add('active');
    toggle.style.display = 'none';
    input.focus();
  });

  close.addEventListener('click', () => {
    chat.classList.remove('active');
    toggle.style.display = 'block';
  });

  const pushMessage = (text, type) => {
    const el = document.createElement('div');
    el.className = `ai-message ai-message-${type}`;
    el.textContent = text;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  };

  const handleSend = () => {
    const value = input.value.trim();
    if (!value) return;
    pushMessage(value, 'user');
    input.value = '';

    setTimeout(() => {
      pushMessage(
        'VEGA: summarizing current robot activity, alerts, and system performance based on the latest telemetry snapshot.',
        'bot'
      );
    }, 700);
  };

  send.addEventListener('click', handleSend);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSend();
  });
}

// Map initialization and management
function initializeMaps() {
  const humanDataStatus = document.getElementById('humanDataStatus');
  const sensorDataStatus = document.getElementById('sensorDataStatus');
  
  if (!navigator.geolocation) {
    // Set status badges to show all data
    if (humanDataStatus) humanDataStatus.textContent = 'All human data';
    if (sensorDataStatus) sensorDataStatus.textContent = 'All sensor data';
    
    // Use default location
    const fallbackLat = 40.7128;
    const fallbackLng = -74.0060;
    userLocation = { lat: fallbackLat, lng: fallbackLng };
    
    setTimeout(() => {
      initializeHumanMap(fallbackLat, fallbackLng);
      initializeSensorMap(fallbackLat, fallbackLng);
      addUserLocationMarker(fallbackLat, fallbackLng);
      addStaticHumanMarkers(fallbackLat, fallbackLng);
      addStaticSensorMarkers(fallbackLat, fallbackLng);
      updateDetectionCounters();
      startDynamicHumanDetection();
    }, 100);
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;
      userLocation = { lat: userLat, lng: userLng };
      
      // Update status badges to show live data
      if (humanDataStatus) {
        humanDataStatus.textContent = 'Live data';
        humanDataStatus.style.color = '#10b981';
        humanDataStatus.style.background = 'rgba(16, 185, 129, 0.1)';
      }
      
      if (sensorDataStatus) {
        sensorDataStatus.textContent = 'Live data';
        sensorDataStatus.style.color = '#10b981';
        sensorDataStatus.style.background = 'rgba(16, 185, 129, 0.1)';
      }
      
      // Initialize maps
      initializeHumanMap(userLat, userLng);
      initializeSensorMap(userLat, userLng);
      addUserLocationMarker(userLat, userLng);
      addStaticHumanMarkers(userLat, userLng);
      addStaticSensorMarkers(userLat, userLng);
      updateDetectionCounters();
      startDynamicHumanDetection();
    },
    (error) => {
      console.error('Geolocation error:', error);
      
      // Set status badges to show all data
      if (humanDataStatus) {
        humanDataStatus.textContent = 'All human data';
        humanDataStatus.style.color = '#f59e0b';
        humanDataStatus.style.background = 'rgba(245, 158, 11, 0.1)';
      }
      
      if (sensorDataStatus) {
        sensorDataStatus.textContent = 'All sensor data';
        sensorDataStatus.style.color = '#f59e0b';
        sensorDataStatus.style.background = 'rgba(245, 158, 11, 0.1)';
      }
      
      // Fallback to default location
      const fallbackLat = 40.7128;
      const fallbackLng = -74.0060;
      userLocation = { lat: fallbackLat, lng: fallbackLng };
      
      setTimeout(() => {
        initializeHumanMap(fallbackLat, fallbackLng);
        initializeSensorMap(fallbackLat, fallbackLng);
        addUserLocationMarker(fallbackLat, fallbackLng);
        addStaticHumanMarkers(fallbackLat, fallbackLng);
        addStaticSensorMarkers(fallbackLat, fallbackLng);
        updateDetectionCounters();
        startDynamicHumanDetection();
      }, 100);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
}

function initializeHumanMap(lat, lng) {
  humanMapInstance = L.map('humanMap').setView([lat, lng], 15);
  
  // Changed to light theme like sensor map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(humanMapInstance);
  
  // Add scale control
  L.control.scale({ imperial: false }).addTo(humanMapInstance);
}

function initializeSensorMap(lat, lng) {
  sensorMapInstance = L.map('sensorMap').setView([lat, lng], 15);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(sensorMapInstance);
  
  // Add scale control
  L.control.scale({ imperial: false }).addTo(sensorMapInstance);
}

function addUserLocationMarker(lat, lng) {
  // Create prominent blue dot for user location
  const userIcon = L.divIcon({
    className: 'custom-marker user-location-marker',
    html: `
      <div class="blue-dot-container">
        <div class="blue-dot-pulse"></div>
        <div class="blue-dot-core">
          <div class="blue-dot-inner"></div>
        </div>
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
  
  // Add to human map
  userLocationMarker = L.marker([lat, lng], { icon: userIcon })
    .addTo(humanMapInstance)
    .bindPopup('<strong>Your Location</strong><br>Command center position')
    .openPopup();
  
  // Add to sensor map
  L.marker([lat, lng], { icon: userIcon })
    .addTo(sensorMapInstance)
    .bindPopup('<strong>Your Location</strong><br>Command center position');
}

function addStaticHumanMarkers(baseLat, baseLng) {
  humanMarkers = [];
  
  staticHumanData.forEach((human, index) => {
    // Generate random offsets (within ~500m radius)
    const latOffset = (Math.random() - 0.5) * 0.01;
    const lngOffset = (Math.random() - 0.5) * 0.01;
    
    const lat = baseLat + latOffset;
    const lng = baseLng + lngOffset;
    
    const color = human.type === 'survivor' ? '#10b981' : '#2563eb';
    
    const markerIcon = L.divIcon({
      className: 'custom-marker human-marker',
      html: `
        <div style="
          width: ${human.type === 'survivor' ? '14px' : '12px'};
          height: ${human.type === 'survivor' ? '14px' : '12px'};
          background: ${color};
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 0 8px ${color}80;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8px;
          color: white;
          font-weight: bold;
          cursor: pointer;
        ">
          ${human.type === 'survivor' ? 'S' : 'P'}
        </div>
      `,
      iconSize: [human.type === 'survivor' ? 14 : 12, human.type === 'survivor' ? 14 : 12],
      iconAnchor: [human.type === 'survivor' ? 7 : 6, human.type === 'survivor' ? 7 : 6]
    });
    
    const marker = L.marker([lat, lng], { icon: markerIcon })
      .addTo(humanMapInstance)
      .bindPopup(`
        <div style="font-size: 12px;">
          <strong>${human.name}</strong><br>
          Type: ${human.type === 'survivor' ? 'Survivor' : 'Personnel'}<br>
          Status: Active<br>
          ${human.description}
        </div>
      `);
    
    humanMarkers.push(marker);
  });
  
  return humanMarkers;
}

function addStaticSensorMarkers(baseLat, baseLng) {
  const sensorMarkers = [];
  
  staticSensorData.forEach((sensor, index) => {
    // Generate random offsets (within ~500m radius)
    const latOffset = (Math.random() - 0.5) * 0.01;
    const lngOffset = (Math.random() - 0.5) * 0.01;
    
    const lat = baseLat + latOffset;
    const lng = baseLng + lngOffset;
    
    let color, symbol;
    if (sensor.type === 'thermal') {
      color = '#ef4444';
      symbol = '🔥';
    } else if (sensor.type === 'gas') {
      color = '#d97706';
      symbol = '💨';
    } else {
      color = '#7c3aed';
      symbol = '🔊';
    }
    
    const markerIcon = L.divIcon({
      className: 'custom-marker sensor-marker',
      html: `
        <div style="
          width: 14px;
          height: 14px;
          background: ${color};
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 0 8px ${color}80;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 7px;
          color: white;
          cursor: pointer;
          transition: all 0.2s ease;
        ">
          ${sensor.type === 'thermal' ? 'T' : sensor.type === 'gas' ? 'G' : 'A'}
        </div>
      `,
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });
    
    const marker = L.marker([lat, lng], { icon: markerIcon })
      .addTo(sensorMapInstance)
      .bindPopup(`
        <div style="font-size: 12px; max-width: 200px;">
          <strong>${sensor.name}</strong><br>
          Type: ${sensor.type.charAt(0).toUpperCase() + sensor.type.slice(1)} Sensor<br>
          Reading: ${sensor.value}<br>
          ${sensor.description}<br>
          <button onclick="window.open('${sensor.page}', '_blank')" 
                  style="
                    background: ${color};
                    color: white;
                    border: none;
                    padding: 4px 12px;
                    border-radius: 4px;
                    margin-top: 8px;
                    cursor: pointer;
                    font-size: 11px;
                  ">
            View Details →
          </button>
        </div>
      `);
    
    // Add click event to open sensor page
    marker.on('click', function() {
      window.open(sensor.page, '_blank');
    });
    
    sensorMarkers.push(marker);
  });
  
  return sensorMarkers;
}

function startDynamicHumanDetection() {
  // Update human markers position slightly every 10 seconds to simulate dynamic movement
  setInterval(() => {
    humanMarkers.forEach(marker => {
      const currentLatLng = marker.getLatLng();
      const latOffset = (Math.random() - 0.5) * 0.0002;
      const lngOffset = (Math.random() - 0.5) * 0.0002;
      
      const newLat = currentLatLng.lat + latOffset;
      const newLng = currentLatLng.lng + lngOffset;
      
      marker.setLatLng([newLat, newLng]);
    });
  }, 10000);
  
  // Randomly add/remove human markers every 30 seconds to simulate dynamic detection
  setInterval(() => {
    const shouldAdd = Math.random() > 0.5;
    
    if (shouldAdd && humanMarkers.length < 15) {
      // Add a new random human marker
      const types = ['survivor', 'personnel'];
      const type = types[Math.floor(Math.random() * types.length)];
      const names = ['Survivor X', 'Team Gamma', 'Medic 2', 'Engineer 3', 'Rescue Unit'];
      const name = names[Math.floor(Math.random() * names.length)];
      
      const latOffset = (Math.random() - 0.5) * 0.015;
      const lngOffset = (Math.random() - 0.5) * 0.015;
      const lat = userLocation.lat + latOffset;
      const lng = userLocation.lng + lngOffset;
      
      const color = type === 'survivor' ? '#10b981' : '#2563eb';
      
      const markerIcon = L.divIcon({
        className: 'custom-marker human-marker',
        html: `
          <div style="
            width: ${type === 'survivor' ? '14px' : '12px'};
            height: ${type === 'survivor' ? '14px' : '12px'};
            background: ${color};
            border: 2px solid white;
            border-radius: 50%;
            box-shadow: 0 0 8px ${color}80;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 8px;
            color: white;
            font-weight: bold;
            cursor: pointer;
          ">
            ${type === 'survivor' ? 'S' : 'P'}
          </div>
        `,
        iconSize: [type === 'survivor' ? 14 : 12, type === 'survivor' ? 14 : 12],
        iconAnchor: [type === 'survivor' ? 7 : 6, type === 'survivor' ? 7 : 6]
      });
      
      const marker = L.marker([lat, lng], { icon: markerIcon })
        .addTo(humanMapInstance)
        .bindPopup(`
          <div style="font-size: 12px;">
            <strong>${name}</strong><br>
            Type: ${type === 'survivor' ? 'Survivor' : 'Personnel'}<br>
            Status: ${Math.random() > 0.7 ? 'Critical' : 'Stable'}<br>
            Newly detected signal
          </div>
        `);
      
      humanMarkers.push(marker);
      
      // Update counter
      const humanCountElement = document.getElementById('humanCount');
      if (humanCountElement) {
        humanCountElement.textContent = `${humanMarkers.length} detected`;
      }
    } else if (!shouldAdd && humanMarkers.length > 4) {
      // Remove a random marker
      const randomIndex = Math.floor(Math.random() * humanMarkers.length);
      humanMapInstance.removeLayer(humanMarkers[randomIndex]);
      humanMarkers.splice(randomIndex, 1);
      
      // Update counter
      const humanCountElement = document.getElementById('humanCount');
      if (humanCountElement) {
        humanCountElement.textContent = `${humanMarkers.length} detected`;
      }
    }
  }, 30000);
}

function updateDetectionCounters() {
  const humanCountElement = document.getElementById('humanCount');
  const sensorCountElement = document.getElementById('sensorCount');
  
  if (humanCountElement) {
    humanCountElement.textContent = `${humanMarkers.length || staticHumanData.length} detected`;
  }
  
  if (sensorCountElement) {
    sensorCountElement.textContent = `${staticSensorData.length} active`;
  }
}

function refreshUserLocation() {
  if (!navigator.geolocation) return;
  
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const newLat = position.coords.latitude;
      const newLng = position.coords.longitude;
      
      if (userLocation && 
          Math.abs(userLocation.lat - newLat) < 0.0001 && 
          Math.abs(userLocation.lng - newLng) < 0.0001) {
        return; // Location hasn't changed significantly
      }
      
      userLocation = { lat: newLat, lng: newLng };
    },
    (error) => {
      console.error('Error refreshing location:', error);
    }
  );
}

// Dropdown functionality
function initializeDevicesDropdown() {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  
  if (!dropdownToggle || !dropdownMenu) return;
  
  dropdownToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    dropdownMenu.classList.toggle('show');
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownToggle.setAttribute('aria-expanded', 'false');
      dropdownMenu.classList.remove('show');
    }
  });
  
  // Handle device selection
  const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item');
  dropdownItems.forEach(item => {
    item.addEventListener('click', function(e) {
      if (!this.querySelector('.dropdown-icon')) {
        const deviceName = this.querySelector('span').textContent;
        console.log(`Selected device: ${deviceName}`);
        // Here you would typically update the UI or fetch device data
        dropdownToggle.setAttribute('aria-expanded', 'false');
        dropdownMenu.classList.remove('show');
      }
    });
  });
}

// Main initialization
document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  createPerformanceMetrics();
  
  setTimeout(() => {
    drawOperationsChart();
    drawPerformanceChart();
  }, 120);
  
  initializeAIAssistant();
  initializeDevicesDropdown();
  
  // Show location permission modal
  setTimeout(() => {
    showLocationPermissionModal();
  }, 500);
  
  // Redraw charts on window resize for responsiveness
  window.addEventListener('resize', () => {
    drawOperationsChart();
    drawPerformanceChart();
  });
  
  // Set up periodic updates
  setInterval(updateStats, 60000); // Update stats every 10 minutes
  setInterval(() => {
    drawOperationsChart();
    drawPerformanceChart();
  }, 60000);
  
  // Refresh user location every 10 minutes
  setInterval(refreshUserLocation, 600000);
});

// Export for debugging
window.HAWKVEGADashboard = {
  survivorStats,
  performanceMetrics,
  staticHumanData,
  staticSensorData,
  updateStats,
  renderStats,
  refreshUserLocation,
  humanMarkers
};
