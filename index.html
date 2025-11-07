<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Restock — Inventory Management (Demo)</title>
  <meta name="description" content="Restock — black & golden inventory manager demo (single-file)." />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    /* -------------------------
       Restock: Single-file UI stylesheet
       Black & Golden theme, responsive layout
       ------------------------- */
    :root{
      --bg:#070707; /* deep black */
      --panel:#0f0f0f;
      --muted:#bfbfbf;
      --gold:#d4af37;
      --gold-dark:#a78124;
      --accent:#ffd88a;
      --glass: rgba(255,255,255,0.03);
      --success:#27ae60;
      --danger:#e74c3c;
      --max-width:1200px;
      font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    }
    html,body{height:100%;background:var(--bg);color:#eee;margin:0}
    .app{max-width:var(--max-width);margin:18px auto;display:grid;grid-template-columns:260px 1fr;gap:18px;padding:18px}
    header.brand{grid-column:1/-1;display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border-radius:12px;background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent)}
    .brand .logo{display:flex;align-items:center;gap:12px}
    .logo .mark{width:46px;height:46px;border-radius:8px;background:linear-gradient(135deg,var(--gold),var(--gold-dark));display:flex;align-items:center;justify-content:center;color:#111;font-weight:700}
    .logo h1{margin:0;font-size:18px;letter-spacing:0.4px}
    .brand .actions{display:flex;gap:10px;align-items:center}
    .btn{background:var(--gold);color:#111;padding:8px 12px;border-radius:8px;border:none;font-weight:600;cursor:pointer}
    .btn.secondary{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--gold)}
    .sidebar{background:var(--panel);border-radius:12px;padding:12px;height:calc(100vh - 120px);overflow:auto}
    .nav{display:flex;flex-direction:column;gap:6px}
    .nav button{background:transparent;border:none;color:var(--muted);text-align:left;padding:10px;border-radius:8px;cursor:pointer}
    .nav button.active{background:linear-gradient(90deg, rgba(212,175,55,0.12), rgba(212,175,55,0.04));color:var(--gold);font-weight:600}
    .card{background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent);padding:14px;border-radius:12px}
    .content{height:calc(100vh - 120px);overflow:auto;padding:6px}
    .grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
    table{width:100%;border-collapse:collapse}
    th,td{padding:8px;border-bottom:1px dashed rgba(255,255,255,0.03);font-size:13px}
    th{color:var(--muted);font-weight:600}
    .muted{color:var(--muted);font-size:13px}
    .kpi{display:flex;gap:10px}
    .kpi .tile{flex:1;background:var(--glass);padding:12px;border-radius:10px}
    .search{display:flex;gap:8px;align-items:center}
    input[type=text],input[type=number],select,textarea{background:transparent;border:1px solid rgba(255,255,255,0.06);padding:8px;border-radius:8px;color:#fff;width:100%}
    .toolbar{display:flex;gap:10px;align-items:center}
    .small{font-size:12px;padding:6px 8px}
    .badge{background:rgba(212,175,55,0.12);padding:6px 8px;border-radius:999px;color:var(--gold);font-weight:600}
    .product-thumb{width:48px;height:48px;border-radius:6px;object-fit:cover;border:1px solid rgba(255,255,255,0.04)}
    .notice{background:linear-gradient(90deg, rgba(212,175,55,0.06), transparent);padding:10px;border-radius:8px;color:var(--gold-dark);}
    .footer-note{color:var(--muted);font-size:12px;text-align:center;margin-top:18px}
    /* responsive */
    @media (max-width:900px){.app{grid-template-columns:1fr;padding:8px}.sidebar{height:auto}} 
    /* modal */
    .modal-back{position:fixed;inset:0;background:rgba(2,2,2,0.6);display:none;align-items:center;justify-content:center;z-index:200}
    .modal{width:min(820px,96%);max-height:86vh;overflow:auto;background:var(--panel);padding:16px;border-radius:12px}
    .row{display:flex;gap:10px}
    .col{flex:1}
    .text-muted{color:var(--muted)}
    .table-actions{display:flex;gap:6px}
    .chip{background:rgba(255,255,255,0.02);padding:6px 8px;border-radius:8px}
    .toast{position:fixed;right:16px;bottom:16px;padding:10px 14px;border-radius:8px;background:rgba(0,0,0,0.7);color:#fff;z-index:300;border-left:4px solid var(--gold)}
  </style>
</head>
<body>
  <div class="app" id="app">
    <header class="brand card">
      <div class="logo">
        <div class="mark">R</div>
        <div>
          <h1>Restock</h1>
          <div class="muted" style="font-size:12px">Track Smarter • Restock Faster</div>
        </div>
      </div>
      <div class="actions">
        <div id="upgradeBanner" class="badge">Free Plan</div>
        <button class="btn small" id="addProductBtn">+ Add Product</button>
        <button class="btn small" id="addSaleBtn">+ New Sale</button>
        <button class="btn secondary small" id="openBilling">Billing</button>
      </div>
    </header>

    <aside class="sidebar card">
      <div class="nav" role="navigation">
        <button class="active" data-view="dashboard">Dashboard</button>
        <button data-view="products">Products</button>
        <button data-view="sales">Sales</button>
        <button data-view="purchases">Purchases</button>
        <button data-view="analytics">Analytics</button>
        <button data-view="bills">Bills</button>
        <button data-view="settings">Settings</button>
      </div>
      <hr style="border-color:rgba(255,255,255,0.03)">
      <div class="muted" style="font-size:13px">Pro features: multi-location, advanced analytics, batch/serial tracking, auto-reorder, API sync, CSV import/export (large), invoice templates.</div>
    </aside>

    <main class="content">
      <!-- Dashboard -->
      <section id="dashboard" class="view">
        <div class="grid">
          <div class="card">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <h3>Key Metrics</h3>
              <div class="muted">Updated live</div>
            </div>
            <div class="kpi" style="margin-top:12px">
              <div class="tile">
                <div class="muted">Total Revenue (30d)</div>
                <div style="font-size:20px;font-weight:700" id="rev30">₹0</div>
                <div class="muted" id="growth30">+0% vs prev</div>
              </div>
              <div class="tile">
                <div class="muted">Current Stock Value</div>
                <div style="font-size:20px;font-weight:700" id="stockVal">₹0</div>
                <div class="muted">Inventory cost basis</div>
              </div>
            </div>
            <div style="margin-top:12px">
              <canvas id="revChart" height="160"></canvas>
            </div>
          </div>

          <div class="card">
            <h3>Low & No Stock Alerts</h3>
            <div id="alertsArea" style="margin-top:8px"></div>
            <hr style="border-color:rgba(255,255,255,0.03)">
            <h4 style="margin:8px 0">Quick Actions</h4>
            <div style="display:flex;gap:8px">
              <button class="btn small" id="exportBtn">Export Products (CSV)</button>
              <button class="btn secondary small" id="importBtn">Import CSV</button>
              <button class="btn small" id="couponBtn">Apply Coupon</button>
            </div>
          </div>

          <div class="card" style="grid-column:1/3">
            <h3>Recent Sales</h3>
            <div id="recentSales"></div>
          </div>
        </div>
      </section>

      <!-- Products -->
      <section id="products" class="view" style="display:none">
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <h3>Products</h3>
            <div class="search" style="width:420px">
              <input type="text" id="searchProducts" placeholder="Search by name or SKU...">
              <select id="filterLocation"><option value="">All locations</option></select>
            </div>
          </div>
          <div style="margin-top:12px">
            <table id="productsTable">
              <thead><tr><th>Product</th><th>SKU</th><th>Qty</th><th>Price</th><th>Location</th><th></th></tr></thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Sales -->
      <section id="sales" class="view" style="display:none">
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <h3>Sales</h3>
            <div>
              <button class="btn small" id="newSaleBtn">New Sale</button>
            </div>
          </div>
          <div style="margin-top:12px">
            <table id="salesTable"><thead><tr><th>Date</th><th>Invoice</th><th>Items</th><th>Total</th><th></th></tr></thead><tbody></tbody></table>
          </div>
        </div>
      </section>

      <!-- Purchases -->
      <section id="purchases" class="view" style="display:none">
        <div class="card">
          <h3>Purchases & Stock In</h3>
          <div style="margin-top:12px">(Use this to add incoming stock or POs) — <button class="btn small" id="addPurchaseBtn">Add Purchase</button></div>
          <div style="margin-top:12px"><table id="purchaseTable"><thead><tr><th>Date</th><th>PO</th><th>Items</th><th>Total</th></tr></thead><tbody></tbody></table></div>
        </div>
      </section>

      <!-- Analytics -->
      <section id="analytics" class="view" style="display:none">
        <div class="card">
          <h3>Analytics & Forecast</h3>
          <div style="margin-top:12px">
            <div class="muted">Revenue by month (last 12 months)</div>
            <canvas id="monthChart" height="180" style="margin-top:8px"></canvas>
          </div>
          <div style="margin-top:12px">
            <h4>Slow-moving Items</h4>
            <div id="slowItems" class="muted"></div>
          </div>
        </div>
      </section>

      <!-- Bills -->
      <section id="bills" class="view" style="display:none">
        <div class="card">
          <h3>Utility & Other Bills</h3>
          <div style="margin-top:8px">Add recurring bills and reminders</div>
          <div style="margin-top:12px">
            <div class="row">
              <div class="col"><input id="billName" placeholder="Bill name (Electricity)"/></div>
              <div class="col"><input id="billAmount" type="number" placeholder="Amount"/></div>
              <div class="col"><input id="billDue" type="date"/></div>
              <div><button class="btn small" id="addBillBtn">Add</button></div>
            </div>
          </div>
          <div style="margin-top:12px"><table id="billsTable"><thead><tr><th>Bill</th><th>Amount</th><th>Due</th><th></th></tr></thead><tbody></tbody></table></div>
        </div>
      </section>

      <!-- Settings -->
      <section id="settings" class="view" style="display:none">
        <div class="card">
          <h3>Settings & Data</h3>
          <div style="margin-top:12px">
            <button class="btn small" id="resetBtn">Reset Demo Data</button>
            <button class="btn secondary small" id="downloadAll">Download JSON Backup</button>
          </div>
        </div>
      </section>
    </main>

    <!-- modals -->
    <div class="modal-back" id="modalBack">
      <div class="modal" id="modalContent"></div>
    </div>

    <div id="toastArea"></div>
  </div>

  <script>
    /* -------------------------
       Restock — Single-file JS app
       Note: This is a front-end demo. For production you should implement
       a backend, authentication, secure payment gateway, and proper database.
       -------------------------*/

    // ---- Data model and persistence ----
    const STORAGE_KEY = 'restock_db_v1';

    const defaultDB = () => ({
      products: [
        {id: id(), sku: 'RSK-1001', name:'Premium Notebooks (Pack of 10)', desc:'A pack of ruled notebooks', price:120, cost:70, qty:50, location:'Main Store', low:10, image:null},
        {id: id(), sku: 'RSK-1002', name:'Ballpoint Pens (Blue)', desc:'Box of 50 blue pens', price:200, cost:120, qty:120, location:'Warehouse A', low:30, image:null},
        {id: id(), sku: 'RSK-1003', name:'LED Bulb 9W', desc:'Energy savers', price:85, cost:40, qty:5, location:'Main Store', low:8, image:null}
      ],
      sales: [],
      purchases: [],
      bills: [],
      coupons: [
        {code:'PROFREE', type:'pro', durationDays:365, uses:1, expires:'2026-12-31'},
        {code:'TRIAL7', type:'pro', durationDays:7, uses:100, expires:'2026-12-31'}
      ],
      subscription: {isPro:false, plan:null, expiry:null}
    });

    let DB = loadDB();

    // ---- helpers ----
    function id(prefix='r'){return prefix+Math.random().toString(36).slice(2,10).toUpperCase()}
    function nowISO(){return new Date().toISOString()}
    function saveDB(){localStorage.setItem(STORAGE_KEY, JSON.stringify(DB)); renderAll();}
    function loadDB(){try{const raw=localStorage.getItem(STORAGE_KEY);return raw?JSON.parse(raw):defaultDB()}catch(e){console.error(e);return defaultDB()}}
    function toast(msg, timeout=3000){const t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),timeout)}

    // ---- UI helpers ----
    const views = Array.from(document.querySelectorAll('.nav button'));
    views.forEach(btn=>btn.addEventListener('click',()=>{views.forEach(b=>b.classList.remove('active'));btn.classList.add('active');showView(btn.dataset.view)}));
    function showView(name){document.querySelectorAll('.view').forEach(v=>v.style.display='none');const el=document.getElementById(name);if(el)el.style.display='block'}

    // ---- Renderers ----
    function renderAll(){renderProducts();renderLocations();renderAlerts();renderKPIs();renderSales();renderBills();renderRecentSales();renderAnalytics();updateUpgradeBanner();}

    function renderProducts(filter=''){
      const tbody=document.querySelector('#productsTable tbody');tbody.innerHTML='';
      const f=filter.toLowerCase();
      DB.products.forEach(p=>{
        if(f && !(p.name.toLowerCase().includes(f) || p.sku.toLowerCase().includes(f)))return;
        const tr=document.createElement('tr');
        tr.innerHTML=`
          <td style="display:flex;gap:10px;align-items:center">
            <img src="${p.image||'data:image/svg+xml;base64,'+btoa(simpleThumb(p.name))}" class="product-thumb" />
            <div>
              <div style="font-weight:600">${escapeHtml(p.name)}</div>
              <div class="muted" style="font-size:12px">${escapeHtml(p.desc||'')}</div>
            </div>
          </td>
          <td>${p.sku}</td>
          <td>${p.qty} ${p.qty<=0?'<span class="muted">(out)</span>':''}</td>
          <td>₹${num(p.price)}</td>
          <td>${p.location||'—'}</td>
          <td style="text-align:right">
            <div class="table-actions">
              <button class="btn small" data-edit="${p.id}">Edit</button>
              <button class="btn secondary small" data-sell="${p.id}">Sell</button>
              <button class="btn small" data-del="${p.id}">Delete</button>
            </div>
          </td>
        `;
        tbody.appendChild(tr);
      });
      // attach actions
      tbody.querySelectorAll('[data-edit]').forEach(b=>b.addEventListener('click',e=>openProductModal(getById('products',e.target.dataset.edit))));
      tbody.querySelectorAll('[data-sell]').forEach(b=>b.addEventListener('click',e=>openSaleModal(e.target.dataset.sell)));
      tbody.querySelectorAll('[data-del]').forEach(b=>b.addEventListener('click',e=>{if(confirm('Delete product?')){DB.products=DB.products.filter(x=>x.id!==e.target.dataset.del);saveDB();}}));
    }

    function renderLocations(){const sel=document.getElementById('filterLocation');sel.innerHTML='<option value="">All locations</option>';const locs=[...new Set(DB.products.map(p=>p.location).filter(Boolean))];locs.forEach(l=>{const o=document.createElement('option');o.value=l;o.textContent=l;sel.appendChild(o)})}

    function renderAlerts(){const area=document.getElementById('alertsArea');area.innerHTML='';const low=DB.products.filter(p=>p.qty<=p.low);if(low.length===0){area.innerHTML='<div class="muted">No low stock alerts.</div>';return;}low.forEach(p=>{const d=document.createElement('div');d.className='notice';d.innerHTML=`<b>${escapeHtml(p.name)}</b> — qty ${p.qty} (threshold ${p.low}) <button class="btn small" data-id="${p.id}">Create PO</button>`;area.appendChild(d)});area.querySelectorAll('[data-id]').forEach(b=>b.addEventListener('click',e=>{openPurchaseModal(e.target.dataset.id)}));}

    function renderKPIs(){const rev30 = DB.sales.filter(s=>isWithinDays(s.date,30)).reduce((a,s)=>a+Number(s.total||0),0);document.getElementById('rev30').textContent='₹'+num(rev30);
      const stockVal = DB.products.reduce((a,p)=>a + (Number(p.cost||0) * Number(p.qty||0)),0);document.getElementById('stockVal').textContent='₹'+num(stockVal);
      // simple growth calc vs previous period (30d before)
      const prev = DB.sales.filter(s=>isWithinDaysRange(s.date,60,31)).reduce((a,s)=>a+Number(s.total||0),0);
      let growth = prev? Math.round(((rev30-prev)/prev)*100):100;document.getElementById('growth30').textContent=(growth>=0?'+':'')+growth+'% vs prev';
      renderRevenueChart();
    }

    function renderRevenueChart(){const cvs=document.getElementById('revChart');const ctx=cvs.getContext('2d');const months=lastNMonths(6);const data = months.map(m=>DB.sales.filter(s=>monthKey(s.date)===m).reduce((a,s)=>a+Number(s.total||0),0));drawBarChart(ctx,months.map(k=>k.split('-').slice(1).join('/')),data);} 

    function renderSales(){const tbody=document.querySelector('#salesTable tbody');tbody.innerHTML='';DB.sales.slice().reverse().forEach(s=>{const tr=document.createElement('tr');tr.innerHTML=`<td>${new Date(s.date).toLocaleString()}</td><td>${s.invoice||s.id}</td><td>${s.items.length} items</td><td>₹${num(s.total)}</td><td style="text-align:right"><button class="btn small" data-id="${s.id}">View</button></td>`;tbody.appendChild(tr)});tbody.querySelectorAll('[data-id]').forEach(b=>b.addEventListener('click',e=>viewInvoice(e.target.dataset.id)))}

    function renderRecentSales(){const el=document.getElementById('recentSales');el.innerHTML='';const recent = DB.sales.slice(-5).reverse();if(recent.length===0){el.innerHTML='<div class="muted">No sales yet — make your first sale.</div>';return;}recent.forEach(s=>{const d=document.createElement('div');d.className='chip';d.innerHTML=`<div style="display:flex;justify-content:space-between"><div><b>${s.invoice||s.id}</b><div class="muted">${new Date(s.date).toLocaleString()}</div></div><div style="text-align:right">₹${num(s.total)}</div></div>`;el.appendChild(d)})}

    function renderBills(){const tbody=document.querySelector('#billsTable tbody');tbody.innerHTML='';DB.bills.forEach(b=>{const tr=document.createElement('tr');tr.innerHTML=`<td>${escapeHtml(b.name)}</td><td>₹${num(b.amount)}</td><td>${b.due}</td><td><button class="bt
<script src="app.js" defer></script>
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
