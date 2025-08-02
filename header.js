document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('header');
  if (container) {
    fetch('header.html')
      .then(response => response.text())
      .then(html => {
        container.innerHTML = html;
      });
  }
});
