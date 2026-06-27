document.addEventListener("DOMContentLoaded", () => {

  const images = document.querySelectorAll('.masonry img');
  const lightbox = document.getElementById('lightbox');
  const preview = document.getElementById('preview');
  const closeBtn = document.getElementById('close');


  /* Exit if gallery doesn't exist */

  if (!lightbox || !preview || !closeBtn) {
    return;
  }


  /* Open Image */

  images.forEach(img => {

    img.addEventListener('click', () => {

      lightbox.style.display = 'flex';
      preview.src = img.src;

    });

  });


  /* Close Button */

  closeBtn.addEventListener('click', () => {

    lightbox.style.display = 'none';

  });


  /* Click Outside */

  lightbox.addEventListener('click', (e) => {

    if (e.target === lightbox) {

      lightbox.style.display = 'none';

    }

  });


  /* ESC Key */

  document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {

      lightbox.style.display = 'none';

    }

  });

});
