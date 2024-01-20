import getNewAnimationDuration from '../utils/update-marquee-animation';

function updateContactMarqueeAnimation() {
  const marquee = document.querySelector('.contact__marquee');
  const marqueeText = document.querySelectorAll('.marquee-text--contact');
  const marqueeTextAlt = document.querySelectorAll('.marquee-text--contact-alt');
  marqueeText.forEach((marqueeTxt) => {
    marqueeTxt.style.animationDuration = getNewAnimationDuration(
      marquee,
      marqueeTxt, 70
    );
  })

  marqueeTextAlt.forEach((marqueeTxt) => {
    marqueeTxt.style.animationDuration = getNewAnimationDuration(
      marquee,
      marqueeTxt, 120
    );
  })
}

updateContactMarqueeAnimation();
window.addEventListener('resize', updateContactMarqueeAnimation); // initial render
