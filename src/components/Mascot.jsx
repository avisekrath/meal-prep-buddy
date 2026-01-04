import { motion } from 'motion/react';

// MealPrepBuddy - A friendly meal prep container mascot
// Uses PNG images for different poses

import mascot1 from '../assets/mascot1.png'; // Holding clipboard with weekly plan
import mascot2 from '../assets/mascot2.png'; // With stopwatch and food (energetic)
import mascot3 from '../assets/mascot3.png'; // With glasses and protein chart (smart)
import mascot4 from '../assets/mascot4.png'; // Standing confident
import mascot5 from '../assets/mascot5.png'; // With smoothie and snacks
import mascot6 from '../assets/mascot6.png'; // Lid open, pointing (excited)
import mascot7 from '../assets/mascot7.png'; // Sitting with clipboard (relaxed)
import mascot8 from '../assets/mascot8.png'; // Meditating/zen pose

const poses = {
  // Main poses
  hero: mascot2,           // Hero section - energetic with stopwatch
  weeklyMenu: mascot1,     // Weekly Menu - holding clipboard
  mealIdeas: mascot5,      // Meal Ideas - with smoothie
  shopping: mascot7,       // Shopping List - sitting with checklist
  protein: mascot3,        // Protein Reference - smart with chart
  tips: mascot6,           // Tips section - excited pointing
  prep: mascot4,           // Meal Prep - confident standing
  zen: mascot8,            // Calm/relaxed states

  // Aliases for backwards compatibility
  waving: mascot2,
  cooking: mascot5,
  thumbsUp: mascot6,
  presenting: mascot1,
  confused: mascot3,
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
      alt="MealPrepBuddy mascot"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
      {...breathingAnimation}
    />
  );
};

export default Mascot;
