const PLAYFUL_TEXTS = [
  "Wait, did you misclick? 😮",
  "Are you sure? 🧐",
  "My heart... it's fragile! 🥺",
  "Catch me if you can! 🏃‍♂️💨",
  "Really sure? 🤨",
  "Are you playing hard to get? 😏",
  "I’m calling the Love Police! 🚔❤️",
  "Error: 'No' is not an option! 🚫",
  "You're breaking the internet! 💻💔",
  "Preeti... please? 🥺",
  "I can do this all day! 🦸‍♂️",
  "I’m gonna cry... 😭 ",
  "Probability of 'No' dropping to 0%... 📉",
  "Even the button is confused! 🤖❓",
  "I'll give you a cookie if you say yes! 🍪"
];

const ROMANTIC_MESSAGE = `
To my dearest Preeti,

They say home is a place, but with you, I've realized home is a person. 
Every laugh we share and every quiet moment together is a treasure I hold close.

You aren’t just my love; you’re my best friend and my favorite adventure. 
Thank you for being the beautiful soul you are.

I love you more than all the stars in the sky. ❤️
Always & Forever. 💕
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

