import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { mealOptions } from '../data/mealData';
import Mascot from './Mascot';
import './MealIdeas.css';

const categories = ['breakfast', 'lunch', 'dinner', 'snacks'];
const categoryLabels = {
  breakfast: 'Breakfast',
  lunch: 'Lunch',
  dinner: 'Dinner',
  snacks: 'Snacks'
};

// Spring animation config
const springConfig = {
  type: "spring",
  stiffness: 300,
  damping: 25
};

export function MealIdeas({ onShare }) {
  const [selectedMeals, setSelectedMeals] = useState({
    breakfast: null,
    lunch: null,
    dinner: null,
    snacks: null
  });
  const [sidebarDismissed, setSidebarDismissed] = useState(false);
  const [titleRef, titleVisible] = useScrollAnimation();

  const toggleMeal = (category, meal) => {
    setSelectedMeals(prev => ({
      ...prev,
      [category]: prev[category]?.name === meal.name ? null : meal
    }));
  };

  const totals = useMemo(() => {
    let calories = 0;
    let protein = 0;
    Object.values(selectedMeals).forEach(meal => {
      if (meal) {
        calories += meal.calories;
        protein += meal.protein;
      }
    });
    return { calories, protein };
  }, [selectedMeals]);

  const hasSelections = Object.values(selectedMeals).some(m => m !== null);

  const getSelectedMenuText = () => {
    const lines = ['🍽️ My Selected Menu\n'];
    categories.forEach(cat => {
      const meal = selectedMeals[cat];
      if (meal) {
        lines.push(`${categoryLabels[cat]}: ${meal.name} (${meal.calories} cal, ${meal.protein}g protein)`);
      }
    });
    lines.push(`\n📊 Total: ${totals.calories} cal | ${totals.protein}g protein`);
    lines.push('\n🔗 Build your own: mealprepbuddy.app');
    return lines.join('\n');
  };

  const getShoppingListText = () => {
    const ingredients = new Set();
    Object.values(selectedMeals).forEach(meal => {
      if (meal?.ingredients) {
        meal.ingredients.forEach(i => ingredients.add(i));
      }
    });
    return `🛒 Shopping List\n\n${Array.from(ingredients).map(i => `• ${i}`).join('\n')}\n\n🔗 Build your own: mealprepbuddy.app`;
  };

  const handleDownloadMenu = () => {
    const text = getSelectedMenuText();
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-meal-menu.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadShopping = () => {
    const text = getShoppingListText();
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'shopping-list.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = () => {
    const menuText = getSelectedMenuText();
    const shoppingText = getShoppingListText();
    onShare?.({
      type: 'selection',
      title: 'My Meal Selection',
      menu: menuText,
      shopping: shoppingText
    });
  };

  return (
    <section className="mealideas section" id="ideas">
      <div className="container">
        <div
          ref={titleRef}
          className={`mealideas-header fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <motion.div
            className="mealideas-mascot"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Mascot pose="mealIdeas" size={120} />
          </motion.div>
          <Badge variant="primary" size="lg">Mix & Match</Badge>
          <h2 className="heading-2">Meal Ideas</h2>
          <p className="text-large text-muted">
            Select meals to build your perfect day
          </p>
        </div>

        <div className="mealideas-layout">
          <div className="mealideas-categories">
            {categories.map((category, catIndex) => (
              <motion.div
                key={category}
                className="mealideas-category"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h3 className="mealideas-category-title">
                  {categoryLabels[category]}
                </h3>
                <div className="mealideas-options">
                  {mealOptions[category].map((meal, mealIndex) => {
                    const isSelected = selectedMeals[category]?.name === meal.name;
                    return (
                      <motion.div
                        key={meal.name}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          ...springConfig,
                          delay: catIndex * 0.05 + mealIndex * 0.03
                        }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        dragElastic={0.1}
                        onTap={() => toggleMeal(category, meal)}
                        className={`meal-option-wrapper ${isSelected ? 'meal-option-wrapper-selected' : ''}`}
                      >
                        <Card
                          padding="md"
                          className={`meal-option ${isSelected ? 'meal-option-selected' : ''}`}
                        >
                          <div className="meal-option-header">
                            <span className="meal-option-name">{meal.name}</span>
                            <AnimatePresence>
                              {isSelected && (
                                <motion.span
                                  className="meal-option-check"
                                  initial={{ scale: 0, rotate: -180 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  exit={{ scale: 0, rotate: 180 }}
                                  transition={springConfig}
                                >
                                  ✓
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </div>
                          <div className="meal-option-macros">
                            <span>{meal.calories} cal</span>
                            <span>{meal.protein}g protein</span>
                          </div>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {hasSelections && !sidebarDismissed && (
          <motion.div
            className="mealideas-sidebar mealideas-sidebar-active"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 50) {
                setSidebarDismissed(true);
              }
            }}
          >
            <div className="sidebar-drag-handle" />
            <Card variant="primary" padding="lg" className="mealideas-totals">
              <h4 className="sidebar-title">Your Selection</h4>

              <div className="sidebar-stats">
                <div className="sidebar-stat">
                  <motion.span
                    className="sidebar-stat-number"
                    key={totals.calories}
                    initial={{ scale: 1.2, color: '#E87B35' }}
                    animate={{ scale: 1, color: '#1A1918' }}
                    transition={{ duration: 0.3 }}
                  >
                    {totals.calories}
                  </motion.span>
                  <span className="sidebar-stat-label">Calories</span>
                </div>
                <div className="sidebar-stat">
                  <motion.span
                    className="sidebar-stat-number"
                    key={totals.protein}
                    initial={{ scale: 1.2, color: '#4A7C59' }}
                    animate={{ scale: 1, color: '#1A1918' }}
                    transition={{ duration: 0.3 }}
                  >
                    {totals.protein}g
                  </motion.span>
                  <span className="sidebar-stat-label">Protein</span>
                </div>
              </div>

              <div className="sidebar-selected">
                {categories.map(cat => (
                  <div key={cat} className="sidebar-meal">
                    <span className="sidebar-meal-cat">{categoryLabels[cat]}</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={selectedMeals[cat]?.name || 'empty'}
                        className="sidebar-meal-name"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {selectedMeals[cat]?.name || '—'}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="sidebar-actions">
                <Button
                  variant="dark"
                  size="sm"
                  onClick={handleDownloadMenu}
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  }
                >
                  Menu
                </Button>
                <Button
                  variant="dark"
                  size="sm"
                  onClick={handleDownloadShopping}
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                  }
                >
                  List
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleShare}
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="3"/>
                      <circle cx="6" cy="12" r="3"/>
                      <circle cx="18" cy="19" r="3"/>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                  }
                >
                  Share
                </Button>
              </div>
            </Card>
          </motion.div>
            )}
          </AnimatePresence>

          {/* Floating button to restore sidebar when dismissed */}
          <AnimatePresence>
            {hasSelections && sidebarDismissed && (
              <motion.button
                className="sidebar-restore-btn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setSidebarDismissed(false)}
                whileTap={{ scale: 0.95 }}
              >
                <span>{totals.calories} cal</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="18 15 12 9 6 15"/>
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
