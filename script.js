const scriptURL = "https://script.google.com/macros/s/AKfycbxpZANhFpyTZL9hr_O4rYuFVQKy7R2mEiz_CkJ44hzLMIDj1VGox68sFHYvptmcBTgsNQ/exec";
const form = document.forms["yazid-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

// Fungsi untuk memutar suara klik
function playClickSound() {
  const audio = document.getElementById("click-sound");
  audio.play();
}

// Fungsi untuk memutar suara alert
function playAlertSound() {
  const audio = document.getElementById("alert-sound");
  audio.play();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Ketika tombol submit diklik, tampilkan tombol loading dan sembunyikan tombol kirim
  btnLoading.classList.remove("d-none");
  btnKirim.classList.add("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Tampilkan tombol kirim, sembunyikan tombol loading
      btnLoading.classList.add("d-none");
      btnKirim.classList.remove("d-none");

      if (response.ok) {
        // Tampilkan alert dan mainkan suara alert
        myAlert.classList.remove("d-none");
        playAlertSound();

        // Reset form
        form.reset();
        console.log("Success!", response);
      } else {
        console.error("Error!", response.statusText);
      }
    })
    .catch((error) => {
      console.error("Error!", error.message);
      // Tampilkan kembali tombol kirim jika terjadi kesalahan
      btnLoading.classList.add("d-none");
      btnKirim.classList.remove("d-none");
    });
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
    "Jam Hidup: Mengurai Misteri di Balik Detik-detik yang Melaju Tanpa Henti. Kalimat itu mencoba untuk menyampaikan bahwa dalam kehidupan, kita sering kali berusaha untuk memahami makna dari setiap momen, meskipun detik-detik itu berlalu dengan cepat dan tanpa henti. Ini mengundang pembaca untuk merenungkan makna kehidupan dan waktu yang terus berjalan, seringkali tanpa kita sadari."
  );
}

// Simpan elemen time dan date saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  timeElement = document.getElementById("my-time");
  dateElement = document.getElementById("my-date");
  updateTime();
  setInterval(updateTime, 1000); // Panggil updateTime() setiap detik
});

//partikel kursor
document.addEventListener("DOMContentLoaded", function () {
  const colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];

  let isCursorMoving = false;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener("mousemove", function (e) {
    isCursorMoving = true;
    cursorX = e.clientX;
    cursorY = e.clientY;
  });

  document.addEventListener("scroll", function () {
    isCursorMoving = false;
  });

  function createParticle(x, y) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = x + "px";
    particle.style.top = y + window.scrollY + "px"; // menyesuaikan posisi scroll
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(particle);

    setTimeout(function () {
      particle.remove();
    }, 1000);
  }

  function updateCursorPosition() {
    if (isCursorMoving) {
      const cursor = document.querySelector(".cursor");
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      createParticle(cursorX, cursorY);
    }
    requestAnimationFrame(updateCursorPosition);
  }

  updateCursorPosition();
});

function playClickSound() {
  var audio = document.getElementById("click-sound");
  audio.play();
}

// Fungsi untuk memutar suara klik dan mengarahkan ke URL
function playClickAndRedirect(url) {
  playClickSound();
  setTimeout(() => {
    window.location.href = url;
  }, 1000); // Beri jeda waktu untuk memutar suara sebelum mengarahkan
}

// Fungsi untuk menangani klik kanan
function disableRightClick(event) {
  // Hentikan tindakan default yang terkait dengan klik kanan
  event.preventDefault();
}
// Tambahkan event listener untuk menangani klik kanan
document.addEventListener("contextmenu", disableRightClick);
