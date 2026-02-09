const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const status = document.getElementById("status");
const mainGif = document.getElementById("mainGif");
const options = document.querySelectorAll(".chip input");

const noMessages = [
  "misclick",
  "you are clicking the wrong thing",
  "wrong option",
  "you might fail this test ahh",
  "you hate me na ata",
  "thats the no btw",
  "Ok",
  "but im the goat"
];

let noCount = 0;
let yesScale = 1;

/* Change GIF when option is selected */
options.forEach(option => {
  option.addEventListener("change", () => {
    mainGif.src = option.dataset.gif;
  });
});

/* NO button behavior */
noBtn.addEventListener("click", () => {
  status.textContent = noMessages[noCount % noMessages.length];
  noCount++;

  yesScale = Math.min(yesScale + 0.15, 1.8);
  yesBtn.style.transform = `scale(${yesScale})`;
});

/* YES button behavior */
yesBtn.addEventListener("click", () => {
  const selected = document.querySelector(".chip input:checked");
  const selectedText = selected.nextElementSibling.textContent;
  const selectedGif = selected.dataset.gif;

  localStorage.setItem("valentinePlan", selectedText);
  localStorage.setItem("valentineGif", selectedGif);

  window.location.href = "yes_page.html";
});