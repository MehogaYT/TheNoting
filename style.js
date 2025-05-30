const colors = ['red', 'blue', 'green', 'orange', 'purple'];
let i = 0;
const elemJudul = document.getElementById('judul');
const elemCatatan = document.getElementById('catatan');

setInterval(() => {
  elemJudul.style.color = colors[i];
  elemCatatan.style.color = colors[(i + 2) % colors.length]; // warna beda untuk catatan
  i = (i + 1) % colors.length;
}, 1000);
