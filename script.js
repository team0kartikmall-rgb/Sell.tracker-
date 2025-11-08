/* ================================
   Global Styles — Black & Gold Theme
=================================== */

:root {
  --bg-color: #0b0b0b;
  --primary-gold: #d4af37;
  --secondary-gold: #f0c75e;
  --card-bg: #1a1a1a;
  --text-light: #f5f5f5;
  --text-muted: #b0b0b0;
  --accent: #202020;
  --success: #00c851;
  --danger: #ff4444;
  --border-radius: 14px;
  --transition: all 0.3s ease;
  --shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

/* Reset and Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: var(--bg-color);
  color: var(--text-light);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 30px auto;
  background: var(--card-bg);
  border-radius: var(--border-radius);
  padding: 25px;
  box-shadow: var(--shadow);
}

/* ================================
   Header Section
=================================== */

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

header h1 {
  color: var(--primary-gold);
  font-size: 2rem;
  letter-spacing: 1px;
}

header button {
  background: var(--primary-gold);
  color: #000;
  border: none;
  padding: 10px 20px;
  font-size: 0.95rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
}

header button:hover {
  background: var(--secondary-gold);
  transform: translateY(-2px);
}

/* ================================
   Dashboard Cards
=================================== */

.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.card {
  background: var(--accent);
  padding: 20px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.card:hover {
  transform: translateY(-4px);
}

.card h3 {
  color: var(--secondary-gold);
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.card p {
  font-size: 1.5rem;
  font-weight: 600;
}

/* ================================
   Sale Record Table
=================================== */

.sales-section {
  margin-top: 20px;
}

.sales-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.sales-header h2 {
  color: var(--secondary-gold);
  font-size: 1.3rem;
}

.invoice-btn {
  background: var(--primary-gold);
  color: #000;
  padding: 10px 18px;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
}

.invoice-btn:hover {
  background: var(--secondary-gold);
  transform: scale(1.05);
}

table {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: var(--border-radius);
}

thead {
  background: var(--primary-gold);
  color: #000;
}

th, td {
  padding: 12px 16px;
  text-align: left;
}

tbody tr:nth-child(even) {
  background: #121212;
}

tbody tr:hover {
  background: #1f1f1f;
}

/* ================================
   Profit Tracker Add-On
=================================== */

.profit-tracker {
  margin-top: 30px;
  background: var(--accent);
  padding: 25px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

.profit-tracker h2 {
  color: var(--secondary-gold);
  margin-bottom: 15px;
}

.tracker-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.tracker-item {
  flex: 1 1 200px;
  background: #121212;
  padding: 15px;
  border-radius: var(--border-radius);
  text-align: center;
  transition: var(--transition);
}

.tracker-item:hover {
  background: #181818;
  transform: translateY(-3px);
}

.tracker-item h4 {
  color: var(--secondary-gold);
  margin-bottom: 8px;
}

.tracker-item p {
  font-size: 1.2rem;
  font-weight: bold;
}

/* ================================
   Footer Section
=================================== */

footer {
  text-align: center;
  margin-top: auto;
  padding: 20px 0;
  color: var(--text-muted);
  font-size: 0.9rem;
  border-top: 1px solid #222;
}

footer a {
  color: var(--primary-gold);
  text-decoration: none;
  margin-left: 5px;
}

footer a:hover {
  text-decoration: underline;
}

/* ================================
   Responsive Adjustments
=================================== */

@media (max-width: 768px) {
  header h1 {
    font-size: 1.5rem;
  }

  .invoice-btn, header button {
    padding: 8px 14px;
    font-size: 0.9rem;
  }

  .card p {
    font-size: 1.3rem;
  }

  .tracker-grid {
    flex-direction: column;
  }
}
