(function() {
  let meta = document.querySelector('meta[name="viewport"]');
  const content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";

  if (!meta) {
    meta = document.createElement('meta');
    meta.name = "viewport";
    document.getElementsByTagName('head')[0].appendChild(meta);
  }
  
  meta.content = content;

  document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
  });

  const canvas = document.querySelector('canvas');

  if (canvas) {
    canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    // Prevent double-tap to zoom
    let lastTouchEnd = 0;
    canvas.addEventListener('touchend', (e) => {
      const now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    }, false);
  }
})();