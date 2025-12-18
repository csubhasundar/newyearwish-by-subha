const messageText = `May the New Year bring you happiness, good health,
new opportunities, and countless beautiful moments.

May every day of this year be filled with hope,
success, and positive energy.`;

function openCard() {
  const name = document.getElementById("name").value || "Dear Friend";
  document.getElementById("toName").innerText = `Dear ${name},`;

  document.getElementById("inputBox").style.display = "none";
  document.getElementById("card").style.display = "block";

  setTimeout(() => {
    document.getElementById("card").classList.add("open");
    typeWriter();
    startButterflies();
  }, 500);
}

/* Typewriter Effect */
let index = 0;
function typeWriter() {
  if (index < messageText.length) {
    document.getElementById("animatedMsg").innerHTML +=
      messageText.charAt(index);
    index++;
    setTimeout(typeWriter, 40);
  }
}

/* Butterflies */
function startButterflies() {
  setInterval(() => {
    const b = document.createElement("div");
    b.className = "butterfly";
    b.innerText = "🦋";
    b.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(b);

    setTimeout(() => b.remove(), 7000);
  }, 1000);
}
