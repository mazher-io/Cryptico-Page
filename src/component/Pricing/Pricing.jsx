import { useEffect } from 'react';
import Text from '../text-component/text';
import './Pricing.css';

const Pricing = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.pricing-card');

    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate rotation based on mouse position
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

    // Cleanup event listeners on unmount
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
        {/* Basic Plan */}
        <div className="pricing-card">
          <div className="inner-glow"></div>
          <div className="card-blur"></div>
          <div className="plan-icon">🚀</div>
          <h2 className="plan-name">Starter</h2>
          <div className="price">
            $9.99<span>/month</span>
          </div>
          <ul className="features">
            <li>2GB NVMe SSD Storage</li>
            <li>10GB CDN Bandwidth</li>
            <li>1 Website Deployment</li>
            <li>Auto SSL Certificate</li>
            <li>24/7 Discord Support</li>
            <li>Custom Domains</li>
          </ul>
          <button className="cta-button">Deploy Now</button>
          <p className="comparison">Perfect for side projects</p>
        </div>

        {/* Pro Plan */}
        <div className="pricing-card popular">
          <div className="inner-glow"></div>
          <div className="card-blur"></div>
          <div className="highlight">POPULAR</div>
          <div className="plan-icon">⚡</div>
          <h2 className="plan-name">Pro Stack</h2>
          <div className="price">
            $24.99<span>/month</span>
          </div>
          <ul className="features">
            <li>20GB NVMe SSD Storage</li>
            <li>100GB CDN Bandwidth</li>
            <li>5 Website Deployments</li>
            <li>Auto SSL & Custom Domains</li>
            <li>Priority Discord Support</li>
            <li>Automated Daily Backups</li>
          </ul>
          <button className="cta-button">Deploy Now</button>
          <p className="comparison">Ideal for growing startups</p>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-card">
          <div className="inner-glow"></div>
          <div className="card-blur"></div>
          <div className="plan-icon">🏢</div>
          <h2 className="plan-name">Enterprise</h2>
          <div className="price">
            $99.99<span>/month</span>
          </div>
          <ul className="features">
            <li>100GB NVMe SSD Storage</li>
            <li>Unlimited CDN Bandwidth</li>
            <li>20 Website Deployments</li>
            <li>Advanced Security Suite</li>
            <li>24/7 Priority Phone Support</li>
            <li>Real-time Database Backups</li>
            <li>Custom Infrastructure</li>
          </ul>
          <button className="cta-button">Contact Sales</button>
          <p className="comparison">For enterprise solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
