let count = 0;
let audio1 = new Audio("Music1.mp3");
let audio2 = new Audio("Music2.mp3");

function increment() {
  count++;
  document.getElementById("counter").textContent = "Поставлено бомжей на счетчик: " + count;
}

function playMusic1() {
  audio2.pause();
  audio1.currentTime = 0;
  audio1.play().catch(e => console.log("Ошибка при воспроизведении Music1:", e));
}

function playMusic2() {
  audio1.pause();
  audio2.currentTime = 0;
  audio2.play().catch(e => console.log("Ошибка при воспроизведении Music2:", e));
}