import "./cta.css";


const Cta = () => {
  return (
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
  );
};

export default Cta;
