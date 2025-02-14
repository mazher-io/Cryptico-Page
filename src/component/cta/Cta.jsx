import "./cta.css";
import { motion } from "framer-motion";


const Cta = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      viewport={{ once: true }} // Prevents re-triggering when scrolling back
    >
    <div className="cta">
      <div className="left-sec">
        <h1>Let’s start your cryptico<br/>investment now</h1>
        <p>
          A presentation is a method of communicating information, ideas, or <br/>
          proposals to an audience in a structured and engaging manner.
        </p>
        
      </div>
      
      <div className="right-sec">
        {/* Link wrapping the image */}
        
        <button id="bottone1" onClick={() => window.location.href = 'https://crypticoo.netlify.app'}><strong>Get Started</strong></button>
        
      </div>
    </div>
    </motion.div>
  );
};

export default Cta;
