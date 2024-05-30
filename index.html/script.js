
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');
  
    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });
  
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;
  
    setInterval(() => {
      images[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].style.display = 'block';
    }, 2000);
  
    images.forEach((img, index) => {
      img.style.display = index === 0 ? 'block' : 'none';
    });
  });