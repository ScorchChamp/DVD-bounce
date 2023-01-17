
window.addEventListener("load", function () {
  const canvas = document.getElementById('canvas');
  const parent = document.getElementById("container");
  const ctx = canvas.getContext('2d');
  const scale = 0.5;
  const speed = 1;
  canvas.width = parent.offsetWidth;
  canvas.height = parent.offsetHeight;

  const dvd = { x: 0, y: 0, xspeed: speed, yspeed: speed, img: new Image() };
  dvd.img.src = './DVD_logo.svg'; // Image source: https://upload.wikimedia.org/wikipedia/commons/9/9b/DVD_logo.svg

  function draw() {
    ctx.fillStyle = '#eee'
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale);
  }

  function update() {
    dvd.x += dvd.xspeed;
    dvd.y += dvd.yspeed;
    if (dvd.x + dvd.img.width * scale >= canvas.width || dvd.x <= 0) {
      dvd.xspeed *= -1;
    }
    if (dvd.y + dvd.img.height * scale >= canvas.height || dvd.y <= 0) {
      dvd.yspeed *= -1;
    }
  }

  interval = setInterval(() => { update(); draw(); }, speed);
})