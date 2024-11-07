import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const experiences = [
    {
      role: 'PRODUCT OWNER - Marvelkids Clinic Child Therapy',
      date: 'Jul 2023 - Present',
      description: [
        'Stakeholder Engagement: Built and maintained strong relationships with stakeholders, ensuring that product plans aligned seamlessly with business objectives.',
        'Design & Development: Took an active role in designing interfaces and developing features for the mobile app and landing page, providing a smooth user experience.',
        'Timeline & Backlog Management: Effectively prioritized and managed timelines and backlogs, ensuring product releases stayed on track.',
        'UI/UX Leadership: Spearheaded UI/UX design for the mobile app and landing page, improving both user experience and visual appeal.',
        'Full-Stack Contributions: Played a significant role in both design and development phases, ensuring that the final product met all specifications.',
        'Stakeholder Communication: Kept stakeholders regularly updated and incorporated feedback to enhance product features.',
        'Performance Optimization: Monitored analytics, identifying improvement areas and implementing solutions to boost app and landing page performance.',
      ],
    },
    {
      role: 'UI/UX DESIGNER (CONTRACT) - Codershive.io',
      date: 'Apr 2024 - Jun 2024',
      description: [
        'Intuitive Interface Design: Developed user-friendly and visually appealing interfaces for CodersHive’s clients, ensuring brand consistency.',
        'Proficient in Figma: Utilized Figma for wireframes, prototypes, and final UI designs, collaborating closely with clients for optimized user flows.',
        'Wix Web Development: Created and customized responsive web pages on Wix, maintaining alignment with design specs and ensuring functionality.',
        'Client-Centric Collaboration: Engaged closely with clients to understand their needs and deliver UI/UX solutions that aligned with their objectives.',
        'Project Management: Balanced multiple design projects efficiently, consistently meeting deadlines and quality standards.',
        'User-Centered Design: Applied user-centered principles to enhance usability and user satisfaction.',
        ],
    },
    {
      role: 'PRODUCT MANAGER - QuickSchools.com ',
      date: 'Apr 2022 - Apr 2023',
      description: [
        'Feature Design: Designed UI/UX for new features on both web and mobile platforms, improving existing feature designs to enhance user experience.',
        'Reporting to Leadership: Provided regular updates to the CEO on product design and improvements.',
        'Cross-Functional Collaboration: Worked with engineering teams to bring new features from concept to deployment.',
        'Documentation & Planning: Prepared documents and diagrams to support new feature implementation.',
        'Daily Progress Updates: Kept the team informed with daily progress reports, facilitating smooth project flow.',
        'Backlog & Timeline Management: Organized and prioritized client-requested features through detailed task logs and timeline analyses.',
        'New Product Development: Developed UI/UX and prototyped "Engage by QuickSchools," a new product offering.',
      ]
    },
    {
      role: 'HEAD OF PRODUCT & INTERNATIONAL MARKETING - PT. Zahir Internasional',
      date: 'Feb 2020 - Jan 2022',
      description: [
        'SaaS Metrics Calculation: Monitored key metrics to gauge product success and areas for improvement.',
        'Customer Analytics: Analyzed user behavior and demographics with Google Analytics for both potential and existing customers.',
        'Product Development: Brainstormed, planned, and developed new features in alignment with market demands and company goals.',
        'Client Outreach: Engaged potential clients and presented the ERP solution to both domestic and international markets.',
        'Leadership Reporting: Created comprehensive product development and revenue reports directly for the CEO.',
        'Performance Analysis: Regularly assessed the performance of applications and web platforms, optimizing for improvement.',
        'Marketing Content Creation: Produced marketing videos and devised a social media strategy to boost brand visibility.',
      ]
    },
    {
        role: 'FULL STACK ENGINEER - PT. Nada Teknologi Indonesia',
        date: 'Dec 2018 - Jun 2019',
        description: [
          'Project Roadmapping: Created project timelines and roadmaps using tools like Jira, Trello, and GitLab.',
          'Requirement Documentation: Developed User Requirement Specifications (URS) and coordinated with clients to finalize project requirements.',
          'UI/UX Development: Designed interfaces using HTML, CSS, JavaScript, and Bootstrap 3.',
          'Client Collaboration: Conducted meetings with clients to ensure designs aligned with their needs.',
          'API Integration: Worked closely with backend engineers to integrate and troubleshoot API connections.',
          'System Maintenance: Provided ongoing support post-deployment to ensure system stability and functionality.',
        ]
      },
      {
        role: 'FRONT END DEVELOPER - Consider iProspect',
        date: 'May 2016 - May 2018',
        description: [
        'Requirements Analysis: Developed User Requirements Specifications (URS) before website development.',
        'Website Development: Built client websites that matched requirements, enhancing the user experience through refined interfaces.',
        'Feature Development: Implemented new user-facing features and maintained dynamic website content.',
        'UI/UX Feasibility: Ensured that UI/UX designs were practical for development and optimized for performance.',
        'Collaborative Design Support: Assisted designers in modifying visuals to improve functionality when necessary.',
        'Email Marketing Templates: Created reusable email templates for marketing campaigns, enhancing brand consistency.',
        ]
      },
  ];

  return (
    <section className="experience-section">
      <div className="experience-title-container">
        <h2 className="experience-title">Experience</h2>
      </div>
      <div className="experience-content">
        <h3 className="experience-header">
        Experienced Product Manager, UI/UX Designer, and Frontend Developer with a knack for blending user-centered design, strategic product decisions, and pixel-perfect code. I bring over five years of experience in creating digital experiences that don’t just work—they engage, delight, and perform.
        </h3>
        <p className="experience-description">
        I’ve worn a lot of hats over the years—planning and launching products, designing user-friendly interfaces, 
        and coding them into reality. I’m all about balancing the big picture with the small details, whether it’s building out a project timeline, 
        making sure every button looks just right, or squashing stubborn bugs. <b>My goal?</b> Create stuff that’s not only functional but makes life a little easier (and maybe even a bit more fun).
        </p>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleToggle(index)}
            >
              <div className="experience-role">
                {exp.role}
                <span className="experience-toggle">{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className="experience-details">
                  <p className="experience-date">{exp.date}</p>
                  <ul className="experience-description">
                        {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                        ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
