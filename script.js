// Survivor stats (top cards) with colored gradients
const survivorStats = [
  {
    title: 'Survivors detected',
    value: 47,
    change: 8,
    unit: 'active',
    color: 'linear-gradient(135deg, #10b981, #059669)',
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <defs>
          <linearGradient id="survivorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#10b981" />
            <stop offset="100%" stop-color="#059669" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="20" r="8" fill="url(#survivorGrad)" />
        <path d="M20 44c0-6.6 5.4-12 12-12s12 5.4 12 12v8H20v-8z" fill="url(#survivorGrad)" />
        <circle cx="32" cy="32" r="20" fill="none" stroke="url(#survivorGrad)" stroke-width="2" stroke-dasharray="4,4" opacity="0.6" />
      </svg>
    `
  },
  {
    title: 'Heartbeat / breath signals',
    value: 23,
    change: 5,
    unit: 'channels',
    color: 'linear-gradient(135deg, #ef4444, #dc2626)',
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <defs>
          <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ef4444" />
            <stop offset="100%" stop-color="#dc2626" />
          </linearGradient>
        </defs>
        <path d="M32 52c-8-8-20-16-20-28 0-8 6-12 12-12 4 0 8 2 8 6 0-4 4-6 8-6 6 0 12 4 12 12 0 12-12 20-20 28z" fill="url(#heartGrad)" />
        <path d="M8 32h8l4-8 4 16 4-12 4 8h8" fill="none" stroke="url(#heartGrad)" stroke-width="2" opacity="0.8" />
      </svg>
    `
  },
  {
    title: 'Gas levels (CO₂)',
    value: 420,
    change: -15,
    unit: 'ppm',
    color: 'linear-gradient(135deg, #f59e0b, #d97706)',
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <defs>
          <linearGradient id="gasGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#d97706" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="24" fill="url(#gasGrad)" opacity="0.3" />
        <circle cx="32" cy="32" r="16" fill="url(#gasGrad)" opacity="0.5" />
        <circle cx="32" cy="32" r="8" fill="url(#gasGrad)" />
        <path d="M20 20c4-4 8-4 12 0s8 4 12 0" fill="none" stroke="url(#gasGrad)" stroke-width="2" opacity="0.7" />
        <path d="M20 44c4-4 8-4 12 0s8 4 12 0" fill="none" stroke="url(#gasGrad)" stroke-width="2" opacity="0.7" />
      </svg>
    `
  },
  {
    title: 'Thermal heat points',
    value: 156,
    change: 12,
    unit: 'sources',
    color: 'linear-gradient(135deg, #f97316, #ef4444, #dc2626)',
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <defs>
          <linearGradient id="thermalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f97316" />
            <stop offset="50%" stop-color="#ef4444" />
            <stop offset="100%" stop-color="#dc2626" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="6" fill="url(#thermalGrad)" />
        <circle cx="32" cy="32" r="12" fill="none" stroke="url(#thermalGrad)" stroke-width="2" opacity="0.6" />
        <circle cx="32" cy="32" r="18" fill="none" stroke="url(#thermalGrad)" stroke-width="1" opacity="0.4" />
        <circle cx="32" cy="32" r="24" fill="none" stroke="url(#thermalGrad)" stroke-width="1" opacity="0.2" />
        <path d="M32 8v8M32 48v8M8 32h8M48 32h8" stroke="url(#thermalGrad)" stroke-width="2" opacity="0.8" />
      </svg>
    `
  },
  {
    title: 'Acoustic alerts',
    value: 34,
    change: 6,
    unit: 'signals',
    color: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <defs>
          <linearGradient id="acousticGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8b5cf6" />
            <stop offset="100%" stop-color="#7c3aed" />
          </linearGradient>
        </defs>
        <path d="M20 24v16l8-4v-8l-8-4z" fill="url(#acousticGrad)" />
        <path d="M32 20c0 0 8 4 8 12s-8 12-8 12" fill="none" stroke="url(#acousticGrad)" stroke-width="3" />
        <path d="M36 16c0 0 12 6 12 16s-12 16-12 16" fill="none" stroke="url(#acousticGrad)" stroke-width="2" opacity="0.7" />
        <circle cx="32" cy="32" r="20" fill="none" stroke="url(#acousticGrad)" stroke-width="1" stroke-dasharray="2,2" opacity="0.4" />
      </svg>
    `
  },
  {
    title: 'Void spaces found',
    value: 89,
    change: 4,
    unit: 'cavities',
    color: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <defs>
          <linearGradient id="voidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#06b6d4" />
            <stop offset="100%" stop-color="#0891b2" />
          </linearGradient>
        </defs>
        <rect x="8" y="8" width="48" height="48" fill="none" stroke="url(#voidGrad)" stroke-width="2" />
        <circle cx="32" cy="32" r="12" fill="none" stroke="url(#voidGrad)" stroke-width="2" stroke-dasharray="4,4" />
        <path d="M16 16l32 32M48 16L16 48" stroke="url(#voidGrad)" stroke-width="1" opacity="0.5" />
        <circle cx="20" cy="20" r="2" fill="url(#voidGrad)" opacity="0.8" />
        <circle cx="44" cy="20" r="2" fill="url(#voidGrad)" opacity="0.8" />
        <circle cx="20" cy="44" r="2" fill="url(#voidGrad)" opacity="0.8" />
        <circle cx="44" cy="44" r="2" fill="url(#voidGrad)" opacity="0.8" />
      </svg>
    `
  },
  {
    title: 'Structural risk level',
    value: 73,
    change: -5,
    unit: '% risk',
    color: 'linear-gradient(135deg, #ef4444, #dc2626)',
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <defs>
          <linearGradient id="riskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ef4444" />
            <stop offset="100%" stop-color="#dc2626" />
          </linearGradient>
        </defs>
        <path d="M32 8L8 56h48L32 8z" fill="url(#riskGrad)" />
        <path d="M32 20v16M32 40v4" stroke="white" stroke-width="3" stroke-linecap="round" />
        <circle cx="32" cy="32" r="28" fill="none" stroke="url(#riskGrad)" stroke-width="2" stroke-dasharray="6,6" opacity="0.4" />
      </svg>
    `
  },
  {
    title: 'Hazardous objects',
    value: 28,
    change: 3,
    unit: 'identified',
    color: 'linear-gradient(135deg, #ec4899, #be185d)',
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <defs>
          <linearGradient id="hazardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ec4899" />
            <stop offset="100%" stop-color="#be185d" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="20" fill="url(#hazardGrad)" />
        <path d="M32 16v32M16 32h32" stroke="white" stroke-width="4" />
        <circle cx="32" cy="32" r="24" fill="none" stroke="url(#hazardGrad)" stroke-width="2" stroke-dasharray="8,4" opacity="0.6" />
        <path d="M20 20l24 24M44 20L20 44" stroke="url(#hazardGrad)" stroke-width="1" opacity="0.5" />
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
        <div class="logo-container" style="background: ${stat.color}">
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

  const padding = 36;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const barWidth = chartWidth / operationsData.length;
  const maxValue = Math.max(
    ...operationsData.flatMap((d) => [d.rescues, d.threats, d.surveillance])
  );

  operationsData.forEach((d, index) => {
    const x = padding + index * barWidth;
    const segmentWidth = barWidth * 0.55;

    const rescHeight = (d.rescues / maxValue) * chartHeight;
    const threatHeight = (d.threats / maxValue) * chartHeight;
    const survHeight = (d.surveillance / maxValue) * chartHeight;

    ctx.fillStyle = '#10b981';
    ctx.fillRect(
      x + barWidth * 0.2,
      padding + chartHeight - rescHeight,
      segmentWidth,
      rescHeight
    );

    ctx.fillStyle = '#ef4444';
    ctx.fillRect(
      x + barWidth * 0.2,
      padding + chartHeight - rescHeight - threatHeight,
      segmentWidth,
      threatHeight
    );

    ctx.fillStyle = '#06b6d4';
    ctx.fillRect(
      x + barWidth * 0.2,
      padding + chartHeight - rescHeight - threatHeight - survHeight,
      segmentWidth,
      survHeight
    );

    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px ui-monospace';
    ctx.textAlign = 'center';
    ctx.fillText(d.time, x + barWidth / 2, height - 10);
  });
}

function drawPerformanceChart() {
  const canvas = document.getElementById('performanceChart');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;
  ctx.clearRect(0, 0, width, height);

  const padding = 36;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const stepX = chartWidth / (performanceData.length - 1);

  ctx.strokeStyle = 'rgba(148,163,184,0.25)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padding + (i * chartHeight) / 4;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
  }

  const drawLine = (key, color) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    performanceData.forEach((d, index) => {
      const x = padding + index * stepX;
      const y = padding + chartHeight - (d[key] / 100) * chartHeight;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  };

  drawLine('productivity', '#10b981');
  drawLine('success', '#3b82f6');
  drawLine('response', '#8b5cf6');
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
  const locationStatus = document.getElementById('locationStatus');
  
  if (!navigator.geolocation) {
    locationStatus.textContent = 'Geolocation not supported';
    locationStatus.style.color = '#ef4444';
    locationStatus.style.background = 'rgba(239, 68, 68, 0.1)';
    return;
  }

  locationStatus.textContent = 'Requesting location...';
  locationStatus.style.color = '#f59e0b';
  locationStatus.style.background = 'rgba(245, 158, 11, 0.1)';

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;
      userLocation = { lat: userLat, lng: userLng };
      
      locationStatus.textContent = 'Location acquired ✓';
      locationStatus.style.color = '#10b981';
      locationStatus.style.background = 'rgba(16, 185, 129, 0.1)';
      
      // Initialize human detection map
      initializeHumanMap(userLat, userLng);
      
      // Initialize sensor detection map
      initializeSensorMap(userLat, userLng);
      
      // Add user location to both maps
      addUserLocationMarker(userLat, userLng);
      
      // Add static human detection markers
      addStaticHumanMarkers(userLat, userLng);
      
      // Add static sensor markers
      addStaticSensorMarkers(userLat, userLng);
      
      // Update counters
      updateDetectionCounters();
    },
    (error) => {
      console.error('Geolocation error:', error);
      locationStatus.textContent = 'Location denied';
      locationStatus.style.color = '#ef4444';
      locationStatus.style.background = 'rgba(239, 68, 68, 0.1)';
      
      // Fallback to default location (New York)
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
        
        locationStatus.textContent = 'Using default location';
        locationStatus.style.color = '#f59e0b';
        locationStatus.style.background = 'rgba(245, 158, 11, 0.1)';
      }, 1000);
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
  
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors, © CARTO',
    maxZoom: 19,
    opacity: 0.8
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
  const humanMarkers = [];
  
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

function updateDetectionCounters() {
  const humanCountElement = document.getElementById('humanCount');
  const sensorCountElement = document.getElementById('sensorCount');
  
  if (humanCountElement) {
    humanCountElement.textContent = `${staticHumanData.length} detected`;
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
      
      // Update map views
      if (humanMapInstance) {
        humanMapInstance.setView([newLat, newLng], humanMapInstance.getZoom());
      }
      
      if (sensorMapInstance) {
        sensorMapInstance.setView([newLat, newLng], sensorMapInstance.getZoom());
      }
      
      // Update status
      const locationStatus = document.getElementById('locationStatus');
      if (locationStatus) {
        locationStatus.textContent = 'Location updated ✓';
        setTimeout(() => {
          locationStatus.textContent = 'Location acquired ✓';
        }, 2000);
      }
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
  initializeMaps();
  initializeDevicesDropdown();
  
  // Set up periodic updates
  setInterval(updateStats, 30000);
  setInterval(() => {
    drawOperationsChart();
    drawPerformanceChart();
  }, 60000);
  
  // Refresh user location every 30 seconds
  setInterval(refreshUserLocation, 30000);
});

// Export for debugging
window.HAWKVEGADashboard = {
  survivorStats,
  performanceMetrics,
  staticHumanData,
  staticSensorData,
  updateStats,
  renderStats,
  refreshUserLocation
};
