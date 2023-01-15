let playButton = document.getElementById("play");

let nextButton = document.getElementById("next");

let revealButton = document.getElementById("reveal");

let textChord = document.getElementById("chordText");

let rndm = 0;

let lastRndm = 0;

let isRevealed = false;

const transcript = {
  1: "C Major",
  2: "C Minor",
  3: "C# Minor",
  4: "C# Major",
  5: "D Major",
  6: "D Minor",
  7: "D# Minor",
  8: "D# Major",
  9: "E Major",
  10: "E Minor",
  11: "F Major",
  12: "F Minor",
  13: "F# Minor",
  14: "F# Major",
  15: "G Major",
  16: "G Minor",
  17: "G# Minor",
  18: "G# Major",
  19: "A Major",
  20: "A Minor",
  21: "A# Minor",
  22: "A# Major",
  23: "B Major",
  24: "B Minor"
};

start();

playButton.addEventListener("click", () => {
  let chord = new Audio(`recordings/${rndm}.mp3`);

  chord.play();
});

nextButton.addEventListener("click", () => {
  rndm = Math.floor(Math.random() * 24 + 1);

  while (rndm === lastRndm) {
    rndm = Math.floor(Math.random() * 24 + 1);
  }

  let chord = new Audio(`recordings/${rndm}.mp3`);

  chord.play();

  lastRndm = rndm;

  textChord.textContent = "?";

  isRevealed = false;

  nextButton.style.display = "none";

  revealButton.style.display = "block";

  playButton.style.display = "block";
});

revealButton.addEventListener("click", () => {
  if (!isRevealed) {
    console.log(rndm);

    console.log(transcript[rndm]);

    textChord.textContent = transcript[rndm];

    isRevealed = true;

    new Audio(`recordings/${rndm}.mp3`).play();

    nextButton.style.display = "block";

    revealButton.style.display = "none";

    playButton.style.display = "none";
  }
});

function start() {
  rndm = Math.floor(Math.random() * 24 + 1);

  while (rndm === lastRndm) {
    rndm = Math.floor(Math.random() * 24 + 1);
  }

  lastRndm = rndm;

  textChord.textContent = "?";

  nextButton.style.display = "none";
}