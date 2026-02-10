/**
 * GodView - The Omniscient Dashboard Module
 * A generic, high-performance visualization tool for any data stream.
 */
export class GodView {
    constructor(config) {
        this.config = {
            containerId: 'godview-container',
            password: 'admin',
            title: 'System Overwatch',
            logo: '👁️',

            // Flexible Schema Mapping
            schema: {
                id: 'id',
                title: 'title',       // Main bold text
                subtitle: 'subtitle', // Secondary text (e.g., arrow flow)
                detail: 'detail',     // Body text
                meta: 'meta',         // Top right tag (e.g., status code)
                date: 'date',
                location: 'location',
                lat: 'lat',
                lng: 'lng',
                clicks: 'clicks',
                ...config.schema
            },

            // Custom Stats Definitions
            stats: config.stats || [
                { id: 'total', label: 'Total Events', color: 'pink', icon: '📊', fn: (d) => d.length },
                { id: 'users', label: 'Active Users', color: 'purple', icon: '👥', fn: (d) => new Set(d.map(i => i.title)).size },
                { id: 'locs', label: 'Locations', color: 'blue', icon: '🌍', fn: (d) => new Set(d.filter(i => i.location).map(i => i.location)).size },
                { id: 'clicks', label: 'Interactions', color: 'green', icon: '👆', fn: (d) => d.reduce((acc, i) => acc + (i.clicks || 0), 0) }
            ],

            ...config
        };

        this.container = document.getElementById(this.config.containerId);
        if (!this.container) {
            console.error(`GodView: Container #${this.config.containerId} not found`);
            return;
        }

        // State
        this.state = {
            isAuthenticated: false,
            data: [],
            markers: [],
            searchQuery: ''
        };

        this.map = null;
        this.searchDebounce = null;

        // Bind methods
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.render = this.render.bind(this);
        this.downloadCSV = this.downloadCSV.bind(this);
        this.initMap = this.initMap.bind(this);
    }

    init() {
        if (this.checkAuth()) {
            this.renderDashboard();
        } else {
            this.renderLogin();
        }
    }

    checkAuth() {
        return sessionStorage.getItem('godview_auth_' + this.config.containerId) === '1';
    }

