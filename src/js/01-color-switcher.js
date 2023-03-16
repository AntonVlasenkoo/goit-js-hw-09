//=====================================================
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
stopBtn.disabled = true;
//=====================================================
startBtn.addEventListener('click', () => {
  colorGenerator();
  turnsOnDecibelOnStartBtn();
});

stopBtn.addEventListener('click', () => {
  turnsOffDecibelOnStartBtn();
  clearInterval(timerId);
});
//=====================================================

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function colorGenerator(params) {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
}

function turnsOnDecibelOnStartBtn() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
}
function turnsOffDecibelOnStartBtn() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
}
