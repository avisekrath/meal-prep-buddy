import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import './Schedule.css';

const scheduleData = [
  {
    time: 'Morning',
    timeRange: '7:00 - 8:00 AM',
    title: 'Breakfast',
    description: '40g protein scramble with veggies',
    icon: '🍳',
    calories: '~650 cal'
  },
  {
    time: 'Midday',
    timeRange: '12:00 - 1:00 PM',
    title: 'Lunch',
    description: 'Marinated chicken with rice & greens',
    icon: '🍗',
    calories: '~800 cal'
  },
  {
    time: 'Afternoon',
    timeRange: '3:00 - 4:00 PM',
    title: 'Snack',
    description: 'Protein shake with fruits & nuts',
    icon: '🥤',
    calories: '~400 cal'
  },
  {
    time: 'Evening',
    timeRange: '7:00 - 8:00 PM',
    title: 'Dinner',
    description: 'Grilled fish or tofu with vegetables',
    icon: '🥗',
    calories: '~750 cal'
  }
];

export function Schedule() {
  const [titleRef, titleVisible] = useScrollAnimation();

  return (
    <section className="schedule section section-dark" id="schedule">
      <div className="container">
        <div
          ref={titleRef}
          className={`schedule-header fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <Badge variant="primary" size="lg">Daily Plan</Badge>
          <h2 className="heading-2">Your Daily Schedule</h2>
          <p className="text-large text-muted">
            A simple framework to hit your protein goals every day
          </p>
        </div>

        <div className="schedule-grid">
          {scheduleData.map((item, index) => (
            <Card
              key={item.time}
              variant="default"
              padding="lg"
              hover
              className={`schedule-card fade-in stagger-${index + 1} ${titleVisible ? 'visible' : ''}`}
            >
              <div className="schedule-card-icon">{item.icon}</div>
              <div className="schedule-card-time">
                <span className="schedule-time-label">{item.time}</span>
                <span className="schedule-time-range">{item.timeRange}</span>
              </div>
              <h3 className="schedule-card-title">{item.title}</h3>
              <p className="schedule-card-desc">{item.description}</p>
              <Badge variant="light" size="sm">{item.calories}</Badge>
            </Card>
          ))}
        </div>

        <div className="schedule-total">
          <div className="schedule-total-item">
            <span className="schedule-total-number">2,600</span>
            <span className="schedule-total-label">Total Calories</span>
          </div>
          <div className="schedule-total-divider" />
          <div className="schedule-total-item">
            <span className="schedule-total-number">120g+</span>
            <span className="schedule-total-label">Total Protein</span>
          </div>
        </div>
      </div>
    </section>
  );
}
