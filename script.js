const wisdomOfTheWorld = [
  "Eine Katze ist auch nur ein Hund mit vier Beinen.",
  "Wenn du die Sonne am Himmel erblicken kannst, funktionieren deine Augen.",
  "Es ist ganz einfach, andere Menschen zu berühren - du musst sie nur mit deinem Finger antippen.",
  "Am Ende des Tages wird es dunkel.",
  "Alle müssen mal auf's Klo.",
];

const btnWisdom = document.getElementById("btn-wisedom");
const wisdomContainer = document.querySelector(".wisdom-container");
const wisdomText = document.getElementById("wisdom-text");
const memoji1 = document.getElementById("memoji-1");
const memoji2 = document.getElementById("memoji-2");

function selectWisdom() {
  const randomWisdom =
    wisdomOfTheWorld[Math.trunc(Math.random() * wisdomOfTheWorld.length)];
  wisdomText.textContent = randomWisdom;
}

btnWisdom.addEventListener("click", () => {
  memoji1.classList.toggle("hidden");
  wisdomContainer.classList.toggle("hidden");
  selectWisdom();
  console.log(btnWisdom.textContent);
  btnWisdom.textContent == "Erleuchte mich"
    ? (btnWisdom.textContent = "Danke")
    : (btnWisdom.textContent = "Erleuchte mich");
});
