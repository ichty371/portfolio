/* You don't need to edit this file. Change your content in data.js */
{
const D = window.PORTFOLIO;
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;

/* ---------- placeholder pictures (used when image is "") ---------- */
const palettes = [["#1f3b33","#8fd9b6","#ff6a3d"],["#2a2140","#b9a7ff","#ffcf5a"],["#143044","#7cc7ff","#ff8a5c"],["#3a2a1c","#ffb86b","#8fd9b6"],["#1c2f22","#c4e86b","#ff6a3d"],["#2b1a26","#ff9ac1","#8fd9b6"]];
function topoSVG(seed, w = 400, h = 300) {
  const [bg, line, hi] = palettes[seed % palettes.length];
  let paths = "";
  const cx = 0.3 + ((seed * 37) % 40) / 100, cy = 0.35 + ((seed * 53) % 30) / 100;
  for (let i = 1; i < 14; i++) {
    let d = "";
    for (let a = 0; a <= 64; a++) {
      const t = (a / 64) * Math.PI * 2;
      const r = i * (Math.min(w, h) / 13) * (1 + 0.18 * Math.sin(3 * t + seed + i * 0.3) + 0.1 * Math.cos(5 * t - seed));
      d += (a ? "L" : "M") + (cx * w + Math.cos(t) * r * 1.3).toFixed(1) + " " + (cy * h + Math.sin(t) * r).toFixed(1);
    }
    paths += `<path d="${d}Z" fill="none" stroke="${i % 4 ? line : hi}" stroke-opacity="${i % 4 ? 0.45 : 0.9}" stroke-width="${i % 4 ? 1 : 2}"/>`;
  }
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><rect width="${w}" height="${h}" fill="${bg}"/>${paths}<circle cx="${cx*w}" cy="${cy*h}" r="5" fill="${hi}"/></svg>`;
}
/* white-background map placeholder, like a printed/exported map */
function whiteMapSVG(seed, title = "", w = 600, h = 600) {
  let s = seed * 7919 + 17; const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const accents = ["#d9534f", "#2f7fc1", "#3a9d5d", "#e08a1e", "#7a4fb5"];
  const acc = accents[seed % accents.length];
  let g = `<rect width="${w}" height="${h}" fill="#ffffff"/>`;
  // graticule
  for (let x = 40; x < w; x += 80) g += `<line x1="${x}" y1="30" x2="${x}" y2="${h-30}" stroke="#eef0f2"/>`;
  for (let y = 40; y < h; y += 80) g += `<line x1="30" y1="${y}" x2="${w-30}" y2="${y}" stroke="#eef0f2"/>`;
  // land use patches
  for (let i = 0; i < 4; i++) {
    const cx = 80 + r() * (w - 160), cy = 80 + r() * (h - 160); let d = "";
    for (let a = 0; a <= 20; a++) { const t = a / 20 * Math.PI * 2, rad = 30 + r() * 40; d += (a ? "L" : "M") + (cx + Math.cos(t) * rad).toFixed(1) + " " + (cy + Math.sin(t) * rad * .8).toFixed(1); }
    g += `<path d="${d}Z" fill="#dcefd6" stroke="#8cc28a" stroke-width="1"/>`;
  }
  // contours
  const px = w * (.3 + r() * .4), py = h * (.3 + r() * .4);
  for (let i = 1; i < 10; i++) {
    let d = "";
    for (let a = 0; a <= 60; a++) { const t = a / 60 * Math.PI * 2, rad = i * 26 * (1 + .2 * Math.sin(3 * t + seed + i * .4) + .1 * Math.cos(5 * t - seed)); d += (a ? "L" : "M") + (px + Math.cos(t) * rad * 1.2).toFixed(1) + " " + (py + Math.sin(t) * rad).toFixed(1); }
    g += `<path d="${d}Z" fill="none" stroke="#a88a6a" stroke-opacity="${i % 5 ? .45 : .9}" stroke-width="${i % 5 ? .8 : 1.4}"/>`;
  }
  // river + lake
  const y0 = 60 + r() * (h - 120);
  g += `<path d="M30 ${y0} C ${w*.3} ${y0 + (r()-.5)*300}, ${w*.6} ${y0 + (r()-.5)*300}, ${w-30} ${60 + r()*(h-120)}" stroke="#6aa9de" stroke-width="7" fill="none" stroke-linecap="round"/>`;
  g += `<ellipse cx="${100 + r()*(w-200)}" cy="${100 + r()*(h-200)}" rx="${30 + r()*30}" ry="${20 + r()*20}" fill="#cfe5f7" stroke="#6aa9de"/>`;
  // roads
  for (let i = 0; i < 3; i++) g += `<path d="M30 ${50 + r()*(h-100)} Q ${w/2} ${r()*h}, ${w-30} ${50 + r()*(h-100)}" stroke="#444" stroke-width="${i ? 1.5 : 3}" fill="none"/>`;
  // points
  for (let i = 0; i < 6; i++) g += `<circle cx="${60 + r()*(w-120)}" cy="${60 + r()*(h-120)}" r="5" fill="${acc}" stroke="#fff" stroke-width="1.5"/>`;
  // frame, title, legend, north arrow, scale bar
  g += `<rect x="30" y="30" width="${w-60}" height="${h-60}" fill="none" stroke="#222" stroke-width="1.5"/>`;
  g += `<rect x="42" y="42" width="${Math.min(w-84, 20 + title.length * 8.2)}" height="34" fill="#fff" stroke="#222"/><text x="52" y="64" font-family="Inter,Arial,sans-serif" font-size="14" font-weight="600" fill="#222">${esc(title)}</text>`;
  const lx = w - 170, ly = h - 128;
  g += `<rect x="${lx}" y="${ly}" width="128" height="86" fill="#fff" stroke="#222"/><text x="${lx+10}" y="${ly+18}" font-family="Inter,Arial,sans-serif" font-size="11" font-weight="600" fill="#222">Legend</text>`;
  [["#6aa9de","Water"],["#8cc28a","Green area"],[acc,"Site"]].forEach(([c, t], i) => g += `<rect x="${lx+10}" y="${ly+28+i*17}" width="14" height="10" fill="${c}"/><text x="${lx+30}" y="${ly+37+i*17}" font-family="Inter,Arial,sans-serif" font-size="10" fill="#333">${t}</text>`);
  g += `<g transform="translate(${w-62} 100)"><path d="M0 -26 L9 6 L0 0 L-9 6Z" fill="#222"/><text x="0" y="22" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="12" font-weight="700" fill="#222">N</text></g>`;
  g += `<g transform="translate(46 ${h-58})"><rect width="50" height="6" fill="#222"/><rect x="50" width="50" height="6" fill="#fff" stroke="#222"/><text y="20" font-family="Inter,Arial,sans-serif" font-size="10" fill="#222">0</text><text x="100" y="20" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="10" fill="#222">1 km</text></g>`;
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">${g}</svg>`;
}
function certSVG(c, seed) {
  const [, line, hi] = palettes[seed % palettes.length];
  const t = esc(c.title).slice(0, 46);
  return `<svg viewBox="0 0 424 300" xmlns="http://www.w3.org/2000/svg"><rect width="424" height="300" fill="#f4f1ea"/><rect x="12" y="12" width="400" height="276" fill="none" stroke="${line}" stroke-width="3"/><rect x="20" y="20" width="384" height="260" fill="none" stroke="${hi}" stroke-width="1"/><text x="212" y="78" text-anchor="middle" font-family="Unbounded,sans-serif" font-size="18" font-weight="800" fill="#1b1b1b">CERTIFICATE</text><text x="212" y="102" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#666">this certifies participation in</text><text x="212" y="140" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" font-weight="600" fill="#1b1b1b">${t}</text><line x1="90" y1="220" x2="190" y2="220" stroke="#999"/><line x1="234" y1="220" x2="334" y2="220" stroke="#999"/><circle cx="212" cy="236" r="22" fill="${hi}" opacity=".85"/></svg>`;
}
const media = (img, fallback, alt) => img ? `<img src="${esc(img)}" alt="${esc(alt)}" loading="lazy">` : fallback;

/* ---------- fill the page from data.js ---------- */
const initials = D.name.split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
$("#logo").innerHTML = `${esc(initials)}<b>.</b>`;
document.title = `${D.name} — Portfolio`;
$("#heroRole").textContent = D.role;
$("#heroIntro").textContent = D.intro;
const h1 = $("#heroName");
h1.setAttribute("aria-label", D.name);
h1.innerHTML = D.name.split(" ").map(w => `<span class="word" aria-hidden="true">${[...w].map(ch => `<span class="char">${esc(ch)}</span>`).join("")}</span>`).join("");
h1.querySelectorAll(".char").forEach((c, i) => c.style.transitionDelay = `${0.15 + i * 0.045}s`);

const sk = D.skills.map(s => `<span>${esc(s)}</span>`).join("");
$("#marquee").innerHTML = sk + sk;

$("#projectList").innerHTML = D.projects.map((p, i) => `
  <article class="project reveal">
    <div class="p-media"><div class="tilt${p.shape === "circle" ? " round" : p.shape === "cutout" ? " cutout" : ""}" data-cursor="Look">${media(p.image, topoSVG(i + 1), p.title)}<div class="glare"></div></div></div>
    <div>
      <span class="p-year">${esc(p.year)}</span>
      <h3>${esc(p.title)}</h3>
      <p class="p-role">${esc(p.role)}</p>
      <p class="desc">${esc(p.description)}</p>
      <div class="tags">${(p.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      ${p.link ? `<a class="p-link" href="${esc(p.link)}" target="_blank" rel="noopener" data-cursor="Open">View project →</a>` : ""}
    </div>
  </article>`).join("");

$("#mapGrid").innerHTML = D.maps.map((m, i) => `
  <button class="map-card reveal" data-kind="map" data-i="${i}" data-cursor="Zoom" style="transition-delay:${(i % 3) * 0.08}s">
    <div class="sheet">${media(m.image, whiteMapSVG(i, m.title), m.title)}</div>
    <div class="map-cap"><strong>${esc(m.title)}</strong><span>${[m.year, m.tools].filter(Boolean).map(esc).join(" · ")}</span></div>
  </button>`).join("");

const certCard = (c, i) => `
  <button class="cert reveal" data-kind="cert" data-i="${i}" data-cursor="View">
    <div class="thumb">${media(c.image, certSVG(c, i), c.title)}</div>
    <strong>${esc(c.title)}</strong><span>${esc(c.issuer)}</span>${c.group !== "courses" && c.details ? `<p class="cert-desc">${esc(c.details)}</p>` : ""}
  </button>`;
const certGroups = [["participation", "Participation & volunteering"], ["courses", "Completed studies"]];
$("#certList").innerHTML = certGroups.map(([g, label]) => {
  const items = D.certificates.map((c, i) => [c, i]).filter(([c]) => (c.group || "participation") === g);
  return items.length ? `<h3 class="cert-group reveal">${label}</h3><div class="certs">${items.map(([c, i]) => certCard(c, i)).join("")}</div>` : "";
}).join("");

const mail = $("#mail");
mail.textContent = D.email; mail.href = `mailto:${D.email}`;
$("#socials").innerHTML = (D.links || []).map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener" class="magnetic" data-cursor="Open">${esc(l.label)}</a>`).join("");
$("#footName").textContent = `© ${D.name}`;
$("#year").textContent = new Date().getFullYear();

/* ---------- reveal on scroll ---------- */
const revealObs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); revealObs.unobserve(e.target); } }), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObs.observe(el));
requestAnimationFrame(() => setTimeout(() => h1.classList.add("in"), 100));

