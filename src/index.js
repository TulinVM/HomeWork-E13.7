import "./style1.css";
//Файл time.js
function displayTime() {
  let element = document.getElementById("clock"); // Найти элемент с id="clock"
  let element1 = document.getElementById("date");
  let now = new Date(); // Получить текущее время
  element.innerHTML = now.toLocaleTimeString(); // Отобразить время
  element1.innerHTML = now.toLocaleDateString();
  setTimeout(displayTime, 1000); // Вызывать функцию каждую секунду
}
window.onload = displayTime; // Начать отображение времени после загрузки документа

var element2 = document.getElementById("title_text");
var element3 = document.getElementById("text");

element2.innerText = "Это интересно.";
element3.innerText =
  "Самые интересные события в мире высоких технологий должны быть встречены шумом аплодисментов. То, что не поддается понимаю обывателя, с радостью предлагается инженерами-изобретателями. Именно они в ответе за то, что мы с замиранием сердца наблюдаем, как на рынок выходит любопытный гаджет, происходит революция в сфере высоких технологий или ожидается обновление линейки любимых продуктов. Технологии — это интересно. Интереснее, чем если бы их не было вовсе.";
