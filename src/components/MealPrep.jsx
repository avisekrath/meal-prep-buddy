import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import Mascot from './Mascot';
import { prepSteps } from '../data/mealData';
import './MealPrep.css';

export function MealPrep() {
  const [titleRef, titleVisible] = useScrollAnimation();

  return (
    <section className="mealprep section section-dark" id="prep">
      <div className="container">
        <div
          ref={titleRef}
          className={`mealprep-header fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <div className="mealprep-mascot">
            <Mascot pose="prep" size={120} />
          </div>
          <Badge variant="primary" size="lg">Sunday Prep</Badge>
          <h2 className="heading-2">Meal Prep Steps</h2>
          <p className="text-large">
            Get your week sorted in just a few hours
          </p>
        </div>

        <div className="mealprep-timeline">
          {prepSteps.map((step, index) => (
            <div
              key={step.number}
              className={`mealprep-step fade-in stagger-${Math.min(index + 1, 5)} ${titleVisible ? 'visible' : ''}`}
            >
              <div className="mealprep-step-number">
                <span>{step.number}</span>
              </div>
              <Card variant="default" padding="lg" className="mealprep-step-card">
                <h3 className="mealprep-step-title">{step.title}</h3>
                <p className="mealprep-step-desc">{step.description}</p>
                {step.duration && (
                  <Badge variant="light" size="sm">{step.duration}</Badge>
                )}
              </Card>
            </div>
          ))}
        </div>

        <div className="mealprep-tip">
          <div className="mealprep-tip-icon">💡</div>
          <div className="mealprep-tip-content">
            <h4>Pro Tip</h4>
            <p>Start with chicken in the oven, then prep vegetables while it cooks. Use this time wisely!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
