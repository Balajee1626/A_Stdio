
  const mobileMenuButton = document.getElementById('bar');
  const mobileNavbar = document.getElementById('navbar');

  mobileMenuButton.addEventListener('click', () => {
    mobileNavbar.classList.toggle('show');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      mobileNavbar.classList.remove('show');
    }
  });
  document.getElementById('menu').addEventListener('click', function() {
    document.querySelector('#navbar ul').classList.toggle('active');
  });
  