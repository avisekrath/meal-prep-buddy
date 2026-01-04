import { useRef } from 'react';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { dayData } from '../data/mealData';
import Mascot from './Mascot';
import html2canvas from 'html2canvas';
import './WeeklyMenu.css';

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export function WeeklyMenu({ onShare }) {
  const [titleRef, titleVisible] = useScrollAnimation();
  const cardRefs = useRef({});

  const downloadDayAsPNG = async (dayId) => {
    const card = cardRefs.current[dayId];
    if (!card) return;

    try {
      const canvas = await html2canvas(card, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
      });

      const link = document.createElement('a');
      link.download = `${dayData[dayId].name.toLowerCase()}-menu.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error generating PNG:', error);
    }
  };

  const getDayShoppingList = (dayId) => {
    const day = dayData[dayId];
    return day.shopping.map(item => `• ${item}`).join('\n');
  };

  const downloadShoppingList = (dayId) => {
    const day = dayData[dayId];
    const text = `🛒 Shopping List for ${day.name}\n\n${getDayShoppingList(dayId)}\n\n🔗 Get the full plan: mealprepbuddy.app`;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${day.name.toLowerCase()}-shopping.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = (dayId) => {
    const day = dayData[dayId];
    const mealsText = day.meals.map(m => `${m.emoji} ${m.name}: ${m.desc}`).join('\n');
    const menuText = `${day.emoji} ${day.name}'s Menu\n${day.tagline}\n\n${mealsText}\n\n📊 ${day.calories} cal | ${day.protein} protein\n\n🔗 Get the full plan: mealprepbuddy.app`;
    onShare?.({
      type: 'day',
      title: `${day.name}'s Menu`,
      text: menuText,
      day: dayId
    });
  };

  return (
    <section className="weekly section section-dark" id="menu">
      <div className="container">
        <div
          ref={titleRef}
          className={`weekly-header fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <Badge variant="primary" size="lg">Full Week</Badge>
          <h2 className="heading-2">Your Weekly Menu</h2>
          <p className="text-large">
            7 days of high-protein meals, ready to go
          </p>
          <motion.div
            className="weekly-mascot"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Mascot pose="weeklyMenu" size={140} />
          </motion.div>
        </div>

        <div className="weekly-grid">
          {days.map((dayId, index) => {
            const day = dayData[dayId];
            return (
              <motion.div
                key={dayId}
                className={`day-card-wrapper ${titleVisible ? 'visible' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Card padding="lg" className="day-card">
                  <div ref={el => cardRefs.current[dayId] = el} className="day-card-content">
                    <div className="day-card-header">
                      <div className="day-title-group">
                        <span className="day-emoji">{day.emoji}</span>
                        <div>
                          <h3 className="day-name">{day.name}</h3>
                          <span className="day-tagline">{day.tagline}</span>
                        </div>
                      </div>
                      <div className="day-macros">
                        <Badge variant="light" size="sm">{day.calories} cal</Badge>
                        <Badge variant="accent" size="sm">{day.protein}</Badge>
                      </div>
                    </div>

                    <ul className="day-meals">
                      {day.meals.map((meal, i) => (
                        <li key={i} className="day-meal-item">
                          <span className="meal-emoji">{meal.emoji}</span>
                          <div className="meal-info">
                            <span className="meal-name">{meal.name}</span>
                            <span className="meal-desc">{meal.desc}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="day-card-actions">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => downloadDayAsPNG(dayId)}
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                          <circle cx="8.5" cy="8.5" r="1.5"/>
                          <polyline points="21 15 16 10 5 21"/>
                        </svg>
                      }
                    >
                      <span className="btn-text">Save</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => downloadShoppingList(dayId)}
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                          <line x1="3" y1="6" x2="21" y2="6"/>
                          <path d="M16 10a4 4 0 0 1-8 0"/>
                        </svg>
                      }
                    >
                      <span className="btn-text">List</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare(dayId)}
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
                      <span className="btn-text">Share</span>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