    renderLogin() {
        this.container.innerHTML = `
            <div class="gv-login-screen">
                <div class="gv-login-box">
                    <h1>🔒 ${this.config.title}</h1>
                    <p>Secured Access Channel</p>
                    <input type="password" class="gv-login-input" id="gv-password-input" placeholder="Enter Access Key" autofocus>
                    <button class="gv-login-btn" id="gv-login-btn">
                        <span>Initialize Connection</span>
                    </button>
                    <p class="gv-login-error" id="gv-login-error">Access Denied.</p>
                </div>
            </div>
        `;

        const btn = this.container.querySelector('#gv-login-btn');
        const input = this.container.querySelector('#gv-password-input');

        btn.addEventListener('click', this.handleLogin);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleLogin();
        });
    }

    handleLogin() {
        const input = this.container.querySelector('#gv-password-input');
        if (input.value === this.config.password) {
            sessionStorage.setItem('godview_auth_' + this.config.containerId, '1');
            this.renderDashboard();
        } else {
            const err = this.container.querySelector('#gv-login-error');
            const btn = this.container.querySelector('#gv-login-btn');

            err.classList.add('show');
            input.value = '';
            input.focus();

            // Shake animation
            btn.style.transform = 'translateX(5px)';
            setTimeout(() => btn.style.transform = 'translateX(-5px)', 50);
            setTimeout(() => btn.style.transform = 'translateX(5px)', 100);
            setTimeout(() => btn.style.transform = 'translateX(0)', 150);

            setTimeout(() => err.classList.remove('show'), 3000);
        }
    }

    handleLogout() {
        sessionStorage.removeItem('godview_auth_' + this.config.containerId);
        this.renderLogin();
        this.map = null;
    }

    async fetchData() {
        if (this.config.fetchDataFn) {
            return await this.config.fetchDataFn();
        }

        // Default Mock Data (Generic Systems)
        return this.generateMockData(50);
    }

    generateMockData(count) {
        const locations = [
            { name: 'Kochi, IN', lat: 9.9312, lng: 76.2673 },
            { name: 'San Francisco, US', lat: 37.7749, lng: -122.4194 },
            { name: 'London, UK', lat: 51.5074, lng: -0.1278 },
            { name: 'Berlin, DE', lat: 52.5200, lng: 13.4050 },
            { name: 'Tokyo, JP', lat: 35.6762, lng: 139.6503 }
        ];

        return Array.from({ length: count }, (_, i) => {
            const loc = locations[Math.floor(Math.random() * locations.length)];
            const type = ['INFO', 'WARN', 'ERROR', 'SUCCESS'][Math.floor(Math.random() * 4)];

            return {
                id: `evt_${i}`,
                title: `Service ${['Auth', 'Payment', 'User', 'Notification'][Math.floor(Math.random() * 4)]} v${Math.floor(Math.random() * 5)}.0`,
                subtitle: `Process ID: ${Math.floor(Math.random() * 9999)}`,
                detail: `Executed operation ${['CREATE', 'UPDATE', 'DELETE', 'QUERY'][Math.floor(Math.random() * 4)]} on database shard ${Math.floor(Math.random() * 10)}.`,
                meta: type,
                date: new Date().toISOString().slice(11, 19),
                location: loc.name,
                lat: loc.lat + (Math.random() - 0.5) * 0.1,
                lng: loc.lng + (Math.random() - 0.5) * 0.1,
                clicks: Math.floor(Math.random() * 20)
            };
        });
    }

    async renderDashboard() {
        this.container.innerHTML = `
            <div class="gv-dashboard">
                <header class="gv-header">
                    <div class="gv-header-left">
                        <h1>${this.config.logo} <span>${this.config.title}</span></h1>
                        <span class="gv-badge" id="gv-count-badge">CONNECTING...</span>
                    </div>
                    <div class="gv-header-actions">
                        <button class="gv-btn gv-btn-primary" id="gv-refresh-btn">
                            <span>Refresh</span>
                        </button>
                        <button class="gv-btn gv-btn-icon" id="gv-csv-btn" title="Export CSV">
                            📥
                        </button>
                        <button class="gv-btn gv-btn-ghost" id="gv-logout-btn">
                            Logout
                        </button>
                    </div>
                </header>

                <div class="gv-map-container">
                    <div class="gv-section-title">Geospatial Overview</div>
                    <div class="gv-map-wrapper">
                        <div id="gv-map"></div>
                    </div>
                </div>

                <div class="gv-stats-row">
                    ${this.config.stats.map(s => `
                        <div class="gv-stat-card ${s.color}" data-stat-id="${s.id}">
                            <div class="gv-stat-icon">${s.icon}</div>
                            <div class="gv-stat-label">${s.label}</div>
                            <div class="gv-stat-value">0</div>
                        </div>
                    `).join('')}
                </div>

                <div class="gv-table-container">
                    <div class="gv-table-header">
                        <div class="gv-section-title">Values Stream</div>
                        <input type="text" class="gv-search-box" id="gv-search-input" placeholder="Filter data...">
                    </div>
                    <div id="gv-list" class="gv-list">
                        <div class="gv-loading">Establishing Uplink...</div>
                    </div>
                </div>
                
                <div id="gv-toast" class="gv-toast"></div>
            </div>
        `;

        // Bind events
        this.container.querySelector('#gv-logout-btn').addEventListener('click', this.handleLogout);
        this.container.querySelector('#gv-refresh-btn').addEventListener('click', () => this.refreshData());
        this.container.querySelector('#gv-csv-btn').addEventListener('click', this.downloadCSV);

        this.container.querySelector('#gv-search-input').addEventListener('input', (e) => {
            clearTimeout(this.searchDebounce);
            this.state.searchQuery = e.target.value.trim();
            this.searchDebounce = setTimeout(() => this.render(), 300);
        });

        // Init Map
        setTimeout(this.initMap, 100);

        // Load Data
        await this.refreshData();
    }

    async refreshData() {
        const list = this.container.querySelector('#gv-list');
        const btn = this.container.querySelector('#gv-refresh-btn');

        if (list) list.innerHTML = '<div class="gv-loading">Syncing...</div>';
        if (btn) btn.disabled = true;

        try {
            this.state.data = await this.fetchData();
            this.render();
            this.updateMapMarkers();
            this.showToast('Data Synced Successfully ✨');
        } finally {
            if (btn) btn.disabled = false;
        }
    }

    initMap() {
        if (this.map || !document.getElementById('gv-map')) return;

        if (typeof L === 'undefined') {
            document.getElementById('gv-map').innerHTML = `
                <div style="display:flex;justify-content:center;align-items:center;height:100%;color:#666;">
                    Map modules offline (Leaflet JS missing)
                </div>`;
            return;
        }

        this.map = L.map('gv-map', {
            zoomControl: false,
            attributionControl: false
        }).setView([20, 0], 2);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 19
        }).addTo(this.map);

        L.control.zoom({ position: 'topright' }).addTo(this.map);

        setTimeout(() => { this.map?.invalidateSize(); }, 200);
    }

    updateMapMarkers() {
        if (!this.map) return;
        const S = this.config.schema;

        this.state.markers.forEach(m => this.map.removeLayer(m));
        this.state.markers = [];

        const valid = this.state.data.filter(d => this.getVal(d, S.lat) && this.getVal(d, S.lng));

        valid.forEach(item => {
            const jitter = 0.01;
            const lat = Number(this.getVal(item, S.lat)) + (Math.random() - 0.5) * jitter;
            const lng = Number(this.getVal(item, S.lng)) + (Math.random() - 0.5) * jitter;

            const icon = L.divIcon({
                className: 'gv-map-marker',
                html: '<div class="gv-marker-custom" style="width:12px;height:12px;"></div>',
                iconSize: [12, 12],
                iconAnchor: [6, 6]
            });

            const marker = L.marker([lat, lng], { icon: icon });

            marker.bindPopup(`
                <div style="color:#333;font-family:sans-serif;padding:5px;">
                    <div style="font-weight:bold;color:#e11d48">${this.esc(this.getVal(item, S.title))}</div>
                    <div style="font-size:0.85em;color:#666">${this.esc(this.getVal(item, S.meta))}</div>
                    <div style="font-style:italic;margin-top:4px;">"${this.esc(String(this.getVal(item, S.detail)).substring(0, 40))}..."</div>
                </div>
            `);

            marker.addTo(this.map);
            this.state.markers.push(marker);
        });
    }

    render() {
        if (!this.container.querySelector('#gv-list')) return;

        let data = this.state.data;
        const fl = this.state.searchQuery.toLowerCase();
        const S = this.config.schema;

        // Calculate Stats
        this.config.stats.forEach(stat => {
            const el = this.container.querySelector(`.gv-stat-card[data-stat-id="${stat.id}"] .gv-stat-value`);
            if (el) el.textContent = stat.fn(data);
        });

        this.setText('#gv-count-badge', `${data.length} ITEMS`);

        // Filter
        if (fl) {
            data = data.filter(item => {
                const values = [
                    this.getVal(item, S.title),
                    this.getVal(item, S.subtitle),
                    this.getVal(item, S.detail),
                    this.getVal(item, S.meta),
                    this.getVal(item, S.location)
                ];
                return values.some(v => String(v || '').toLowerCase().includes(fl));
            });
        }

        const listEl = this.container.querySelector('#gv-list');

        if (data.length === 0) {
            listEl.innerHTML = '<div class="gv-empty">No matching data found.</div>';
            return;
        }

        listEl.innerHTML = data.map((item, i) => `
            <div class="gv-card" style="animation: gv-fade-in 0.5s ease-out ${i * 0.05}s backwards">
                <div class="gv-card-header">
                    <span class="gv-code">${this.esc(this.getVal(item, S.meta) || '---')}</span>
                    <span class="gv-date">${this.esc(this.getVal(item, S.date) || '')}</span>
                </div>
                <div class="gv-card-body">
                    <div class="gv-route">
                        <strong>${this.esc(this.getVal(item, S.title))}</strong>
                        ${this.getVal(item, S.subtitle) ? `<span class="gv-route-mid">· ${this.esc(this.getVal(item, S.subtitle))}</span>` : ''}
                    </div>
                    <div class="gv-msg">${this.esc(this.getVal(item, S.detail))}</div>
                </div>
                <div class="gv-card-footer">
                    <div class="gv-location-tag">
                        <span>📍</span> ${this.esc(this.getVal(item, S.location) || 'Unknown')}
                    </div>
                    <div>
                        👆 ${this.esc(this.getVal(item, S.clicks) || 0)}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Helper to get value from item based on schema mapping (function or string key)
    getVal(item, mapper) {
        if (typeof mapper === 'function') return mapper(item);
        return item[mapper];
    }

    downloadCSV() {
        if (!this.state.data.length) { this.showToast('No data'); return; }
        const S = this.config.schema;

        // Dynamic headers based on schema keys
        const keys = Object.keys(S);
        const headers = keys.join(',');

        const rows = this.state.data.map(item => {
            return keys.map(k => {
                const val = this.getVal(item, S[k]);
                return `"${String(val || '').replace(/"/g, '""')}"`;
            }).join(',');
        });

        const blob = new Blob([headers + '\n' + rows.join('\n')], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `godview_export_${new Date().getTime()}.csv`;
        a.click();
        this.showToast('Export Complete 📄');
    }

    showToast(msg) {
        const t = this.container.querySelector('#gv-toast');
        if (!t) return;
        t.innerText = msg;
        t.classList.add('show');
        setTimeout(() => t.classList.remove('show'), 3000);
    }

    setText(sel, val) {
        const el = this.container.querySelector(sel);
        if (el) el.textContent = val;
    }

    esc(str) {
        if (!str) return '';
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
}
