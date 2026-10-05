const envelopeScreen = document.getElementById("envelopeScreen");
const surprisePage = document.getElementById("surprisePage");
const envelope = document.getElementById("envelope");
const intro = document.querySelector(".intro");
const openButton = document.getElementById("openButton");
const video = document.getElementById("surpriseVideo");
const videoFrame = document.querySelector(".video-frame");

function openLetter() {
  if (intro.classList.contains("open")) return;

  intro.classList.add("open");
  openButton.disabled = true;
  openButton.textContent = "Opening...";

  setTimeout(() => {
    envelopeScreen.style.display = "none";
    surprisePage.classList.add("show");
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 1300);
}

envelope.addEventListener("click", openLetter);
openButton.addEventListener("click", openLetter);

video.addEventListener("loadeddata", () => {
  videoFrame.classList.add("has-video");
});

video.addEventListener("error", () => {
  videoFrame.classList.remove("has-video");
});
