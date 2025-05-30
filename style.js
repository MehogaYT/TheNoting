<h1 id="judul">Judul Berganti Warna</h1>

<script>
  const colors = ['red', 'blue', 'green', 'orange', 'purple'];
  let i = 0;
  const elem = document.getElementById('judul');

  setInterval(() => {
    elem.style.color = colors[i];
    i = (i + 1) % colors.length;
  }, 1000);
</script>
