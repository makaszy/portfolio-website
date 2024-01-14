import getNewAnimationDuration from "../utils/update-marquee-animation";


function updateMarqueeAnimation() {
  const marquee = document.querySelector('.projects__marquee');
  const marqueeText = document.querySelector('.marquee-text--projects');
  marqueeText.style.animationDuration = getNewAnimationDuration(marquee, marqueeText);
}

updateMarqueeAnimation(); // initial render

window.addEventListener('resize', updateMarqueeAnimation);

