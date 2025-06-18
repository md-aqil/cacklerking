
document.addEventListener("DOMContentLoaded", function () {
  const audio = document.querySelector(".background-music-container audio");
  const muteButton = document.querySelector(".mute-button");

  // Set initial audio state
  audio.volume = 0.3;
  audio.muted = true;
  audio.load();

  // Toggle mute/unmute on button click
  muteButton.addEventListener("click", async () => {
    try {
      if (audio.paused) {
        await audio.play();
      }
      audio.muted = !audio.muted;
      updateButtonIcon();
    } catch (e) {
      console.error("Music play failed:", e);
    }
  });

  // Optional: Change SVG icon based on mute state
  function updateButtonIcon() {
    const svg = muteButton.querySelector("svg path");
    if (!svg) return;

    // Mute Icon
    const mutePath = "M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0";

    // Unmute Icon (example — simple speaker icon)
    const unmutePath = "M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5";

    svg.setAttribute("d", audio.muted ? mutePath : unmutePath);
  }

  updateButtonIcon(); // Initial icon set
});

document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".questionAndAnswer .question");

  questions.forEach((question, index) => {
    question.addEventListener("click", () => {
      const allWrappers = document.querySelectorAll(".questionAndAnswer .wrapper");
      const currentWrapper = question.nextElementSibling;

      allWrappers.forEach(wrapper => {
        wrapper.classList.remove("is-open");
      });

      currentWrapper.classList.add("is-open");
    });
  });
});
