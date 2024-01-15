function getNewAnimationDuration(marquee, marqueeText) {
  const marqueeWidth = marquee.offsetWidth;
  const textWidth = marqueeText.offsetWidth;

  // Speed factor (pixels per second)
  const speed = 70;

  // Calculate the duration
  const duration = (marqueeWidth + textWidth) / speed;

  // Apply the duration to the animation
  const newAnimationDuration = `${duration}s`;
  return newAnimationDuration;
}

export default getNewAnimationDuration;
