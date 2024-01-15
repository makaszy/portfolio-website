import getNewAnimationDuration from '../utils/update-marquee-animation';

function updateMarqueeAnimation() {
  const marquee = document.querySelector('.projects__marquee');
  const marqueeText = document.querySelector('.marquee-text--projects');
  marqueeText.style.animationDuration = getNewAnimationDuration(
    marquee,
    marqueeText,
  );
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
const altHiddenElements = document.querySelectorAll('.hidden--alt');
hiddenElements.forEach((el) => observer.observe(el));
altHiddenElements.forEach((el) => observer.observe(el));

updateMarqueeAnimation(); // initial render

window.addEventListener('resize', updateMarqueeAnimation);
