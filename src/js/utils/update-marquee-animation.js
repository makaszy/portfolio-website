function getNewAnimationDuration(marquee, marqueeText, speed = 70 ) {
  const marqueeWidth = marquee.offsetWidth;
  const textWidth = marqueeText.offsetWidth;

  // Calculate the duration
  const duration = (marqueeWidth + textWidth) / speed;

  // Apply the duration to the animation
  const newAnimationDuration = `${duration}s`;
  return newAnimationDuration;
}

export default getNewAnimationDuration;
