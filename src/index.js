const button = document.getElementById('download');
button.addEventListener('click', () => {
  const svg = document.getElementById('plop');
  const svgData = svg.outerHTML;
  const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
  const svgUrl = URL.createObjectURL(svgBlob);
  const downloadLink = document.createElement('a');
  downloadLink.href = svgUrl;
  downloadLink.download = 'plop.svg';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});

const colorPicker = document.getElementById('color');
colorPicker.addEventListener('change', (event) => {
  const hex = event.target.value;
  const colors = document.querySelectorAll('.color');
  colors.forEach((el) => (el.style.fill = hex));
});
