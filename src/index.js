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

const colorPicker = document.getElementById('hex');
colorPicker.addEventListener('change', (event) => {
  const hex = event.target.value;
  updateColor(hex);

  const rgb = hexToRgb(hex.substring(1));
  [r, g, b].forEach((color, i) => (color.value = rgb[i]));
});

const r = document.getElementById('r');
const g = document.getElementById('g');
const b = document.getElementById('b');
[r, g, b].forEach((el) =>
  el.addEventListener('change', () => {
    const hex = rgbToHex(r.value, g.value, b.value);
    colorPicker.value = hex;
    updateColor(hex);
  }),
);

function componentToHex(c) {
  return Number(c).toString(16).padStart(0, 2);
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, b, g];
}

function updateColor(hex) {
  const colors = document.querySelectorAll('.color');
  colors.forEach((el) => (el.style.fill = hex));
}
