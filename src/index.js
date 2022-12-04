const DEFAULT_SIZE = 300;

const COLOR_EYE_X = 59;
const COLOR_EYE_Y = 130;
const COLOR_EYE_R = 92;

const BLACK_EYE_X = 75;
const BLACK_EYE_Y = 140;
const BLACK_EYE_R = 73;

const WHITE_EYE_X = 115;
const WHITE_EYE_Y = 162;
const WHITE_EYE_R = 21;

const canvas = document.getElementById('canvas');
const button = document.getElementById('download');
const colorPicker = document.getElementById('color');
const ruler = document.getElementById('ruler');

/** FUNCTION */
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
  ctx.arc(
    COLOR_EYE_X * coef,
    COLOR_EYE_Y * coef,
    COLOR_EYE_R * coef,
    0,
    Math.PI * 2,
    true,
  );
  ctx.fillStyle = color;
  ctx.fill();

  // black inside eye
  ctx.beginPath();
  ctx.arc(x * coef, y * coef, BLACK_EYE_R * coef, 0, Math.PI * 2, true);
  ctx.fillStyle = 'black';
  ctx.fill();

  // white inside eye
  ctx.beginPath();
  ctx.arc(x2 * coef, y2 * coef, WHITE_EYE_R * coef, 0, Math.PI * 2, true);
  ctx.fillStyle = 'white';
  ctx.fill();
}

async function generateURL(hex, size = 1000) {
  const offscreen = new OffscreenCanvas(size, size);
  const ctx = offscreen.getContext('2d');
  draw(ctx, hex, size);
  const blob = await offscreen.convertToBlob();
  return URL.createObjectURL(blob);
}

/** LISTENER */
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

colorPicker.addEventListener('change', (event) => {
  const hex = event.target.value;
  draw(ctx, hex);
});

document.addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    followMouse = !followMouse;
  }
});

document.addEventListener('mousemove', (event) => {
  if (!followMouse) {
    return;
  }

  const rulerRect = ruler.getBoundingClientRect();
  const angle = Math.atan2(
    event.clientY - rulerRect.y,
    event.clientX - rulerRect.x,
  );

  const colorBlackR = COLOR_EYE_R - BLACK_EYE_R;
  const colorWhiteR = COLOR_EYE_R - WHITE_EYE_R - 5;
  x = colorBlackR * Math.cos(angle) + COLOR_EYE_X;
  y = colorBlackR * Math.sin(angle) + COLOR_EYE_Y;
  x2 = colorWhiteR * Math.cos(angle) + COLOR_EYE_X;
  y2 = colorWhiteR * Math.sin(angle) + COLOR_EYE_Y;

  draw(ctx, colorPicker.value);
});

ruler.style.top = `${COLOR_EYE_Y}px`;
ruler.style.left = `${COLOR_EYE_X}px`;

canvas.width = DEFAULT_SIZE;
canvas.height = DEFAULT_SIZE;

/** STATE */
let x = BLACK_EYE_X;
let y = BLACK_EYE_Y;

let x2 = WHITE_EYE_X;
let y2 = WHITE_EYE_Y;

let followMouse = false;

/** INIT */
const ctx = canvas.getContext('2d');
draw(ctx, colorPicker.value);
