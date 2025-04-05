document.addEventListener("DOMContentLoaded", function () {
  function toggleNav() {
      var navLinksContainer = document.querySelector('.nav-links-container');
      if (navLinksContainer.classList.contains('show')) {
          navLinksContainer.classList.remove('show');
      } else {
          navLinksContainer.classList.add('show');
      }
  }

  // Hide the nav when clicked outside
  document.addEventListener('click', function(event) {
      var navLinksContainer = document.querySelector('.nav-links-container');
      var hamburgerButton = document.querySelector('.hamburger');
      
      if (navLinksContainer && hamburgerButton &&
          event.target !== navLinksContainer && !navLinksContainer.contains(event.target) &&
          event.target !== hamburgerButton && !hamburgerButton.contains(event.target)) {
          navLinksContainer.classList.remove('show');
      }
  });

  // Call toggleNav on hamburger button click
  var hamburgerButton = document.querySelector('.hamburger');
  if (hamburgerButton) {
      hamburgerButton.addEventListener('click', toggleNav);
  } else {
      console.error('Element with class ".hamburger" not found.');
  }
});
