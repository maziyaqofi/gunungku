document.addEventListener("DOMContentLoaded", function () {
    // NAVIGASI AKTIF (Menandai menu yang diklik)
    let navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Hapus class 'active' dari semua link
            navLinks.forEach(nav => nav.classList.remove("active"));
            // Tambahkan class 'active' ke link yang diklik
            this.classList.add("active");

            // Simpan status menu yang diklik di localStorage
            localStorage.setItem("activeNav", this.getAttribute("href"));
        });
    });

    // Ambil status menu yang diklik dari localStorage
    let activePage = localStorage.getItem("activeNav");
    if (activePage) {
        let activeLink = document.querySelector(`.nav-link[href="${activePage}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }

    // FAQ (Menampilkan jawaban FAQ saat diklik)
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach((question) => {
        question.addEventListener("click", function () {
            const parent = this.parentElement;

            // Tutup semua FAQ sebelum membuka yang baru
            document.querySelectorAll(".faq-item").forEach((item) => {
                if (item !== parent) {
                    item.classList.remove("active");
                }
            });

            // Toggle active state
            parent.classList.toggle("active");
        });
    });
    
});