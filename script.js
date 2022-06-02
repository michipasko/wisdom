const wisdomOfTheWorld = [
  "Eine Katze ist auch nur ein Hund mit vier Beinen.",
  "Wenn du die Sonne am Himmel erblicken kannst, funktionieren deine Augen.",
  "Es ist ganz einfach, andere Menschen zu berühren - du musst sie nur mit deinem Finger antippen.",
  "Am Ende des Tages wird es dunkel.",
  "Alle müssen mal auf's Klo.",
  "Wenn mein Hund sagt, dass er kacken muss, dann lass ich ihn.",
  "Der Coach sagt: Vollgas!",
  "Red dir niemals ein, dass du Schuld bist. Es ist ganz sicher jemand anderes.",
  "Wenn man ganz genau hinsieht, kann man mit etwas Glück mehr erkennen.",
  "Runde Bälle haben keine Ecken.",
  "Wenn dir das Leben eine Zitrone gibt, dann sag: 'Behalt deinen Scheiß.'",
  "Rosen sind rot, Bananen sind krumm - du bist wirklich sehr sehr ... schlau.",
  "Dönerteller werden nur sehr selten in einem Brot serviert.",
  "Um Managern das Leben zu erleichtern, ist Kühen das Betreten von Eisflächen in Projekten grundsätzlich verboten.",
  "Ob es aus dem Wald so herauskommt, wie man hineingerufen hat, hängt davon ab, wie laut man ruft und wie groß der Wald ist.",
  "Die dümmsten Bauern haben den geringsten IQ.",
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
