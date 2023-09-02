import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const { delay, step, amount } = form.elements;

form.addEventListener('submit', onCreatePromisesButtonSubmit);
function onCreatePromisesButtonSubmit(e) {
  e.preventDefault();
  const delayValue = parseInt(delay.value);
  const stepValue = parseInt(step.value);
  const amountValue = parseInt(amount.value);
  createPromises(amountValue, delayValue, stepValue);
}

function createPromises(amountValue, delayValue, stepValue) {
  for (let i = 1; i <= amountValue; i++) {
    const currentDelay = delayValue + (i - 1) * stepValue;
    createSinglePromise(i, currentDelay)
      .then(result => {
        Notify.success(
          `✅ Fulfilled promise ${result.position} in ${result.delay}ms`
        );
      })
      .catch(error => {
        Notify.failure(
          `❌ Rejected promise ${error.position} in ${error.delay}ms`
        );
      });
  }
}

function createSinglePromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
