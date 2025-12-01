:root {
  --bg-main: #020617;
  --bg-panel: rgba(15, 23, 42, 0.9);
  --bg-soft: rgba(15, 23, 42, 0.8);
  --border-soft: rgba(148, 163, 184, 0.4);
  --accent-green: #10b981;
  --accent-cyan: #06b6d4;
  --accent-blue: #3b82f6;
  --accent-red: #ef4444;
  --accent-amber: #f59e0b;
  --accent-purple: #8b5cf6;
  --text-main: #e5e7eb;
  --text-muted: #9ca3af;
  --radius-lg: 1.5rem;
  --radius-md: 0.75rem;
  --shadow-strong: 0 20px 40px rgba(15, 23, 42, 0.8);
  --transition-fast: 0.2s ease-in-out;
  --transition-med: 0.3s ease;
}

/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: radial-gradient(circle at 0 0, #0b1120 0, #020617 55%);
  min-height: 100vh;
  color: var(--text-main);
  overflow-x: hidden;
  position: relative;
}

/* Ambient background */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.22), transparent 55%),
    radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.18), transparent 55%),
    radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.16), transparent 55%);
  pointer-events: none;
  z-index: -2;
  animation: backgroundShift 18s ease-in-out infinite;
}

body::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    radial-gradient(2px 2px at 20px 30px, rgba(148, 163, 184, 0.4), transparent),
    radial-gradient(2px 2px at 80px 120px, rgba(148, 163, 184, 0.35), transparent),
    radial-gradient(1px 1px at 160px 90px, rgba(148, 163, 184, 0.3), transparent);
  background-size: 220px 220px;
  opacity: 0.5;
  z-index: -1;
  animation: particleFloat 30s linear infinite;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Header */
.header {
  background: rgba(3, 7, 18, 0.92);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(15, 118, 110, 0.4);
  position: sticky;
  top: 0;
  z-index: 20;
  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.7);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 0;
  position: relative;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.hawk-logo {
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  background: radial-gradient(circle at 30% 0, #22c55e, #0f766e);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 16px 40px rgba(16, 185, 129, 0.35);
}

.hawk-logo::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(6, 182, 212, 0.9));
  opacity: 0.3;
  filter: blur(12px);
  animation: pulse 2.4s ease-in-out infinite;
}

.logo-icon {
  width: 1.6rem;
  height: 1.6rem;
  position: relative;
  z-index: 1;
}

.brand-block {
  display: flex;
  flex-direction: column;
}

