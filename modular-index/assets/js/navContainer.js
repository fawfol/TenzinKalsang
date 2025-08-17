// Hide the nav when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelector('.nav-links-container').classList.remove('show');
    });
  });
  