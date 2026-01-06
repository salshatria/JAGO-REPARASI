// ===============================
// JAGO REPARASI — CONFIG
// ===============================
// Isi nomor WA bisnis format internasional tanpa + (contoh: 6281234567890)
// Kalau belum ada, biarkan kosong "" dulu.
const WHATSAPP_NUMBER = ""; // <-- NANTI ISI DI SINI

const BUSINESS = {
  name: "Jago Reparasi",
  openHours: "09.00 – 21.00",
  areaService: "Sekitar domisili kamu",
  alamat: "Belum diisi",
  instagram: "belum diisi"
};

// ===============================
// DATA
// ===============================
const QUICK_FIX = [
  { title: "Ganti baterai", desc: "Baterai cepat habis, drop, atau tidak mengisi." },
  { title: "Ganti layar", desc: "Layar retak, blank, ghost touch, garis." },
  { title: "Port charger", desc: "Sulit dicas, konektor longgar." },
  { title: "Install ulang", desc: "Laptop lemot, error, driver bermasalah." },
  { title: "Upgrade SSD/RAM", desc: "Biar lebih cepat & responsif." },
];

const SERVICES = {
  hp: [
    { title:"Ganti Layar", desc:"LCD/OLED retak, blank, touch bermasalah.", tags:["Estimasi cepat","Part sesuai stok"] },
    { title:"Ganti Baterai", desc:"Baterai drop, cepat habis, atau menggembung.", tags:["Lebih awet","Cek kesehatan"] },
    { title:"Port Charger", desc:"Tidak bisa ngecas / konektor longgar.", tags:["Rapi","Tes charging"] },
    { title:"Speaker / Mic", desc:"Suara kecil, pecah, mic tidak terbaca.", tags:["Tes panggilan","Tes rekam"] },
    { title:"Software HP", desc:"Reset, update, error aplikasi, lemot.", tags:["Backup dulu","Aman"] },
    { title:"Diagnosa", desc:"Cek masalah sebelum tindakan perbaikan.", tags:["Transparan","Konfirmasi dulu"] },
  ],
  laptop: [
    { title:"Install Ulang + Driver", desc:"Windows error, lemot, aplikasi crash.", tags:["Rapi","Siap pakai"] },
    { title:"Upgrade SSD", desc:"Performa meningkat drastis untuk laptop lemot.", tags:["Cepat","Value"] },
    { title:"Tambah RAM", desc:"Multitasking lebih lancar.", tags:["Kompatibel check","Optimal"] },
    { title:"Keyboard / Touchpad", desc:"Tombol mati, seret, tidak responsif.", tags:["Rapi","Tes input"] },
    { title:"Kipas / Overheat", desc:"Panas berlebihan, kipas berisik.", tags:["Bersih-bersih","Thermal"] },
    { title:"Diagnosa", desc:"Cek penyebab dan opsi solusi.", tags:["Estimasi dulu","Konfirmasi"] },
  ],
  software: [
    { title:"Office & Tools", desc:"Instal aplikasi kerja sesuai kebutuhan.", tags:["Rapi","Tertib"] },
    { title:"Optimasi Laptop", desc:"Bersih-bersih software + setting performa.", tags:["Lebih cepat","Ringan"] },
    { title:"Backup Data", desc:"Pindah data aman sebelum perbaikan.", tags:["Aman","Terstruktur"] },
    { title:"Antivirus / Security", desc:"Scan malware + proteksi dasar.", tags:["Aman","Update"] },
    { title:"Setting Wi-Fi/Driver", desc:"Perbaiki koneksi & driver bermasalah.", tags:["Stabil","Tes"] },
    { title:"Konsultasi", desc:"Tanya dulu sebelum tindakan.", tags:["Gratis awal","Jelas"] },
  ]
};

const TESTI = [
  { name:"Rani", stars:5, text:"HP-ku yang layarnya retak beres cepat dan rapi. Enak karena dikasih estimasi dulu." },
  { name:"Bayu", stars:5, text:"Laptop lemot jadi ngebut setelah upgrade SSD. Prosesnya jelas dan komunikatif." },
  { name:"Nadia", stars:5, text:"Port charger HP udah normal lagi. Pelayanannya ramah, hasilnya rapi." },
];

const FAQ = [
  { q:"Bisa konsultasi dulu sebelum servis?", a:"Bisa. Kamu bisa chat keluhan dan tipe perangkat, nanti kami bantu arahkan langkah awal dan estimasi awal (jika memungkinkan)." },
  { q:"Apakah harus bayar sebelum dikerjakan?", a:"Tidak. Umumnya kami sampaikan estimasi dulu. Pengerjaan dilakukan setelah kamu setuju." },
  { q:"Berapa lama pengerjaan?", a:"Tergantung kasus dan ketersediaan part. Perbaikan ringan bisa lebih cepat, untuk kasus tertentu butuh waktu lebih." },
  { q:"Data di laptop/HP aman?", a:"Kami sarankan backup dulu. Jika butuh, kami bantu backup sebelum tindakan yang berisiko." },
  { q:"Bisa upgrade SSD/RAM sekalian?", a:"Bisa. Kami cek kompatibilitas, lalu bantu pemasangan dan setup." },
];

// ===============================
// HELPERS
// ===============================
const $ = (s) => document.querySelector(s);

function setText(id, val){ const el = $(id); if (el) el.textContent = val; }

setText("#year", new Date().getFullYear());
setText("#openHours", BUSINESS.openHours);
setText("#areaService", BUSINESS.areaService);
setText("#alamat", BUSINESS.alamat);
setText("#jam", BUSINESS.openHours);
setText("#ig", BUSINESS.instagram);