.brand-text {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: linear-gradient(135deg, var(--accent-green), var(--accent-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.brand-sub {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.center-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  pointer-events: none;
}

.vega-title {
  font-size: 2rem;
  letter-spacing: 0.45em;
  font-weight: 600;
  background: linear-gradient(135deg, var(--accent-green), var(--accent-cyan), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title-underline {
  margin-top: 0.35rem;
  height: 2px;
  width: 180px;
  margin-inline: auto;
  background: linear-gradient(90deg, transparent, var(--accent-green), var(--accent-cyan), transparent);
  opacity: 0.9;
}

.nav-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nav-button {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.6rem 1.2rem;
  background: rgba(30, 64, 175, 0.35);
  border-radius: var(--radius-md);
  border: 1px solid rgba(148, 163, 184, 0.5);
  color: var(--text-main);
  font-size: 0.85rem;
  cursor: pointer;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast), background var(--transition-fast);
}

.nav-button:hover {
  transform: translateY(-1px);
  border-color: rgba(56, 189, 248, 0.7);
  background: rgba(30, 64, 175, 0.55);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.35);
}

.chevron {
  width: 0.9rem;
  height: 0.9rem;
}

.icon-button {
  padding: 0.55rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.5);
  background: rgba(15, 23, 42, 0.7);
  color: var(--text-muted);
  cursor: pointer;
  transition: background var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast);
}

.icon-button svg {
  width: 1.1rem;
  height: 1.1rem;
}

.icon-button:hover {
  background: rgba(15, 23, 42, 0.95);
  border-color: rgba(59, 130, 246, 0.7);
  color: var(--accent-blue);
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
  transform: translateY(-1px);
}

/* Main */
.main-content {
  padding: 2rem 0 3rem;
}

.section {
  margin-bottom: 3rem;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.section-header-inline {
  justify-content: space-between;
  align-items: flex-end;
}

.section-logo {
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  background: radial-gradient(circle at 30% 0, var(--accent-green), #0f766e);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 16px 36px rgba(16, 185, 129, 0.3);
  position: relative;
}

.section-logo::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, var(--accent-green), var(--accent-cyan));
  opacity: 0.3;
  filter: blur(10px);
  animation: pulse 2.4s ease-in-out infinite;
}

.section-icon {
  width: 1.6rem;
  height: 1.6rem;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 1.4rem;
  font-weight: 600;
}

.section-subtitle {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 0.15rem;
}

/* Stats grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: var(--bg-panel);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-soft);
  padding: 1.6rem;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-strong);
  transform: translateY(6px);
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
}

.stat-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 0 0, rgba(16, 185, 129, 0.16), transparent 55%);
  opacity: 0;
  transition: opacity var(--transition-med);
}

.stat-card:hover::before {
  opacity: 1;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;
}

.logo-container {
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 1rem;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast);
}

.stat-card:hover .logo-container {
  transform: translateY(-2px);
  border-color: rgba(56, 189, 248, 0.8);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.9);
}

.stat-logo {
  width: 2rem;
  height: 2rem;
}

.change-indicator {
  font-size: 0.75rem;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  border: 1px solid;
  font-weight: 600;
}

.change-positive {
  background: rgba(22, 163, 74, 0.18);
  color: #4ade80;
  border-color: rgba(22, 163, 74, 0.6);
}

.change-negative {
  background: rgba(239, 68, 68, 0.15);
  color: #fca5a5;
  border-color: rgba(239, 68, 68, 0.6);
}

.stat-content {
  position: relative;
}

.stat-value {
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.stat-title {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.stat-unit {
  display: inline-block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.15rem 0.65rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.7);
  color: var(--text-muted);
}

/* Live map */
.live-map-container {
  background: var(--bg-panel);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-soft);
  overflow: hidden;
  box-shadow: var(--shadow-strong);
}

.map-header {
  padding: 1.2rem 1.4rem;
  border-bottom: 1px solid rgba(30, 64, 175, 0.6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(15, 23, 42, 0.96);
}

.map-title {
  font-size: 1.2rem;
  font-weight: 600;
}

.map-subtitle {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 0.15rem;
}

.live-indicator {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.pulse-dot {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 999px;
  background: var(--accent-green);
  box-shadow: 0 0 12px rgba(16, 185, 129, 0.8);
  animation: pulse 2s ease-in-out infinite;
}

.quantum-badge {
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(56, 189, 248, 0.7);
  background: rgba(15, 23, 42, 0.7);
  color: var(--accent-cyan);
  font-size: 0.7rem;
}

.map-content {
  height: 19rem;
  position: relative;
  background: radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.6), #020617);
  overflow: hidden;
}

.map-background {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.16), transparent 60%),
    radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.18), transparent 60%);
  opacity: 0.7;
}

