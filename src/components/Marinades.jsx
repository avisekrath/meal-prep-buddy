import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { marinades } from '../data/mealData';
import './Marinades.css';

export function Marinades() {
  const [titleRef, titleVisible] = useScrollAnimation();

  return (
    <section className="marinades section" id="marinades">
      <div className="container">
        <div
          ref={titleRef}
          className={`marinades-header fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <Badge variant="secondary" size="lg">Flavor Boosters</Badge>
          <h2 className="heading-2">Signature Marinades</h2>
          <p className="text-large text-muted">
            Turn bland chicken into delicious meals with these easy marinades
          </p>
        </div>

        <div className="marinades-grid">
          {marinades.map((marinade, index) => (
            <Card
              key={marinade.id}
              padding="lg"
              hover
              className={`marinade-card fade-in stagger-${Math.min(index + 1, 5)} ${titleVisible ? 'visible' : ''}`}
              style={{ '--accent-color': marinade.color }}
            >
              <div className="marinade-accent" />
              <h3 className="marinade-name">{marinade.name}</h3>
              <ul className="marinade-ingredients">
                {marinade.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              {marinade.link && (
                <Button
                  variant="outline"
                  size="sm"
                  pill
                  onClick={() => window.open(marinade.link, '_blank')}
                >
                  View Recipe
                </Button>
              )}
            </Card>
          ))}
        </div>

        <div className="marinades-tip">
          <p>
            <strong>Marinating Time:</strong> 2-24 hours in the fridge.
            Longer = more flavor!
          </p>
        </div>
      </div>
    </section>
  );
}
