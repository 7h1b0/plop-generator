const button = document.getElementById('download');
button.addEventListener('click', () => {
  const img = canvas.toDataURL('image/png');
  const downloadLink = document.createElement('a');
  downloadLink.href = img;
  downloadLink.download = 'plop.png';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});

const colorPicker = document.getElementById('color');
colorPicker.addEventListener('change', (event) => {
  const hex = event.target.value;
  draw(hex);
});

const canvas = document.getElementById('canvas');

function draw(color = '#fff100', size = 400) {
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  const coef = size / 300;

  // background
  ctx.rect(0, 0, size, size);
  ctx.fillStyle = color;
  ctx.fill();

  // big eye left
  ctx.beginPath();
  ctx.arc(398 * coef, 137 * coef, 165 * coef, 0, Math.PI * 2, true);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.lineWidth = 10 * coef;
  ctx.strokeStyle = 'black';
  ctx.stroke();

  // big eye right
  ctx.beginPath();
  ctx.arc(46 * coef, 137 * coef, 165 * coef, 0, Math.PI * 2, true);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.lineWidth = 10 * coef;
  ctx.strokeStyle = 'black';
  ctx.stroke();

  // color eye
  ctx.beginPath();
  ctx.arc(59 * coef, 130 * coef, 92 * coef, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();

  // black inside eye
  ctx.beginPath();
  ctx.arc(75 * coef, 140 * coef, 73 * coef, 0, Math.PI * 2, true);
  ctx.fillStyle = 'black';
  ctx.fill();

  // white inside eye
  ctx.beginPath();
  ctx.arc(115 * coef, 162 * coef, 21 * coef, 0, Math.PI * 2, true);
  ctx.fillStyle = 'white';
  ctx.fill();
}

draw();