.radar-container {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.radar-sweep {
  position: absolute;
  width: 14rem;
  height: 2px;
  background: linear-gradient(90deg, rgba(16, 185, 129, 0.9), rgba(16, 185, 129, 0.1), transparent);
  transform-origin: left center;
}

.radar-circle {
  position: absolute;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  transform: translate(-50%, -50%);
}

.radar-1 {
  width: 7rem;
  height: 7rem;
}

.radar-2 {
  width: 11rem;
  height: 11rem;
  opacity: 0.7;
}

.radar-3 {
  width: 15rem;
  height: 15rem;
  opacity: 0.45;
}

.robot-markers {
  position: absolute;
  inset: 0;
}

.robot-marker {
  position: absolute;
  width: 0.95rem;
  height: 0.95rem;
  border-radius: 999px;
  cursor: pointer;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.robot-marker::before {
  content: '';
  position: absolute;
  inset: -0.25rem;
  border-radius: 999px;
  border: 2px solid currentColor;
  opacity: 0.45;
  animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.robot-marker.active {
  background: var(--accent-green);
  color: var(--accent-green);
  box-shadow: 0 0 16px rgba(16, 185, 129, 0.9);
}

.robot-marker.idle {
  background: var(--accent-amber);
  color: var(--accent-amber);
  box-shadow: 0 0 16px rgba(245, 158, 11, 0.9);
}

.robot-marker.emergency {
  background: var(--accent-red);
  color: var(--accent-red);
  box-shadow: 0 0 16px rgba(239, 68, 68, 0.95);
}

.map-legend {
  padding: 0.9rem 1.4rem;
  border-top: 1px solid rgba(30, 64, 175, 0.6);
  background: rgba(15, 23, 42, 0.96);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.legend-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.legend-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.legend-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
}

.legend-dot.active {
  background: var(--accent-green);
}

.legend-dot.idle {
  background: var(--accent-amber);
}

.legend-dot.emergency {
  background: var(--accent-red);
}

.legend-status {
  font-size: 0.8rem;
  color: var(--accent-green);
  font-weight: 500;
}

/* Charts */
.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.chart-card {
  background: var(--bg-panel);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-soft);
  padding: 1.4rem;
  box-shadow: var(--shadow-strong);
}

.chart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;
  gap: 1rem;
}

.chart-title {
  font-size: 1rem;
  font-weight: 600;
}

.chart-subtitle {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 0.15rem;
}

.chart-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.chart-legend .legend-item {
  font-size: 0.75rem;
}

.chart-legend .legend-dot {
  animation: none;
}

.legend-dot.rescues {
  background: var(--accent-green);
}

.legend-dot.threats {
  background: var(--accent-red);
}

.legend-dot.surveillance {
  background: var(--accent-cyan);
}

.legend-dot.productivity {
  background: var(--accent-green);
}

.legend-dot.success {
  background: var(--accent-blue);
}

.legend-dot.response {
  background: var(--accent-purple);
}

.quantum-status {
  font-size: 0.75rem;
  color: var(--accent-green);
  background: rgba(15, 23, 42, 0.9);
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(22, 163, 74, 0.7);
}

.chart-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.performance-metrics {
  margin-top: 0.5rem;
}

.performance-metric {
  margin-bottom: 0.9rem;
}

.metric-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  font-size: 0.8rem;
}

.metric-name {
  color: var(--text-muted);
}

.metric-value {
  font-weight: 600;
}

.metric-bar {
  width: 100%;
  height: 0.45rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.9);
  overflow: hidden;
}

.metric-fill {
  height: 100%;
  border-radius: inherit;
  transition: width 0.9s ease-out;
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
}

