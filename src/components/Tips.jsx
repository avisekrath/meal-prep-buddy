import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import Mascot from './Mascot';
import { tips } from '../data/mealData';
import './Tips.css';

export function Tips() {
  const [titleRef, titleVisible] = useScrollAnimation();

  return (
    <section className="tips section" id="tips">
      <div className="container">
        <div
          ref={titleRef}
          className={`tips-header fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <div className="tips-mascot">
            <Mascot pose="tips" size={120} />
          </div>
          <Badge variant="primary" size="lg">Pro Tips</Badge>
          <h2 className="heading-2">Meal Prep Success Tips</h2>
          <p className="text-large text-muted">
            Maximize your results with these proven strategies
          </p>
        </div>

        <div className="tips-grid">
          {tips.map((tip, index) => (
            <Card
              key={index}
              padding="lg"
              hover
              className={`tip-card fade-in stagger-${Math.min(index + 1, 5)} ${titleVisible ? 'visible' : ''}`}
            >
              <div className="tip-number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="tip-title">{tip.title}</h3>
              <p className="tip-description">{tip.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
