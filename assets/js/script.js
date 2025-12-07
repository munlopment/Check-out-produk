/* ===================== RESET & BASE ===================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

html, body {
  height: 100%;
  background: #f6f7f9;
  color: #111;
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

/* ===================== VARIABLES ===================== */
:root {
  --primary-color: #ff416c;
  --secondary-color: #ff4b2b;
  --bg-color: #f6f7f9;
  --card-bg: #fff;
  --text-muted: #666;
  --shadow: 0 10px 30px rgba(18,18,18,0.06);
  --radius: 12px;
}

/* ===================== LOADER ===================== */
.page-loader {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(4px);
  z-index: 9999;
  transition: opacity 0.4s ease;
}

.page-loader.hide {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}

.loader-box {
  background: var(--card-bg);
  padding: 20px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.spinner {
  width: 36px;
  height: 36px;
  border: 4px solid #eee;
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* ===================== HEADER ===================== */
.site-header {
  background: #111;
  color: #fff;
  padding: 18px 12px 8px;
  position: sticky;
  top: 0;
  z-index: 50;
}

.header-inner {
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255,255,255,0.08);
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
}

.brand-title {
  font-size: 20px;
  margin-bottom: 2px;
}

.brand-sub {
  font-size: 13px;
  color: #ccc;
}

/* ===================== NAVIGATION ===================== */
.main-nav {
  background: #111;
  border-top: 1px solid rgba(255,255,255,0.05);
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  gap: 12px;
}

.nav-link {
  color: #ddd;
  padding: 8px 10px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.nav-link.active,
.nav-link:hover {
  background: rgba(255,255,255,0.06);
  color: #fff;
}

/* ===================== HERO ===================== */
.hero {
  position: relative;
  max-width: 980px;
  margin: 24px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}

.hero-img {
  flex: 1 1 300px;
  border-radius: var(--radius);
  object-fit: cover;
}

.hero-content {
  flex: 1 1 300px;
}

.hero-title {
  font-size: 28px;
  margin-bottom: 8px;
}

.hero-sub {
  font-size: 16px;
  margin-bottom: 12px;
  color: var(--text-muted);
}

.hero-actions .btn {
  padding: 10px 18px;
  border-radius: 8px;
  background: linear-gradient(90deg,var(--primary-color),var(--secondary-color));
  color: #fff;
  font-weight: 500;
  transition: all 0.2s ease;
}

.hero-actions .btn:hover {
  opacity: 0.9;
}

/* ===================== SECTIONS ===================== */
.section {
  max-width: 980px;
  margin: 32px auto;
  padding: 0 12px;
}

.section-title {
  font-size: 22px;
  margin-bottom: 6px;
}

.section-sub {
  color: var(--text-muted);
  margin-bottom: 12px;
}

/* ===================== PRODUCT GRID ===================== */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 16px;
}

.card {
  background: var(--card-bg);
  border-radius: var(--radius);
  padding: 12px;
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 40px rgba(0,0,0,0.08);
}

.card-img {
  width: 100%;
  border-radius: var(--radius);
}

.card-body {
  padding: 6px 0;
}

.card-title {
  font-size: 16px;
  margin-bottom: 4px;
}

.card-note {
  color: var(--text-muted);
  font-size: 13px;
  margin-bottom: 8px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-weight: bold;
  color: #111;
}

.btn,
.btn-sm {
  padding: 6px 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  background: var(--primary-color);
  text-align: center;
}

.btn:hover,
.btn-sm:hover {
  opacity: 0.85;
}

.btn-sm {
  font-size: 13px;
  padding: 4px 8px;
}

/* ===================== ABOUT ===================== */
#about {
  text-align: center;
  line-height: 1.6;
}

/* ===================== FOOTER ===================== */
.site-footer {
  background: #111;
  color: #ccc;
  text-align: center;
  padding: 16px 12px;
}

.footer-inner small {
  font-size: 12px;
}

/* ===================== FLOATING WA ===================== */
.fab-wa {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #25d366;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
  transition: transform 0.2s ease;
}

.fab-wa:hover {
  transform: scale(1.1);
     }
