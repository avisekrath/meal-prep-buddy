import { motion } from 'motion/react';

// MealPrepBuddy - A muscular chicken mascot
import muscularChicken from '../assets/ChatGPT Image Jan 31, 2026, 06_16_42 PM.png';

const poses = {
  // All poses now use the muscular chicken
  hero: muscularChicken,
  weeklyMenu: muscularChicken,
  mealIdeas: muscularChicken,
  shopping: muscularChicken,
  protein: muscularChicken,
  tips: muscularChicken,
  prep: muscularChicken,
  zen: muscularChicken,

  // Aliases for backwards compatibility
  waving: muscularChicken,
  cooking: muscularChicken,
  thumbsUp: muscularChicken,
  presenting: muscularChicken,
  confused: muscularChicken,
};

const Mascot = ({
  pose = 'hero',
  size = 200,
  animate = true,
  className = ''
}) => {
  const imageSrc = poses[pose] || poses.hero;

  const breathingAnimation = animate ? {
    animate: {
      y: [0, -5, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  } : {};

  return (
    <motion.img
      src={imageSrc}
      alt="Muscular chicken mascot"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
      {...breathingAnimation}
    />
  );
};

export default Mascot;
