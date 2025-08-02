document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('header');
  if (container) {
    fetch('header.html')
      .then(response => response.text())
      .then(html => {
        container.innerHTML = html;

        // After injecting the header, wire up number links so they navigate
        // to the collections page with a query string corresponding to the
        // clicked number. For example, clicking "18" will redirect to
        // "collection.html?18".
        const numberLinks = container.querySelectorAll('.numbers-top a');
        numberLinks.forEach(link => {
          link.addEventListener('click', evt => {
            evt.preventDefault();
            const number = link.textContent.trim();
            window.location.href = `collection.html?${number}`;
          });
        });
      });
  }
});
