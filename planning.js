document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-link');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(btn => btn.classList.remove('active'));
      contents.forEach(section => section.classList.remove('active'));

      tab.classList.add('active');
      const selected = document.getElementById(tab.dataset.tab);
      selected.classList.add('active');
    });
  });
});
