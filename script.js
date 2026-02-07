const PLAYFUL_TEXTS = [
  "Thinking again? 😏",
  "Come on… you know the answer 💗",
  "Don’t break my heart 💔",
  "Getting closer… 😉",
  "Just say yes already! 😘",
  "You know you want to 💕"
];

const ROMANTIC_MESSAGE = `
Dear Preeti,

Every moment with you feels magical.
You make my world brighter and my heart happier.

I love you more than words can say ❤️
Forever yours 💕
`;

const proposalStage = document.getElementById("proposalStage");
const celebrationStage = document.getElementById("celebrationStage");
const messageStage = document.getElementById("messageStage");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const messageBtn = document.getElementById("messageBtn");
const backBtn = document.getElementById("backBtn");

const mainText = document.getElementById("mainText");
const heartsContainer = document.getElementById("floatingHeartsContainer");
const messageContent = document.getElementById("messageContent");

let noCount = 0;

/* HEARTS */
function popHearts(count = 12) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = 24 + Math.random() * 30 + "px";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}

/* NO BUTTON */
noBtn.addEventListener("click", () => {
  noCount++;
  mainText.textContent = PLAYFUL_TEXTS[noCount % PLAYFUL_TEXTS.length];

  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 150);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  popHearts(5);
});

/* YES BUTTON */
yesBtn.addEventListener("click", () => {
  proposalStage.style.display = "none";
  celebrationStage.style.display = "flex";
  popHearts(20);
});

/* MESSAGE */
messageBtn.addEventListener("click", () => {
  celebrationStage.style.display = "none";
  messageStage.style.display = "flex";
  messageContent.innerHTML = ROMANTIC_MESSAGE
    .split("\n")
    .map(line => `<p>${line}</p>`)
    .join("");
  popHearts(25);
});

/* BACK */
backBtn.addEventListener("click", () => {
  messageStage.style.display = "none";
  celebrationStage.style.display = "flex";
});
