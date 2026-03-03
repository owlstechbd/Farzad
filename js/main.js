const video = document.getElementById("myVideo");
  const playBtn = document.getElementById("playBtn");

  // Setup preview
  video.muted = true;
  video.play();

  video.addEventListener("timeupdate", function () {
    if (!video.controls && video.currentTime >= 3) {
      video.currentTime = 0;
      video.play(); // loop first 3 seconds
    }
  });

  // On click → full video
  playBtn.addEventListener("click", function () {
    video.pause();
    video.currentTime = 0;
    video.muted = false;
    video.controls = true;
    video.play();
    playBtn.style.display = "none";
  });

  

const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".faq-icon");

    question.addEventListener("click", () => {

      faqItems.forEach(faq => {
        const faqIcon = faq.querySelector(".faq-icon");

        if (faq !== item) {
          faq.classList.remove("active");
          faqIcon.src = "images/arow-down.png";
        }
      });

      const isActive = item.classList.contains("active");

      if (isActive) {
        item.classList.remove("active");
        icon.src = "images/arow-down.png";
      } else {
        item.classList.add("active");
        icon.src = "images/arow-up.png";
      }

    });
  });

//animated
AOS.init();


