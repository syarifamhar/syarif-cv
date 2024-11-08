import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div class="skills-title-container">  
        <h2 className="skills-title">Skills</h2>
      </div>
        
      <div className="skills-container">

        {/* First Row */}
        <div className="skills-row">
          {/* Code Skills */}
          <div className="skills-column">
            <h3>Code</h3>
            <div className="skill">
              <span className="skill-name">HTML5, CSS3, JavaScript</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Tailwind & Bootsrap</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">React.js</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Vue.js</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Flutter</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">PHP</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>

          {/* Design Skills */}
          <div className="skills-column">
            <h3>Design</h3>
            <div className="skill">
              <span className="skill-name">Photoshop</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Figma</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Illustrator</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Premiere</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">3Ds Max</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="skills-row">
          {/* Management Skills */}
          <div className="skills-column">
            <h3>Management</h3>
            <div className="skill">
              <span className="skill-name">Excel</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Word</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Powerpoint</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Jira</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Monday.com</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Agile & Scrum</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>

          {/* Language Skills */}
          <div className="skills-column">
            <h3>Language</h3>
            <div className="skill">
              <span className="skill-name">Indonesian</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">English</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Malay</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">German</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '30%' }}></div>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">Arabic</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
