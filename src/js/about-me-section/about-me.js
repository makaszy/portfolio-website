import getNewAnimationDuration from '../utils/update-marquee-animation';

function updateMarqueeAnimation() {
  const marquee = document.querySelector('.about__marquee');
  const marqueeText = document.querySelector('.marquee-text--about');
  marqueeText.style.animationDuration = getNewAnimationDuration(
    marquee,
    marqueeText,
  );
}
updateMarqueeAnimation(); // initial render

window.addEventListener('resize', updateMarqueeAnimation);
