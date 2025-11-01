import './styles.scss';
import Modal from 'bootstrap/js/dist/modal';
import { DateTime } from 'luxon';

const FORMAT = 'dd.LL.y HH:mm:ss';

const modalElement = document.getElementById('timeModal');
const showTimeButton = document.getElementById('showTimeBtn');
const timeDisplay = document.getElementById('timeDisplay');

if (!(modalElement instanceof HTMLElement) || !(showTimeButton instanceof HTMLElement) || !(timeDisplay instanceof HTMLElement)) {
  throw new Error('Не удалось инициализировать элементы интерфейса.');
}

const modal = new Modal(modalElement);
let timerId: number | undefined;

const updateTime = () => {
  const now = DateTime.now().setLocale('ru');
  timeDisplay.textContent = now.toFormat(FORMAT);
};

showTimeButton.addEventListener('click', () => {
  updateTime();
  modal.show();
});

modalElement.addEventListener('show.bs.modal', () => {
  updateTime();
  timerId = window.setInterval(updateTime, 1000);
});

modalElement.addEventListener('hidden.bs.modal', () => {
  if (timerId !== undefined) {
    window.clearInterval(timerId);
    timerId = undefined;
  }
});
