function loadMobileCSS() {
    if (window.innerWidth <= 500) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'mobile.css';
      document.head.appendChild(link);
    } else {
      var links = document.querySelectorAll('link[rel="stylesheet"]');
      links.forEach(function(link) {
        if (link.href.includes('mobile.css')) {
          link.parentNode.removeChild(link);
        }
      });
    }
  }
  
  // Call the function on page load and resize
  loadMobileCSS();
  window.addEventListener('resize', loadMobileCSS);
  