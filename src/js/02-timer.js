import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  input: document.querySelector('#datetime-picker'),
  button: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.button.setAttribute('disabled', 'disabled');

flatpickr(refs.input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date();

    setInterval(() => {
      dateAction = selectedDates[0] - new Date();
    }, 1000);

    if (date > selectedDates[0]) {
      refs.button.setAttribute('disabled', 'disabled');
      Notify.failure('Please choose a date in the future');
      return;
    }

    refs.button.removeAttribute('disabled', 'disabled');
    refs.button.addEventListener('click', onDateActionClick);
    function onDateActionClick() {
      setInterval(() => {
        if (dateAction < 0) {
          return;
        }

        const array = convertMs(dateAction);

        refs.button.setAttribute('disabled', 'disabled');
        refs.days.textContent = addLeadingZero(array.days);
        refs.hours.textContent = addLeadingZero(array.hours);
        refs.minutes.textContent = addLeadingZero(array.minutes);
        refs.seconds.textContent = addLeadingZero(array.seconds);
      }, 1000);
    }
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  if (value < 10) {
    return JSON.stringify(value).padStart(2, '0');
  }
  return value;
}
