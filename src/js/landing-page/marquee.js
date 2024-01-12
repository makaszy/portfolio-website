
function updateMarqueeAnimation() {
  const marquee = document.querySelector('.landing-page__marquee');
  const marqueeText = document.querySelector('.marquee-text');

  const marqueeWidth = marquee.offsetWidth;
  const textWidth = marqueeText.offsetWidth;

  // Speed factor (pixels per second)
  const speed = 70;

  // Calculate the duration
  const duration = (marqueeWidth + textWidth) / speed;

  // Apply the duration to the animation
  marqueeText.style.animationDuration = `${duration}s`;
}

updateMarqueeAnimation();
// Run the function on load

window.addEventListener('resize', updateMarqueeAnimation);

