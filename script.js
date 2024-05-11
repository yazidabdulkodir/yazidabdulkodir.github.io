const scriptURL = "https://script.google.com/macros/s/AKfycbxpZANhFpyTZL9hr_O4rYuFVQKy7R2mEiz_CkJ44hzLMIDj1VGox68sFHYvptmcBTgsNQ/exec";
const form = document.forms["yazid-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-none");
      // reset formnya
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// Fungsi untuk menampilkan modal saat tombol "Read more" diklik
$(document).ready(function () {
  $(".btn-card").click(function () {
    var targetModal = $(this).attr("data-target"); // Ambil target modal dari atribut data-target
    $(targetModal).modal("show"); // Tampilkan modal
  });

  // Fungsi untuk menutup modal saat tombol "Close" diklik
  $(".close").click(function () {
    var modal = $(this).closest(".modal"); // Temukan modal terdekat
    modal.modal("hide"); // Sembunyikan modal
  });
});

// Skrip JavaScript untuk mengatur overflow body saat modal ditampilkan/sembunyikan
$(document).ready(function () {
  $(".modal").on("show.bs.modal", function () {
    $("body").addClass("modal-open");
  });

  $(".modal").on("hidden.bs.modal", function () {
    $("body").removeClass("modal-open");
  });
});

$(document).ready(function () {
  // Memeriksa apakah elemen modal ada sebelum menambahkan atau menghapus kelas
  $(".modal").on("show.bs.modal", function () {
    if ($("body")[0] !== undefined) {
      // Memeriksa apakah elemen body ada
      $("body")[0].classList.add("modal-open");
    }
  });

  $(".modal").on("hidden.bs.modal", function () {
    if ($("body")[0] !== undefined) {
      // Memeriksa apakah elemen body ada
      $("body")[0].classList.remove("modal-open");
    }
  });
});

let timeElement;
let dateElement;

function updateTime() {
  const now = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const time = now.toLocaleTimeString("en-US");
  const date = now.toLocaleDateString("en-US", options);
  timeElement.textContent = time;
  dateElement.textContent = date;
}

function changeCardContent() {
  const card = document.getElementById("my-card");
  const newContent = "<h2>Jam Hidup</h2><p>Mengurai Misteri di Balik Detik-detik yang Melaju Tanpa Henti.</p>";
  card.innerHTML = newContent;
  card.classList.add("my-animated"); // Menambah kelas animated untuk memulai animasi transisi warna
  setTimeout(() => {
    card.classList.remove("my-animated"); // Menghapus kelas animated setelah animasi selesai
    updateTime(); // Panggil updateTime() untuk memperbarui waktu
  }, 5000); // Animasi berlangsung selama 5 detik
}

// Fungsi tambahan untuk menampilkan tombol Easter egg
function revealEasterButton() {
  const hiddenButton = document.getElementById("hidden-button");
  hiddenButton.style.display = "inline-block"; // Tampilkan tombol tersembunyi
}

// Fungsi untuk menampilkan pesan Easter egg
function revealEasterEgg() {
  alert(
    "Jam Hidup: Mengurai Misteri di Balik Detik-detik yang Melaju Tanpa Henti. Kalimat itu mencoba untuk menyampaikan bahwa dalam kehidupan, kita sering kali berusaha untuk memahami makna dari setiap momen, meskipun detik-detik itu berlalu dengan cepat dan tanpa ampun. Ini mengundang pembaca untuk merenungkan makna kehidupan dan waktu yang terus berjalan, seringkali tanpa kita sadari."
  );
}

// Simpan elemen time dan date saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  timeElement = document.getElementById("my-time");
  dateElement = document.getElementById("my-date");
  updateTime();
  setInterval(updateTime, 1000); // Panggil updateTime() setiap detik
});