// Render quick fix list
$("#quickFix").innerHTML = QUICK_FIX.map(x => `
  <div class="check">
    <div class="check__dot" aria-hidden="true"></div>
    <div>
      <b>${x.title}</b>
      <div><span>${x.desc}</span></div>
    </div>
  </div>
`).join("");

// Tabs services
const serviceCards = $("#serviceCards");
const tabs = document.querySelectorAll("[data-tab]");

function renderServices(key){
  const arr = SERVICES[key] || [];
  serviceCards.innerHTML = arr.map(s => `
    <article class="card">
      <div class="kicker">Layanan</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <div class="pills">
        ${(s.tags||[]).map(t => `<span class="pill2">${t}</span>`).join("")}
      </div>
    </article>
  `).join("");
}
renderServices("hp");

tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    tabs.forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderServices(btn.getAttribute("data-tab"));
  });
});

// Testimonials
$("#testi").innerHTML = TESTI.map(t => `
  <article class="quote">
    <div class="quote__top">
      <b>${t.name}</b>
      <span class="stars">${"★".repeat(t.stars)}</span>
    </div>
    <p>${t.text}</p>
  </article>
`).join("");

// FAQ accordion
$("#faqList").innerHTML = FAQ.map((f, i) => `
  <div class="faqItem" id="faq${i}">
    <button class="faqQ" type="button" data-faq="${i}">
      <span>${f.q}</span>
      <span aria-hidden="true">▾</span>
    </button>
    <div class="faqA">${f.a}</div>
  </div>
`).join("");

document.querySelectorAll("[data-faq]").forEach(btn => {
  btn.addEventListener("click", () => {
    const i = btn.getAttribute("data-faq");
    $("#faq"+i).classList.toggle("open");
  });
});

// Drawer (mobile menu)
const drawer = $("#drawer");
const btnMenu = $("#btnMenu");
const btnClose = $("#btnClose");
const btnBackdrop = $("#btnBackdrop");

function openDrawer(){
  drawer.style.display = "block";
  drawer.setAttribute("aria-hidden", "false");
}
function closeDrawer(){
  drawer.style.display = "none";
  drawer.setAttribute("aria-hidden", "true");
}
btnMenu?.addEventListener("click", openDrawer);
btnClose?.addEventListener("click", closeDrawer);
btnBackdrop?.addEventListener("click", closeDrawer);
document.querySelectorAll(".drawer__link").forEach(a => {
  a.addEventListener("click", () => closeDrawer());
});

// ===============================
// WhatsApp helpers
// ===============================
function waLink(text){
  if (!WHATSAPP_NUMBER) return null;
  const msg = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

function buildBookingMessage(){
  const nama = ($("#nama")?.value || "").trim();
  const kategori = ($("#kategori")?.value || "").trim();
  const merk = ($("#merk")?.value || "").trim();
  const keluhan = ($("#keluhan")?.value || "").trim();
  const kota = ($("#kota")?.value || "").trim();

  const lines = [
    `Halo ${BUSINESS.name}, saya mau booking servis.`,
    `Nama: ${nama || "-"}`,
    `Kategori: ${kategori || "-"}`,
    `Merk/Model: ${merk || "-"}`,
    `Keluhan: ${keluhan || "-"}`,
    `Kota/Area: ${kota || "-"}`,
  ];
  return lines.join("\n");
}

function updatePreview(){
  const msg = buildBookingMessage();
  $("#previewText").textContent = msg.includes("Nama: -") ? "Isi form untuk membuat pesan otomatis…" : msg;
}

["nama","kategori","merk","keluhan","kota"].forEach(id => {
  document.getElementById(id)?.addEventListener("input", updatePreview);
  document.getElementById(id)?.addEventListener("change", updatePreview);
});

// Quick WA buttons
function ensureWaOrAlert(msg){
  const link = waLink(msg);
  if (!link){
    alert("Nomor WhatsApp bisnis belum diisi.\n\nBuka file script.js lalu isi:\nconst WHATSAPP_NUMBER = \"62812xxxxxxx\";");
    return false;
  }
  window.open(link, "_blank", "noopener,noreferrer");
  return true;
}

$("#btnQuickWA")?.addEventListener("click", () => {
  const msg = `Halo ${BUSINESS.name}, saya mau tanya servis HP/Laptop.`;
  ensureWaOrAlert(msg);
});

$("#waFab")?.addEventListener("click", (e) => {
  e.preventDefault();
  const msg = `Halo ${BUSINESS.name}, saya mau konsultasi servis HP/Laptop.`;
  ensureWaOrAlert(msg);
});

// Booking form actions
const bookingForm = $("#bookingForm");
const btnCopy = $("#btnCopy");
const btnSendWA = $("#btnSendWA");

bookingForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  updatePreview();
  const msg = buildBookingMessage();
  $("#previewText").textContent = msg;

  // auto copy on submit (nice UX)
  navigator.clipboard?.writeText(msg).then(() => {
    $("#bookingHint").textContent = "Pesan dibuat & sudah dicopy. Kamu bisa paste ke WhatsApp.";
  }).catch(() => {
    $("#bookingHint").textContent = "Pesan dibuat. Klik tombol Copy jika belum tercopy.";
  });
});

btnCopy?.addEventListener("click", async () => {
  updatePreview();
  const msg = buildBookingMessage();
  try{
    await navigator.clipboard.writeText(msg);
    $("#bookingHint").textContent = "Pesan berhasil dicopy ✅";
  }catch{
    $("#bookingHint").textContent = "Gagal copy otomatis. Copy manual dari kotak preview.";
  }
});

btnSendWA?.addEventListener("click", () => {
  updatePreview();
  const msg = buildBookingMessage();
  ensureWaOrAlert(msg);
});

// Init preview
updatePreview();