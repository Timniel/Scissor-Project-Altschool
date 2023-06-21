document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [0, 0.1],
  };

  const animateOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        entry.target.classList.add("in-view");
      } else {
        entry.target.style.animationPlayState = "paused";
        entry.target.classList.remove("in-view");
      }
    });
  };

  const observer = new IntersectionObserver(animateOnScroll, observerOptions);

  const elementsToAnimate = document.querySelectorAll(".scroll-animation");

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
});
