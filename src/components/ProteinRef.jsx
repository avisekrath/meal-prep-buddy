import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { proteinReference } from '../data/mealData';
import Mascot from './Mascot';
import './ProteinRef.css';

export function ProteinRef() {
  const [titleRef, titleVisible] = useScrollAnimation();

  return (
    <section className="proteinref section section-dark" id="protein">
      <div className="container">
        <div
          ref={titleRef}
          className={`proteinref-header fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <motion.div
            className="proteinref-mascot"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Mascot pose="protein" size={120} />
          </motion.div>
          <Badge variant="primary" size="lg">Quick Reference</Badge>
          <h2 className="heading-2">Protein Content Guide</h2>
          <p className="text-large">
            Know your protein sources at a glance
          </p>
        </div>

        <Card variant="default" padding="lg" className="proteinref-card">
          <div className="proteinref-table">
            <div className="proteinref-header-row">
              <span>Food Item</span>
              <span>Protein (per 100g)</span>
            </div>
            {proteinReference.map((item, index) => (
              <div
                key={item.item}
                className={`proteinref-row fade-in stagger-${Math.min(index + 1, 5)} ${titleVisible ? 'visible' : ''}`}
              >
                <span className="proteinref-item">{item.item}</span>
                <span className="proteinref-protein">
                  <strong>{item.protein}</strong>
                </span>
              </div>
            ))}
          </div>
        </Card>

        <p className="proteinref-note">
          * Values are approximate and may vary by brand and preparation method
        </p>
      </div>
    </section>
  );
}
