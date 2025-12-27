
// Fungsi untuk menangani Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah form pindah halaman secara otomatis

        // Mengambil nilai input
        const name = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        // Validasi: Cek apakah ada field yang kosong
        if (name === "" || password === "") {
            alert("Maaf, semua kolom harus terisi!");
        } else {
            // Jika terisi semua, arahkan ke home
            alert("Login Berhasil! Selamat datang, " + name);
            window.location.href = "8. home page.html";
        }
    });
}

// Fungsi untuk menangani Signup
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Mengambil nilai input berdasarkan urutan atau tipe
        const inputs = signupForm.querySelectorAll('input');
        const name = inputs[0].value;
        const email = inputs[1].value;
        const password = inputs[2].value;
        const terms = signupForm.querySelector('#terms').checked; // Cek checkbox

        // Validasi lengkap
        if (name === "" || email === "" || password === "") {
            alert("Mohon lengkapi semua data pendaftaran!");
        } else if (!terms) {
            alert("Anda harus menyetujui syarat & kebijakan terlebih dahulu!");
        } else {
            alert("Akun berhasil dibuat! Silahkan masuk ke dashboard.");
            window.location.href = "8. home page.html";
        }
    });
}

// Navigasi dari Home ke Login saat klik Get Started
const btnGetStarted = document.getElementById('btnGetStarted');

if (btnGetStarted) {
    btnGetStarted.addEventListener('click', function() {
        // Anda bisa menambahkan efek transisi di sini jika mau
        window.location.href = "2. Login Page.html"; 
    });
}