import getNewAnimationDuration from '../utils/update-marquee-animation';
import createObserver from '../utils/create-observer';

function updateContactMarqueeAnimation() {
  const marquee = document.querySelector('.contact__marquee');
  const marqueeText = document.querySelectorAll('.marquee-text--contact');
  const marqueeTextAlt = document.querySelectorAll(
    '.marquee-text--contact-alt',
  );
  marqueeText.forEach((marqueeTxt) => {
    // eslint-disable-next-line no-param-reassign
    marqueeTxt.style.animationDuration = getNewAnimationDuration(
      marquee,
      marqueeTxt,
      70,
    );
  });

  marqueeTextAlt.forEach((marqueeTxt) => {
    // eslint-disable-next-line no-param-reassign
    marqueeTxt.style.animationDuration = getNewAnimationDuration(
      marquee,
      marqueeTxt,
      120,
    );
  });
}

updateContactMarqueeAnimation();
window.addEventListener('resize', updateContactMarqueeAnimation); // initial render

const observerContact = createObserver('show--contact-info');
const contactInfo = document.querySelector('.contact__info');
observerContact.observe(contactInfo);

// handling contact icons

function openEmail() {
  window.location.href = 'mailto:example@example.com';
}

function handleContactIcon(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    openEmail();
  }
}

const contactIcons = document.querySelector('.info-icon--email');

contactIcons.addEventListener('click', handleContactIcon);

contactIcons.addEventListener('keydown', handleContactIcon);
