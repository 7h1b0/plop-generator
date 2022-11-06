const DEFAULT_SIZE = 300;

const button = document.getElementById('download');
button.addEventListener('click', async () => {
  const img = await generateURL(colorPicker.value);
  const downloadLink = document.createElement('a');
  downloadLink.href = img;
  downloadLink.download = 'plop.png';
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // Cleanup
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(img);
});

const colorPicker = document.getElementById('color');
colorPicker.addEventListener('change', (event) => {
  const hex = event.target.value;
  draw(ctx, hex);
});

function draw(ctx, color, size = DEFAULT_SIZE) {
  const coef = size / DEFAULT_SIZE;

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

const canvas = document.getElementById('canvas');
canvas.width = DEFAULT_SIZE;
canvas.height = DEFAULT_SIZE;
const ctx = canvas.getContext('2d');
draw(ctx, colorPicker.value);

async function generateURL(hex, size = 1000) {
  const offscreen = new OffscreenCanvas(size, size);
  const ctx = offscreen.getContext('2d');
  draw(ctx, hex, size);
  const blob = await offscreen.convertToBlob();
  return URL.createObjectURL(blob);
}
