// ======================
// KONFIG WhatsApp (isi nanti kalau sudah ada)
// ======================
const WHATSAPP_NUMBER = ""; // contoh: "6281234567890" (tanpa +)
const WHATSAPP_TEXT = "Halo Jago Reparasi, saya mau tanya servis...";

// ======================
// Drawer Menu (hamburger)
// ======================
const drawer = document.getElementById("drawer");
const btnMenu = document.getElementById("btnMenu");
const btnCloseDrawer = document.getElementById("btnCloseDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");

function openDrawer(){
  if (!drawer) return;
  drawer.classList.add("open");
  document.body.classList.add("no-scroll");
  drawer.setAttribute("aria-hidden", "false");
}
function closeDrawer(){
  if (!drawer) return;
  drawer.classList.remove("open");
  document.body.classList.remove("no-scroll");
  drawer.setAttribute("aria-hidden", "true");
}

btnMenu?.addEventListener("click", openDrawer);
btnCloseDrawer?.addEventListener("click", closeDrawer);
drawerBackdrop?.addEventListener("click", closeDrawer);

// ESC untuk nutup
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDrawer();
});

// Tutup drawer setelah klik menu, lalu scroll
document.querySelectorAll("[data-close]").forEach(a => {
  a.addEventListener("click", (e) => {
    // biar smooth dan aman, kita handle manual
    e.preventDefault();
    const target = a.getAttribute("href");
    closeDrawer();
    if (target && target.startsWith("#")){
      const el = document.querySelector(target);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", target);
    }
  });
});

// ======================
// Floating WhatsApp button
// ======================
const fab = document.getElementById("fabWa");
if (fab){
  if (!WHATSAPP_NUMBER){
    fab.addEventListener("click", () => {
      alert("Nomor WhatsApp belum diisi. Isi di script.js pada WHATSAPP_NUMBER.");
    });
  } else {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
    fab.addEventListener("click", () => window.open(url, "_blank"));
  }
}
