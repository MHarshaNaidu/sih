// Survivor stats (top cards)
const survivorStats = [
  {
    title: 'Survivors detected',
    value: 47,
    change: 8,
    unit: 'active',
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <defs>
          <linearGradient id="survivorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#10b981" />
            <stop offset="100%" stop-color="#059669" />
          </linearGradient>
        </defs>
        ircle cx="32" cy="20" r="8" fill="url(#survivorGrad)" />
        <path d="M20 44c0-6.6 5.4-12 12-12s12 5.4 12 12v8H20v-8z" fill="url(#survivorGrad)" />
        ircle cx="32" cy="32" r="20" fill="none" stroke="url(#survivorGrad)" stroke-width="2" stroke-dasharray="4,4" opacity="0.6" />
      </svg>
    `
  },
  {
    title: 'Heartbeat / breath signals',
    value: 23,
    change: 5,
    unit: 'channels',
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
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <defs>
          <linearGradient id="gasGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#d97706" />
          </linearGradient>
        </defs>
        ircle cx="32" cy="32" r="24" fill="url(#gasGrad)" opacity="0.3" />
        ircle cx="32" cy="32" r="16" fill="url(#gasGrad)" opacity="0.5" />
        ircle cx="32" cy="32" r="8" fill="url(#gasGrad)" />
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
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <defs>
          <linearGradient id="thermalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f97316" />
            <stop offset="50%" stop-color="#ef4444" />
            <stop offset="100%" stop-color="#dc2626" />
          </linearGradient>
        </defs>
        ircle cx="32" cy="32" r="6" fill="url(#thermalGrad)" />
        ircle cx="32" cy="32" r="12" fill="none" stroke="url(#thermalGrad)" stroke-width="2" opacity="0.6" />
        ircle cx="32" cy="32" r="18" fill="none" stroke="url(#thermalGrad)" stroke-width="1" opacity="0.4" />
        ircle cx="32" cy="32" r="24" fill="none" stroke="url(#thermalGrad)" stroke-width="1" opacity="0.2" />
        <path d="M32 8v8M32 48v8M8 32h8M48 32h8" stroke="url(#thermalGrad)" stroke-width="2" opacity="0.8" />
      </svg>
    `
  },
  {
    title: 'Acoustic alerts',
    value: 34,
    change: 6,
    unit: 'signals',
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
        ircle cx="32" cy="32" r="20" fill="none" stroke="url(#acousticGrad)" stroke-width="1" stroke-dasharray="2,2" opacity="0.4" />
      </svg>
    `
  },
  {
    title: 'Void spaces found',
    value: 89,
    change: 4,
    unit: 'cavities',
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <defs>
          <linearGradient id="voidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#06b6d4" />
            <stop offset="100%" stop-color="#0891b2" />
          </linearGradient>
        </defs>
        <rect x="8" y="8" width="48" height="48" fill="none" stroke="url(#voidGrad)" stroke-width="2" />
        ircle cx="32" cy="32" r="12" fill="none" stroke="url(#voidGrad)" stroke-width="2" stroke-dasharray="4,4" />
        <path d="M16 16l32 32M48 16L16 48" stroke="url(#voidGrad)" stroke-width="1" opacity="0.5" />
        ircle cx="20" cy="20" r="2" fill="url(#voidGrad)" opacity="0.8" />
        ircle cx="44" cy="20" r="2" fill="url(#voidGrad)" opacity="0.8" />
        ircle cx="20" cy="44" r="2" fill="url(#voidGrad)" opacity="0.8" />
        ircle cx="44" cy="44" r="2" fill="url(#voidGrad)" opacity="0.8" />
      </svg>
    `
  },
  {
    title: 'Structural risk level',
    value: 73,
    change: -5,
    unit: '% risk',
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
        ircle cx="32" cy="32" r="28" fill="none" stroke="url(#riskGrad)" stroke-width="2" stroke-dasharray="6,6" opacity="0.4" />
      </svg>
    `
  },
  {
    title: 'Hazardous objects',
    value: 28,
    change: 3,
    unit: 'identified',
    logo: `
      <svg viewBox="0 0 64 64" class="stat-logo" aria-hidden="true">
        <defs>
          <linearGradient id="hazardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ec4899" />
            <stop offset="100%" stop-color="#be185d" />
          </linearGradient>
        </defs>
        ircle cx="32" cy="32" r="20" fill="url(#hazardGrad)" />
        <path d="M32 16v32M16 32h32" stroke="white" stroke-width="4" />
        ircle cx="32" cy="32" r="24" fill="none" stroke="url(#hazardGrad)" stroke-width="2" stroke-dasharray="8,4" opacity="0.6" />
        <path d="M20 20l24 24M44 20L20 44" stroke="url(#hazardGrad)" stroke-width="1" opacity="0.5" />
      </svg>
    `
  }
];

// Robot markers for live tracking
const robotData = [
  { id: 'alpha-7', name: 'Alpha‑7', status: 'active', x: 28, y: 36 },
  { id: 'bravo-3', name: 'Bravo‑3', status: 'idle', x: 44, y: 24 },
  { id: 'charlie-9', name: 'Charlie‑9', status: 'emergency', x: 64, y: 46 },
  { id: 'delta-5', name: 'Delta‑5', status: 'active', x: 36, y: 64 }
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

function createRobotMarkers() {
  const container = document.getElementById('robotMarkers');
  if (!container) return;
  container.innerHTML = robotData
    .map(
      (robot) => `
    <button
      type="button"
      class="robot-marker ${robot.status}"
      style="left:${robot.x}%; top:${robot.y}%;"
      title="${robot.name} – ${robot.status}"
    ></button>
  `
    )
    .join('');
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

function initializeRadarSweep() {
  const sweep = document.getElementById('radarSweep');
  if (!sweep) return;
  let angle = 0;
  setInterval(() => {
    angle = (angle + 2) % 360;
    sweep.style.transform = `rotate(${angle}deg)`;
  }, 50);
}

document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  createRobotMarkers();
  createPerformanceMetrics();

  setTimeout(() => {
    drawOperationsChart();
    drawPerformanceChart();
  }, 120);

  initializeAIAssistant();
  initializeRadarSweep();

  setInterval(updateStats, 30000);
  setInterval(() => {
    drawOperationsChart();
    drawPerformanceChart();
  }, 60000);
});

// Export hook for debugging in dev tools
window.HAWKVEGADashboard = {
  survivorStats,
  robotData,
  performanceMetrics,
  updateStats,
  renderStats
};
