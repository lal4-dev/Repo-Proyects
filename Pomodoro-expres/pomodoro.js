const FULL_DASH_ARRAY = 754; // Circunferencia con r=120
const totalSeconds = 25 * 60;
let timeLeft = totalSeconds;
let interval = null;
let running = false;

const ring = document.getElementById('ring');
const timeDisplay = document.getElementById('time');

function updateCircle() {
  const offset = FULL_DASH_ARRAY - (timeLeft / totalSeconds) * FULL_DASH_ARRAY;
  ring.style.strokeDashoffset = offset;
}

function updateTime() {
  const min = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const sec = String(timeLeft % 60).padStart(2, '0');
  timeDisplay.textContent = `${min}:${sec}`;
}

function start() {
  if (running) return;
  running = true;
  interval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTime();
      updateCircle();
    } else {
      clearInterval(interval);
      running = false;
      alert("⏰ ¡Pomodoro finalizado!");
    }
  }, 1000);
}

function pause() {
  clearInterval(interval);
  running = false;
}

function reset() {
  pause();
  timeLeft = totalSeconds;
  updateTime();
  updateCircle();
}

// Inicializar
ring.style.strokeDasharray = FULL_DASH_ARRAY;
updateTime();
updateCircle();
