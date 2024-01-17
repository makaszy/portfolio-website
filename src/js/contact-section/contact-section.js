import getNewAnimationDuration from '../utils/update-marquee-animation';

function updateContactMarqueeAnimation() {
  const marquee = document.querySelector('.contact__marquee');
  const marqueeText = document.querySelectorAll('.marquee-text--contact');
  marqueeText.forEach((marqueeTxt) => {
    marqueeTxt.style.animationDuration = getNewAnimationDuration(
      marquee,
      marqueeTxt, 520
    );
  })
}

updateContactMarqueeAnimation();
window.addEventListener('resize', updateContactMarqueeAnimation); // initial render
