window.addEventListener('scroll', function() {
  document.getElementById('stickyy').innerHTML = Math.round((window.pageYOffset)/10) + ' METERS DEEP';
});