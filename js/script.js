// Example: Add an event listener to scroll smoothly to sections
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const target = document.querySelector(link.getAttribute('href'));
        const headerOffset = 50;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset;
  
        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    }
  });
  