document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('header');
  if (container) {
    fetch('header.html')
      .then(response => response.text())
      .then(html => {
        container.innerHTML = html;

        const numberLinks = container.querySelectorAll('.numbers-top a');
        numberLinks.forEach(link => {
          link.addEventListener('click', evt => {
            evt.preventDefault();
            const number = link.textContent.trim();
            window.location.href = `collection.html?${number}`;
          });
        });

        if (window.initScrollSpy) {
          window.initScrollSpy();
        }
      });
  }
});
