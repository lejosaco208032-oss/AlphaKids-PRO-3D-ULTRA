
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('⚡ PWA Craft Success: Worker Activo:', reg.scope))
      .catch(err => console.error('❌ PWA Craft Error:', err));
  });
}