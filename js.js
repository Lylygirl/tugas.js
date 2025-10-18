let jumlahCard = 0; 
let mode = "pagi"; 

function tambahCard() {
  jumlahCard++;

  let cardBaru = document.createElement("div");
  cardBaru.className = "card";
  cardBaru.innerHTML = `
    <span class="hapus" onclick="hapusCard(this)">✖</span>
    <h1>Card ${jumlahCard}</h1>
    <p>Ini card ke-${jumlahCard}</p>
  `;

  document.getElementById("cardContainer").appendChild(cardBaru);
}

function hapusCard(tombol) {
  
  tombol.parentElement.remove();
}

function gantiMode() {
  let body = document.body;
  let tombol = document.querySelector(".buttons button");

  if (mode === "pagi") {
    // ubah ke mode malam
    body.className = "malam";
    tombol.textContent = "☀️ Mode Pagi";
    mode = "malam";
  } else {
    // ubah ke mode pagi
    body.className = "";
    tombol.textContent = "🌙 Mode Malam";
    mode = "pagi";
  }
}

function tampilForm() {
   document.getElementById("popupForm").style.display = "flex"; 
}

function tutupForm() {
    document.getElementById("popupForm").style.display = "none"; 
}
function cariKOM() {
  let nim = prompt("Masukkan NIM Mahasiswa TI:");

  if (nim === null || nim.trim() === "") {
    alert("⚠️ NIM tidak boleh kosong!");
    return;
  }

  let tigaDigit = parseInt(nim.slice(-3));

  if (isNaN(tigaDigit)) {
    alert("❌ NIM harus berupa angka!");
    return;
  }

  if (tigaDigit % 3 === 0) {
    alert("✅ Mahasiswa dengan NIM " + nim + " berada di KOM A.");
  } 
  else if (tigaDigit % 3 === 1) {
    alert("📘 Mahasiswa dengan NIM " + nim + " berada di KOM B.");
  } 
  else {
    alert("📗 Mahasiswa dengan NIM " + nim + " berada di KOM C.");
  }
}
