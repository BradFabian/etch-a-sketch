// Select the elements on page canvas shake button

const canvas = document.querySelector("#etch-a-sketch");

const ctx = canvas.getContext("2d");

const shakeButts = document.querySelector(".shake");
const MOVE_AMOUNT = 30;
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// Setup our canvas for drawing
ctx.linejoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${Math.random() * 360},100%,50%)`;
// start drawing

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({ key }) {
  // increment the hue
  hue += 10;
  ctx.strokeStyle = `hsl(${Math.random() * 360},100%,50%)`;
  console.log(key);
  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);

  // move our x and y values on what user did
  switch (key) {
    case "ArrowUp":
      y -= MOVE_AMOUNT;
      break;
    case "ArrowDown":
      y += MOVE_AMOUNT;
      break;
    case "ArrowRight":
      x += MOVE_AMOUNT;
      break;
    case "ArrowLeft":
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

//write handler for keys
function handleKey(e) {
  if (e.key.includes("Arrow")) {
    event.preventDefault();
    draw({ key: e.key });
  }
}
// clear/ shake function
function clearCanvas() {
  canvas.classList.add("shake");
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    "animationend",
    function () {
      canvas.classList.remove("shake");
    },
    { once: true }
  );
}
// listen for arrow keys
window.addEventListener("keydown", handleKey);
shakeButts.addEventListener("click", clearCanvas);
