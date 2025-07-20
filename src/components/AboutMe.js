import React from 'react';
import './AboutMe.css';
import syarifCharacter from '../assets/syarif-character(1).png';

function AboutMe() {
  return (
    <section id="about" className="about-section">
      <div className="about-left">
        <div className="about-heading">
          <h1>Why I Build</h1>
        </div>
        <div className="about-content">
          <p>
            I didn’t start learning design, code, and product management to chase a career. I started because I felt lost...building things made me feel useful.<br /><br />
            Over time, I realized I wasn’t just designing screens, I was trying to connect with people. It became less about code or layout, and more about <b>empathy</b>.<br /><br />
            Now, I help teams build products that feel human. From AI beauty analysis, wellness apps to internal tools for doctors and websites for small businesses, I focus on things that matter.<br /><br />
            I’ve led teams, shipped features, fixed bugs at 2am, and asked hard questions when no one else would. Because to me, it’s never just about deliverables. It’s about <b>impact</b>.<br /><br />
            I’m not here to impress.<br />
            I’m here to help.<br /><br />
            If you’re building something meaningful, I’d love to hear your story.<br /><br />
            Let’s create something that matters!
          </p>
        </div>
      </div>
      <div className="about-right">
        <img src={syarifCharacter} alt="Syarif Character" className="about-image" />
      </div>
    </section>
  );
}

export default AboutMe;