/* ---------- nav, compass (how far down you are), active section ---------- */
const nav = $("#nav"), compass = $("#compass"), needle = $("#needle"), cring = $("#ring");
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight, k = max > 0 ? scrollY / max : 0;
  nav.classList.toggle("solid", scrollY > 40);
  compass.classList.toggle("show", scrollY > innerHeight * 0.6);
  needle.style.transform = `rotate(${k * 360}deg)`;
  cring.style.strokeDashoffset = 170 * (1 - k);
}
addEventListener("scroll", onScroll, { passive: true }); onScroll();
const links = [...document.querySelectorAll("[data-link]")];
const secObs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => secObs.observe(s));

/* ---------- custom cursor ---------- */
const dot = $("#cursorDot"), ring = $("#cursorRing"), label = $("#cursorLabel");
let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px,${my}px)`; });
if (fine) {
  (function loop() {
    rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener("pointerover", e => {
    const t = e.target.closest("a,button,[data-cursor]");
    ring.classList.toggle("hover", !!t);
    label.textContent = t?.dataset.cursor || "";
  });
  addEventListener("pointerdown", () => ring.classList.add("down"));
  addEventListener("pointerup", () => ring.classList.remove("down"));
  document.addEventListener("pointerleave", () => { dot.style.opacity = ring.style.opacity = 0; });
  document.addEventListener("pointerenter", () => { dot.style.opacity = ring.style.opacity = 1; });

  /* magnetic buttons */
  document.querySelectorAll(".magnetic").forEach(el => {
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    el.style.transition = "transform .35s cubic-bezier(.2,.9,.2,1), background .25s, color .25s, border-color .25s, background-position .6s, opacity .9s";
  });

  /* 3D tilt on project images */
  document.querySelectorAll(".tilt").forEach(el => {
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.transform = `rotateY(${(x - 0.5) * 14}deg) rotateX(${(0.5 - y) * 14}deg)`;
      el.style.setProperty("--gx", x * 100 + "%"); el.style.setProperty("--gy", y * 100 + "%");
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });
}

/* ---------- live topographic map in the hero ---------- */
const cv = $("#topo"), ctx = cv.getContext("2d");
const perm = new Uint8Array(512);
{ const p = [...Array(256).keys()]; for (let i = 255; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [p[i], p[j]] = [p[j], p[i]]; } for (let i = 0; i < 512; i++) perm[i] = p[i & 255]; }
const fade = t => t * t * (3 - 2 * t);
function noise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const h = (a, b) => perm[(perm[a & 255] + b) & 255] / 255;
  const u = fade(xf), v = fade(yf);
  const a = h(xi, yi), b = h(xi + 1, yi), c = h(xi, yi + 1), d = h(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
let W, H, cols, rows, field, CELL = 16, heroVisible = true, hx = -999, hy = -999, bump = 0;
function size() {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  W = cv.clientWidth; H = cv.clientHeight;
  cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  CELL = W < 700 ? 14 : 18;
  cols = Math.ceil(W / CELL) + 1; rows = Math.ceil(H / CELL) + 1;
  field = new Float32Array(cols * rows);
}
const ro = new ResizeObserver(() => { size(); if (reduce) draw(0); });
ro.observe(cv);
$(".hero").addEventListener("pointermove", e => {
  const r = cv.getBoundingClientRect(); hx = e.clientX - r.left; hy = e.clientY - r.top;
  const lat = (55.80 - (hy / H) * 0.2).toFixed(4), lon = (13.04 + (hx / W) * 0.3).toFixed(4);
  $("#coords").textContent = `${lat}° N · ${lon}° E`;
});
$(".hero").addEventListener("pointerleave", () => { hx = hy = -999; });
new IntersectionObserver(es => { heroVisible = es[0].isIntersecting; }).observe($(".hero"));

const LEVELS = 14;
function draw(t) {
  if (!W) return;
  const s = 0.0042, tt = t * 0.00005;
  bump += ((hx > -999 ? 1 : 0) - bump) * 0.05;
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const x = i * CELL, y = j * CELL;
    let v = noise(x * s + tt, y * s - tt * 0.6) * 0.7 + noise(x * s * 2.3 - tt, y * s * 2.3 + 9) * 0.3;
    if (bump > 0.01) { const dx = x - hx, dy = y - hy; v += 0.32 * bump * Math.exp(-(dx * dx + dy * dy) / 16000); }
    field[j * cols + i] = v;
  }
  ctx.clearRect(0, 0, W, H);
  for (let l = 1; l < LEVELS; l++) {
    const iso = l / LEVELS * 1.15;
    const major = l % 4 === 0;
    ctx.beginPath();
    for (let j = 0; j < rows - 1; j++) for (let i = 0; i < cols - 1; i++) {
      const a = field[j * cols + i], b = field[j * cols + i + 1], c = field[(j + 1) * cols + i + 1], d = field[(j + 1) * cols + i];
      const k = (a > iso) | ((b > iso) << 1) | ((c > iso) << 2) | ((d > iso) << 3);
      if (k === 0 || k === 15) continue;
      const x = i * CELL, y = j * CELL, f = (p, q) => (iso - p) / (q - p);
      const T = [x + CELL * f(a, b), y], R = [x + CELL, y + CELL * f(b, c)], B = [x + CELL * f(d, c), y + CELL], L = [x, y + CELL * f(a, d)];
      const seg = (p, q) => { ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]); };
      switch (k) {
        case 1: case 14: seg(L, T); break;
        case 2: case 13: seg(T, R); break;
        case 3: case 12: seg(L, R); break;
        case 4: case 11: seg(R, B); break;
        case 5: seg(L, T); seg(R, B); break;
        case 6: case 9: seg(T, B); break;
        case 7: case 8: seg(L, B); break;
        case 10: seg(T, R); seg(L, B); break;
      }
    }
    ctx.strokeStyle = major ? "rgba(255,106,61,.55)" : "rgba(149,180,155,.22)";
    ctx.lineWidth = major ? 1.4 : 1;
    ctx.stroke();
  }
}
if (reduce) draw(0);
else (function frame(t) { if (heroVisible) draw(t); requestAnimationFrame(frame); })(0);

/* ---------- lightbox with zoom + drag ---------- */
const lb = $("#lightbox"), lbImg = $("#lbImg"), lbInfo = $("#lbInfo"), stage = $("#lbStage");
let zoom = 1, px = 0, py = 0, drag = null, lastFocus = null;
const apply = () => { lbImg.style.transform = `translate(${px}px,${py}px) scale(${zoom})`; };
let lbItem = null, lbKind = "", lbPage = 0;
function showPage() {
  const it = lbItem, pages = it.pages || [it.image];
  const src = pages[lbPage];
  lbImg.style.setProperty("--ar", lbKind === "map" ? "1" : "1.414");
  if (src) {
    lbImg.innerHTML = `<img src="${esc(src)}" alt="${esc(it.title)}">`;
    const im = lbImg.querySelector("img");
    const setAr = () => { if (im.naturalWidth) lbImg.style.setProperty("--ar", (im.naturalWidth / im.naturalHeight).toFixed(4)); };
    im.complete ? setAr() : im.addEventListener("load", setAr);
  } else lbImg.innerHTML = lbKind === "map" ? whiteMapSVG(0, it.title) : certSVG(it, 0);
  const nav = pages.length > 1 ? `<div class="lb-pages">${pages.map((_, k) => `<button data-page="${k}" class="${k === lbPage ? "on" : ""}">Page ${k + 1}</button>`).join("")}</div>` : "";
  lbInfo.innerHTML = lbKind === "map"
    ? `<strong>${esc(it.title)}</strong><span>${[it.year, it.tools].filter(Boolean).map(esc).join(" · ")} — ${esc(it.description)}</span>`
    : `<strong>${esc(it.title)}</strong><span>${[it.issuer, it.date].filter(Boolean).map(esc).join(" · ")}</span>${it.details ? `<p class="lb-details">${esc(it.details)}</p>` : ""}${nav}`;
  zoom = 1; px = py = 0; lbImg.style.transformOrigin = "50% 50%"; apply();
  requestAnimationFrame(() => lbImg.style.setProperty("--h", Math.max(200, stage.clientHeight - 32) + "px"));
}
addEventListener("resize", () => { if (lb.classList.contains("open")) lbImg.style.setProperty("--h", Math.max(200, stage.clientHeight - 32) + "px"); });
function openLB(kind, i) {
  lastFocus = document.activeElement;
  lbKind = kind; lbItem = kind === "map" ? D.maps[i] : D.certificates[i]; lbPage = 0;
  showPage();
  lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden";
  $("#lbClose").focus();
}
lbInfo.addEventListener("click", e => { const b = e.target.closest("[data-page]"); if (b) { lbPage = +b.dataset.page; showPage(); } });
function closeLB() { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; lastFocus?.focus(); }
document.addEventListener("click", e => { const b = e.target.closest("[data-kind]"); if (b) openLB(b.dataset.kind, +b.dataset.i); });
$("#lbClose").addEventListener("click", closeLB);
let dragged = false;
stage.addEventListener("click", e => { if (dragged) { dragged = false; return; } if (e.target === stage) closeLB(); });
addEventListener("keydown", e => { if (e.key === "Escape" && lb.classList.contains("open")) closeLB(); });
stage.addEventListener("wheel", e => { e.preventDefault(); zoom = Math.min(5, Math.max(1, zoom * (e.deltaY < 0 ? 1.15 : 0.87))); if (zoom === 1) px = py = 0; apply(); }, { passive: false });
stage.addEventListener("dblclick", () => { zoom = zoom > 1 ? 1 : 2.5; px = py = 0; apply(); });
stage.addEventListener("pointerdown", e => { dragged = false; if (zoom > 1) { e.preventDefault(); drag = { x: e.clientX - px, y: e.clientY - py, sx: e.clientX, sy: e.clientY }; stage.setPointerCapture(e.pointerId); } });
stage.addEventListener("pointermove", e => { if (drag) { if (Math.abs(e.clientX - drag.sx) + Math.abs(e.clientY - drag.sy) > 4) dragged = true; px = e.clientX - drag.x; py = e.clientY - drag.y; apply(); } });
stage.addEventListener("pointerup", () => { drag = null; });
stage.addEventListener("pointercancel", () => { drag = null; });
}
