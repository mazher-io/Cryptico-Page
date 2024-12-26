import { useEffect } from 'react';
import Text from '../text-component/text';
import './Pricing.css';

const pricingPlans = [
  {
    name: "Starter",
    price: "$9.99/month",
    icon: "🚀",
    features: [
      "2GB NVMe SSD Storage",
      "10GB CDN Bandwidth",
      "1 Website Deployment",
      "Auto SSL Certificate",
      "24/7 Discord Support",
      "Custom Domains",
    ],
    comparison: "Perfect for side projects",
    cta: "Deploy Now",
  },
  {
    name: "Pro Stack",
    price: "$24.99/month",
    icon: "⚡",
    features: [
      "20GB NVMe SSD Storage",
      "100GB CDN Bandwidth",
      "5 Website Deployments",
      "Auto SSL & Custom Domains",
      "Priority Discord Support",
      "Automated Daily Backups",
    ],
    comparison: "Ideal for growing startups",
    cta: "Deploy Now",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99.99/month",
    icon: "🏢",
    features: [
      "100GB NVMe SSD Storage",
      "Unlimited CDN Bandwidth",
      "20 Website Deployments",
      "Advanced Security Suite",
      "24/7 Priority Phone Support",
      "Real-time Database Backups",
      "Custom Infrastructure",
    ],
    comparison: "For enterprise solutions",
    cta: "Contact Sales",
  },
];

const PricingCard = ({ plan }) => {
  const { name, price, icon, features, comparison, cta, popular } = plan;

  return (
    <div className={`pricing-card ${popular ? 'popular' : ''}`}>
      <div className="inner-glow"></div>
      <div className="card-blur"></div>
      {popular && <div className="highlight">POPULAR</div>}
      <div className="plan-icon">{icon}</div>
      <h2 className="plan-name">{name}</h2>
      <div className="price">{price}</div>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="cta-button" onClick={() => window.location.href = 'https://crypticoo.netlify.app'}>{cta}</button>
      <p className="comparison">{comparison}</p>
    </div>
  );
};

const Pricing = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.pricing-card');

    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;

      const innerGlow = card.querySelector('.inner-glow');
      innerGlow.style.background = `radial-gradient(
        circle at ${x}px ${y}px,
        rgba(103, 132, 255, 0.2) 0%,
        transparent 70%
      )`;
    };

    const handleMouseLeave = (card) => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      const innerGlow = card.querySelector('.inner-glow');
      innerGlow.style.background = `radial-gradient(
        circle at 50% 50%,
        rgba(103, 132, 255, 0.15) 0%,
        transparent 70%
      )`;
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
        card.removeEventListener('mouseleave', () => handleMouseLeave(card));
      });
    };
  }, []);

  return (
    <div className="pricing-container">
      <Text text="Pricing" headingText="Revolutionary Pricing" />
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
