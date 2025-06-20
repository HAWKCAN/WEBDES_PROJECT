

 document.addEventListener("DOMContentLoaded", function () {
  // filter
    document.querySelectorAll('.filters a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.filters .active')?.classList.remove('active');
        this.classList.add('active');
      });
    });

    // email kirim
       document.getElementById('kirim').addEventListener('submit',
    function(event) {
    event.preventDefault(); // cegah reload halaman
    alert('✅ Pesan berhasil dikirim!');
    this.reset(); // kosongkan form (opsional)  
  }
);

//efek naik turun bar up
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 58) {
        navbar.classList.add('navbar--hidden'); // Scroll ke bawah
      } else {
        navbar.classList.remove('navbar--hidden'); // Scroll ke atas
      }

      lastScrollY = currentScrollY;
    });

  });