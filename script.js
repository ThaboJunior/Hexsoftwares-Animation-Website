// Optional JS to restart animation when page reloads
    window.onload = () => {
      const name = document.querySelector('.sliding-name');
      name.style.animation = 'none';
      setTimeout(() => {
        name.style.animation = '';
      }, 10);
    };