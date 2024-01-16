import getNewAnimationDuration from '../utils/update-marquee-animation';
import createObserver from '../utils/create-observer';

function updateMarqueeAnimation() {
  const marquee = document.querySelector('.projects__marquee');
  const marqueeText = document.querySelector('.marquee-text--projects');
  marqueeText.style.animationDuration = getNewAnimationDuration(
    marquee,
    marqueeText,
  );
}

const observer = createObserver('show');

const hiddenElements = document.querySelectorAll('.hidden');
const altHiddenElements = document.querySelectorAll('.hidden--alt');
hiddenElements.forEach((el) => observer.observe(el));
altHiddenElements.forEach((el) => observer.observe(el));

updateMarqueeAnimation(); // initial render

window.addEventListener('resize', updateMarqueeAnimation);
