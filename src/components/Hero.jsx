import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Badge } from './ui/Badge';
import Mascot from './Mascot';
import './Hero.css';

export function Hero() {
  const [heroRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for parallax
  const springConfig = { stiffness: 50, damping: 20 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Transform mouse position to parallax offsets
  const shape1X = useTransform(smoothMouseX, [0, 1], [-20, 20]);
  const shape1Y = useTransform(smoothMouseY, [0, 1], [-20, 20]);
  const shape2X = useTransform(smoothMouseX, [0, 1], [15, -15]);
  const shape2Y = useTransform(smoothMouseY, [0, 1], [15, -15]);
  const shape3X = useTransform(smoothMouseX, [0, 1], [-10, 10]);
  const shape3Y = useTransform(smoothMouseY, [0, 1], [10, -10]);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToContent = () => {
    const schedule = document.getElementById('schedule');
    if (schedule) {
      schedule.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Count-up animation for stats
  const [counts, setCounts] = useState({ protein: 0, calories: 0, meals: 0 });

  useEffect(() => {
    if (isVisible) {
      // Animate protein count
      const proteinInterval = setInterval(() => {
        setCounts(prev => ({
          ...prev,
          protein: prev.protein < 120 ? prev.protein + 4 : 120
        }));
      }, 30);

      // Animate calories count
      const caloriesInterval = setInterval(() => {
        setCounts(prev => ({
          ...prev,
          calories: prev.calories < 2600 ? prev.calories + 100 : 2600
        }));
      }, 30);

      // Animate meals count
      const mealsInterval = setInterval(() => {
        setCounts(prev => ({
          ...prev,
          meals: prev.meals < 3 ? prev.meals + 1 : 3
        }));
      }, 200);

      return () => {
        clearInterval(proteinInterval);
        clearInterval(caloriesInterval);
        clearInterval(mealsInterval);
      };
    }
  }, [isVisible]);

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-layout">
          <div
            ref={heroRef}
            className={`hero-content ${isVisible ? 'visible' : ''}`}
          >
            <Badge variant="primary" size="lg">
              Simple & Effective
            </Badge>

            <h1 className="hero-title">
              High-Protein<br />
              Meal Prep<br />
              <span className="hero-title-accent">Made Simple.</span>
            </h1>

            <p className="hero-subtitle">
              A complete guide to building muscle with easy, delicious meals.
              120g+ protein daily without the complexity.
            </p>

            <div className="hero-stats">
              <motion.div
                className="hero-stat"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <span className="hero-stat-number">{counts.protein}g+</span>
                <span className="hero-stat-label">Daily Protein</span>
              </motion.div>
              <div className="hero-stat-divider" />
              <motion.div
                className="hero-stat"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <span className="hero-stat-number">{counts.calories.toLocaleString()}</span>
                <span className="hero-stat-label">Calories</span>
              </motion.div>
              <div className="hero-stat-divider" />
              <motion.div
                className="hero-stat"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <span className="hero-stat-number">{counts.meals}</span>
                <span className="hero-stat-label">Meals + Snacks</span>
              </motion.div>
            </div>

            <motion.button
              className="hero-scroll"
              onClick={scrollToContent}
              aria-label="Scroll to content"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hero-scroll-text">Explore</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </motion.button>
          </div>

          {/* Mascot */}
          <motion.div
            className="hero-mascot"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={isVisible ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          >
            <Mascot pose="hero" size={280} animate={true} />
          </motion.div>
        </div>
      </div>

      {/* Parallax background shapes */}
      <div className="hero-bg-shapes">
        <motion.div
          className="hero-shape hero-shape-1"
          style={{ x: shape1X, y: shape1Y }}
        />
        <motion.div
          className="hero-shape hero-shape-2"
          style={{ x: shape2X, y: shape2Y }}
        />
        <motion.div
          className="hero-shape hero-shape-3"
          style={{ x: shape3X, y: shape3Y }}
        />
      </div>
    </section>
  );
}
