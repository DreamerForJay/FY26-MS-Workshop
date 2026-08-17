(() => {
  const canvas = document.querySelector('#globe-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let yaw = -121.301 * Math.PI / 180;
  let pitch = 24.994 * Math.PI / 180;
  let dragging = false, lastX = 0, lastY = 0;
  const points = [];
  for (let lat = -80; lat <= 80; lat += 10) {
    for (let lon = -180; lon < 180; lon += 10) points.push([lat * Math.PI / 180, lon * Math.PI / 180]);
  }
  const project = (lat, lon, radius, cx, cy) => {
    const cl = Math.cos(lat), a = lon + yaw;
    const x = cl * Math.sin(a), y = Math.sin(lat), z = cl * Math.cos(a);
    const y2 = y * Math.cos(pitch) - z * Math.sin(pitch);
    const z2 = y * Math.sin(pitch) + z * Math.cos(pitch);
    return { x: cx + x * radius, y: cy - y2 * radius, z: z2 };
  };
  const resize = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  const draw = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight, r = Math.min(w, h) * .36, cx = w / 2, cy = h / 2;
    ctx.clearRect(0, 0, w, h);
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#51d8ff';
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = 'rgba(6,22,36,.82)'; ctx.fill();
    ctx.strokeStyle = accent; ctx.globalAlpha = .35; ctx.lineWidth = 1.2; ctx.stroke(); ctx.globalAlpha = 1;
    points.forEach(([lat, lon]) => {
      const p = project(lat, lon, r, cx, cy); if (p.z < 0) return;
      const size = 1 + p.z * 1.5; ctx.beginPath(); ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
      ctx.fillStyle = accent; ctx.globalAlpha = .18 + p.z * .6; ctx.fill();
    });
    ctx.globalAlpha = 1;
    const marker = project(24.9937 * Math.PI / 180, 121.301 * Math.PI / 180, r, cx, cy);
    if (marker.z > 0) {
      ctx.beginPath(); ctx.arc(marker.x, marker.y, 5, 0, Math.PI * 2); ctx.fillStyle = '#ffb35c'; ctx.fill();
      ctx.beginPath(); ctx.arc(marker.x, marker.y, 12, 0, Math.PI * 2); ctx.strokeStyle = '#ffb35c'; ctx.globalAlpha = .55; ctx.stroke(); ctx.globalAlpha = 1;
    }
    if (!dragging) yaw += .0007;
    requestAnimationFrame(draw);
  };
  canvas.addEventListener('pointerdown', e => { dragging = true; lastX = e.clientX; lastY = e.clientY; canvas.setPointerCapture(e.pointerId); });
  canvas.addEventListener('pointermove', e => { if (!dragging) return; yaw += (e.clientX-lastX)*.008; pitch = Math.max(-1.2,Math.min(1.2,pitch-(e.clientY-lastY)*.006)); lastX=e.clientX; lastY=e.clientY; });
  canvas.addEventListener('pointerup', () => dragging = false);
  canvas.addEventListener('pointercancel', () => dragging = false);
  const updateClock = () => {
    const now = new Date();
    document.querySelector('#taipei-time').textContent = new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Taipei',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(now);
    document.querySelector('#taipei-date').textContent = new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Taipei',year:'numeric',month:'2-digit',day:'2-digit',weekday:'short'}).format(now).toUpperCase();
  };
  resize(); addEventListener('resize', resize); updateClock(); setInterval(updateClock, 1000); draw();
})();