import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { shoppingLists } from '../data/mealData';
import Mascot from './Mascot';
import './ShoppingList.css';

const categories = [
  { id: 'freezer', label: 'Freezer', icon: '🧊' },
  { id: 'fridge', label: 'Fridge', icon: '🥛' },
  { id: 'pantry', label: 'Pantry', icon: '🥫' }
];

// Swipeable item component
function SwipeableItem({ item, isChecked, onToggle, index }) {
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ['rgba(232, 123, 53, 0.2)', 'transparent', 'rgba(74, 124, 89, 0.3)']
  );
  const checkOpacity = useTransform(x, [0, 60], [0, 1]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x > 60) {
      // Swipe right - check item
      if (!isChecked) onToggle();
    } else if (info.offset.x < -60) {
      // Swipe left - uncheck item
      if (isChecked) onToggle();
    }
  };

  return (
    <motion.li
      className={`shopping-item ${isChecked ? 'shopping-item-checked' : ''}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20, height: 0 }}
      transition={{ delay: index * 0.03, type: "spring", stiffness: 300, damping: 25 }}
      layout
    >
      <motion.div
        className="shopping-item-bg"
        style={{ background }}
      />
      <motion.div
        className="swipe-check-indicator"
        style={{ opacity: checkOpacity }}
      >
        ✓
      </motion.div>
      <motion.div
        className="shopping-item-content"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.3}
        style={{ x }}
        onDragEnd={handleDragEnd}
        whileTap={{ cursor: 'grabbing' }}
      >
        <label className="shopping-checkbox">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={onToggle}
          />
          <motion.span
            className="checkbox-custom"
            animate={isChecked ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.2 }}
          />
          <span className="checkbox-label">{item}</span>
        </label>
      </motion.div>
    </motion.li>
  );
}

export function ShoppingList() {
  const [activeCategory, setActiveCategory] = useState('freezer');
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [titleRef, titleVisible] = useScrollAnimation();

  const toggleItem = (item) => {
    setCheckedItems(prev => {
      const next = new Set(prev);
      if (next.has(item)) {
        next.delete(item);
      } else {
        next.add(item);
      }
      return next;
    });
  };

  const clearChecked = () => {
    setCheckedItems(new Set());
  };

  const currentList = shoppingLists[activeCategory];
  const checkedCount = Array.from(checkedItems).filter(item =>
    currentList.items.includes(item)
  ).length;

  return (
    <section className="shopping section" id="shopping">
      <div className="container">
        <div
          ref={titleRef}
          className={`shopping-header fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <motion.div
            className="shopping-mascot"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Mascot pose="shopping" size={120} />
          </motion.div>
          <Badge variant="secondary" size="lg">Weekly Shopping</Badge>
          <h2 className="heading-2">Shopping Lists</h2>
          <p className="text-large text-muted">
            Everything you need for a week of high-protein meals
          </p>
        </div>

        <div className="shopping-tabs">
          {categories.map((cat, index) => (
            <motion.button
              key={cat.id}
              className={`shopping-tab ${activeCategory === cat.id ? 'shopping-tab-active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="shopping-tab-icon">{cat.icon}</span>
              <span className="shopping-tab-label">{cat.label}</span>
              {activeCategory === cat.id && (
                <motion.div
                  className="tab-indicator"
                  layoutId="tab-indicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <Card variant="default" padding="xl" className="shopping-card">
          <div className="shopping-card-header">
            <div className="shopping-card-info">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3>{currentList.title}</h3>
                  <p className="text-muted">{currentList.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="shopping-card-progress">
              <motion.span
                className="progress-text"
                key={checkedCount}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
              >
                {checkedCount} / {currentList.items.length}
              </motion.span>
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${(checkedCount / currentList.items.length) * 100}%` }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                />
              </div>
            </div>
          </div>

          <p className="swipe-hint">Swipe right to check items</p>

          <ul className="shopping-items">
            <AnimatePresence mode="popLayout">
              {currentList.items.map((item, index) => (
                <SwipeableItem
                  key={`${activeCategory}-${item}`}
                  item={item}
                  isChecked={checkedItems.has(item)}
                  onToggle={() => toggleItem(item)}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </ul>

          <AnimatePresence>
            {checkedCount > 0 && (
              <motion.div
                className="shopping-actions"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <Button variant="ghost" size="sm" onClick={clearChecked}>
                  Clear checked items
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </div>
    </section>
  );
}
