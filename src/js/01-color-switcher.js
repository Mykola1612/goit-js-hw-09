let timerId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.body,
};

refs.start.addEventListener('click', onRandomColorStart);

function onRandomColorStart(e) {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  refs.start.setAttribute('disabled', 'disabled');
  refs.stop.removeAttribute('disabled', 'disabled');
}

refs.stop.addEventListener('click', onRandomColorStop);
function onRandomColorStop() {
  clearInterval(timerId);
  refs.start.removeAttribute('disabled', 'disabled');
  refs.stop.setAttribute('disabled', 'disabled');
}
