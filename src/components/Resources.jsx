import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { resources } from '../data/mealData';
import './Resources.css';

export function Resources() {
  const [titleRef, titleVisible] = useScrollAnimation();

  return (
    <section className="resources section" id="resources">
      <div className="container">
        <div
          ref={titleRef}
          className={`resources-header fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <Badge variant="secondary" size="lg">Learn More</Badge>
          <h2 className="heading-2">Helpful Resources</h2>
          <p className="text-large text-muted">
            Tools and guides to support your fitness journey
          </p>
        </div>

        <div className="resources-grid">
          {resources.map((category, index) => (
            <Card
              key={category.category}
              padding="lg"
              className={`resource-card fade-in stagger-${Math.min(index + 1, 5)} ${titleVisible ? 'visible' : ''}`}
            >
              <h3 className="resource-category">{category.category}</h3>
              <ul className="resource-links">
                {category.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <span>{link.title}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