.metric-fill.high {
  background: linear-gradient(90deg, var(--accent-green), #059669);
}

.metric-fill.medium {
  background: linear-gradient(90deg, var(--accent-cyan), #0891b2);
}

.metric-fill.good {
  background: linear-gradient(90deg, var(--accent-purple), #7c3aed);
}

/* Footer */
.footer {
  background: rgba(3, 7, 18, 0.96);
  border-top: 1px solid rgba(30, 64, 175, 0.7);
  box-shadow: 0 -12px 32px rgba(15, 23, 42, 0.8);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.5rem;
  padding: 1.8rem 0 1.4rem;
}

.footer-section {
  font-size: 0.85rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
}

.footer-logo {
  width: 1.4rem;
  height: 1.4rem;
  color: var(--accent-green);
}

.footer-title {
  font-weight: 600;
  background: linear-gradient(135deg, var(--accent-green), var(--accent-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-description {
  color: var(--text-muted);
  line-height: 1.5;
}

.footer-heading {
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  color: var(--text-muted);
  margin-bottom: 0.4rem;
  cursor: pointer;
  transition: color var(--transition-fast);
}

.footer-links li:hover {
  color: var(--accent-green);
}

.status-items .status-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.4rem;
  color: var(--text-muted);
}

.status-dot {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 999px;
  background: var(--accent-green);
}

.footer-bottom {
  border-top: 1px solid rgba(30, 64, 175, 0.65);
  padding: 0.9rem 0 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.footer-info {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.version {
  color: var(--accent-green);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
}

.uptime {
  color: var(--accent-cyan);
}

.footer-bottom .status {
  color: var(--accent-green);
  font-weight: 500;
}

.separator {
  color: #4b5563;
}

/* AI Assistant */
.ai-assistant {
  position: fixed;
  right: 1.6rem;
  bottom: 1.6rem;
  z-index: 40;
}

.ai-toggle {
  width: 3.3rem;
  height: 3.3rem;
  border-radius: 999px;
  border: none;
  background: radial-gradient(circle at 20% 0, var(--accent-green), var(--accent-blue));
  color: white;
  cursor: pointer;
  position: relative;
  box-shadow: 0 18px 40px rgba(37, 99, 235, 0.55);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.ai-toggle::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, var(--accent-green), var(--accent-cyan));
  opacity: 0.32;
  filter: blur(10px);
  animation: pulse 2.4s ease-in-out infinite;
}

.ai-toggle svg {
  width: 1.4rem;
  height: 1.4rem;
  position: relative;
  z-index: 1;
}

.ai-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 22px 50px rgba(37, 99, 235, 0.7);
}

.ai-chat {
  position: absolute;
  right: 0;
  bottom: 4rem;
  width: 19rem;
  height: 23rem;
  display: none;
  flex-direction: column;
  background: rgba(3, 7, 18, 0.97);
  border-radius: 1rem;
  border: 1px solid rgba(30, 64, 175, 0.7);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.9);
  overflow: hidden;
}

.ai-chat.active {
  display: flex;
}

.ai-header {
  padding: 0.75rem 0.85rem;
  border-bottom: 1px solid rgba(30, 64, 175, 0.65);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(15, 23, 42, 0.96);
}

.ai-title {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
}

.ai-icon {
  width: 1rem;
  height: 1rem;
  color: var(--accent-green);
}

.ai-status {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 999px;
  background: var(--accent-green);
}

.ai-label {
  font-size: 0.7rem;
  color: var(--text-muted);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
}

.ai-close {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 0.2rem;
  border-radius: 0.3rem;
}

.ai-close svg {
  width: 1rem;
  height: 1rem;
}

.ai-close:hover {
  color: var(--accent-red);
}

.ai-messages {
  flex: 1;
  padding: 0.8rem;
  overflow-y: auto;
}

.ai-message {
  font-size: 0.8rem;
  padding: 0.65rem 0.8rem;
  border-radius: 0.9rem;
  margin-bottom: 0.55rem;
}

.ai-message-bot {
  background: rgba(15, 23, 42, 0.96);
  border: 1px solid rgba(30, 64, 175, 0.7);
  color: var(--text-main);
}

.ai-message-user {
  background: linear-gradient(135deg, var(--accent-green), var(--accent-cyan));
  color: white;
  margin-left: 2rem;
}

.ai-input {
  display: flex;
  gap: 0.5rem;
  padding: 0.7rem 0.85rem;
  border-top: 1px solid rgba(30, 64, 175, 0.7);
  background: rgba(15, 23, 42, 0.96);
}

.ai-input input {
  flex: 1;
  border-radius: 0.55rem;
  border: 1px solid rgba(51, 65, 85, 0.9);
  background: rgba(15, 23, 42, 0.96);
  color: var(--text-main);
  font-size: 0.8rem;
  padding: 0.5rem 0.65rem;
}

.ai-input input::placeholder {
  color: #6b7280;
}

.ai-input input:focus {
  outline: none;
  border-color: rgba(56, 189, 248, 0.8);
}

.ai-input button {
  border-radius: 0.55rem;
  border: none;
  background: linear-gradient(135deg, var(--accent-green), var(--accent-cyan));
  color: white;
  cursor: pointer;
  padding: 0.45rem 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ai-input button svg {
  width: 1rem;
  height: 1rem;
}

/* Animations */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.55;
  }
}

@keyframes ping {
  75%, 100% {
    transform: scale(2.2);
    opacity: 0;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes backgroundShift {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.85;
  }
}

@keyframes particleFloat {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-200px);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .charts-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .header-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }

  .center-title {
    position: static;
    transform: none;
    margin-top: 0.4rem;
  }

  .vega-title {
    font-size: 1.6rem;
    letter-spacing: 0.32em;
  }

  .nav-section {
    align-self: stretch;
    justify-content: flex-end;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .ai-chat {
    width: calc(100vw - 2rem);
    right: 1rem;
  }
}

