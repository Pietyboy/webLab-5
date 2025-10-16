import { DateTime } from 'luxon';

// Нужный формат: dd.LL.y HH:mm:ss
const FORMAT = "dd.LL.y HH:mm:ss";

const el = document.getElementById("clock") as HTMLHeadingElement;

function tick() {
  // Локальное время; если хотите конкретную зону, добавьте .setZone('Europe/Moscow') и т.п.
  const now = DateTime.now();
  el.textContent = now.toFormat(FORMAT);
}

// Первый рендер сразу, затем — каждую секунду
tick();
setInterval(tick, 1000);