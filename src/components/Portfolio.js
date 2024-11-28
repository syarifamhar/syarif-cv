// src/components/Portfolio.js
import React, { useState } from 'react';
import './Portfolio.css';
// Import the images at the top of the file if they are sta

const projects = [
    {
        title: "Myventory",
        description: "POS and accounting system for SME businesses",
        images: [
        `${process.env.PUBLIC_URL}/assets/myvent-all.png`,
          `${process.env.PUBLIC_URL}/assets/myvent-1.png`, 
          `${process.env.PUBLIC_URL}/assets/myvent-2.png`, 
          `${process.env.PUBLIC_URL}/assets/myvent-3.png`,
          `${process.env.PUBLIC_URL}/assets/myvent-4.png`, 
          `${process.env.PUBLIC_URL}/assets/myvent-5.png`, 
          `${process.env.PUBLIC_URL}/assets/myvent-6.png`,
          `${process.env.PUBLIC_URL}/assets/myvent-7.png`, 
          `${process.env.PUBLIC_URL}/assets/myvent-8.png`,
        ],
        Skills: "Product Management, UI/UX Design, Vue.js, Git.",
      },
  {
    title: "Mirrora",
    description: "AI Face Analysis for beauty product recomendations",
    images: [
      `${process.env.PUBLIC_URL}/assets/mirrora-thumbnail-2.png`,
        `${process.env.PUBLIC_URL}/assets/mirrora-onboarding-1.png`,
        `${process.env.PUBLIC_URL}/assets/mirrora-onboarding-2.png`,
        `${process.env.PUBLIC_URL}/assets/mirrora-onboarding-3.png`,
        `${process.env.PUBLIC_URL}/assets/mirrora-onboarding-4.png`,
        `${process.env.PUBLIC_URL}/assets/mirrora-login.png`,
        `${process.env.PUBLIC_URL}/assets/mirrora-signup.png`,
        `${process.env.PUBLIC_URL}/assets/mirrora-forgot.png`,
        `${process.env.PUBLIC_URL}/assets/mirrora-verification.png`,
        `${process.env.PUBLIC_URL}/assets/mirrora-location.png`,
        `${process.env.PUBLIC_URL}/assets/mirrora-3-bg.png`,
        `${process.env.PUBLIC_URL}/assets/mirrora-home2.png`,
        `${process.env.PUBLIC_URL}/assets/mirrora-stores.png`,
        `${process.env.PUBLIC_URL}/assets/mirrora-brands.png`,
        `${process.env.PUBLIC_URL}/assets/mirrora2-bg.png`, 
        `${process.env.PUBLIC_URL}/assets/mirrora-4-bg.png`,
    ],
    Skills: "Product Management, UI/UX Design, Flutter, Git, Wordpress, Google Analytics",
  },
  {
    title: "Marvelkid's Clinic App",
    description: "Clinic management for childs therapy",
    images: [
      `${process.env.PUBLIC_URL}/assets/marvel-thumbnail.png`, 
          `${process.env.PUBLIC_URL}/assets/marvel-2.jpg`, 
          `${process.env.PUBLIC_URL}/assets/marvel-3.jpg`,
          `${process.env.PUBLIC_URL}/assets/marvel-4.jpg`,
          `${process.env.PUBLIC_URL}/assets/marvel-5.jpg`, 
          `${process.env.PUBLIC_URL}/assets/marvel-6.jpg`,
          `${process.env.PUBLIC_URL}/assets/marvel-7.jpg`, 
          `${process.env.PUBLIC_URL}/assets/marvel-8.jpg`, 
    ],
    Skills: "Product Management, UI/UX Design, Figma, Flutter, Git, Wordpress, Google Analytics",
  },
  {
    title: "WIEF Young Leaders Network",
    description: "World Islamic Economic Forum holds its Young Leaders events",
    images: [
      `${process.env.PUBLIC_URL}/assets/wyn-thumbnail.png`, 
          `${process.env.PUBLIC_URL}/assets/wyn-2.png`, 
          `${process.env.PUBLIC_URL}/assets/wyn-3.png`,
          `${process.env.PUBLIC_URL}/assets/wyn-4.png`, 
          `${process.env.PUBLIC_URL}/assets/wyn-5.png`,
          `${process.env.PUBLIC_URL}/assets/wyn-6.png`, 
          `${process.env.PUBLIC_URL}/assets/wyn-8.png`, 
    ],
    Skills: "Project Management, Frontend Development, Wordpress",
  },
  {
    title: "Ebene Website",
    description: "EBENE is a health and wellness brand which aims to provide an effective means to improving one’s quality of life.",
    images: [
      `${process.env.PUBLIC_URL}/assets/ebene-thumbnail.png`, 
          `${process.env.PUBLIC_URL}/assets/ebene-2.png`, 
          `${process.env.PUBLIC_URL}/assets/ebene-3.png`,
          `${process.env.PUBLIC_URL}/assets/ebene-4.png`, 
          `${process.env.PUBLIC_URL}/assets/ebene-5.png`,
          `${process.env.PUBLIC_URL}/assets/ebene-6.png`,
    ],
    Skills: "Project Management, Frontend Development, Wordpress",
  },
  {
    title: "Logo Designs",
    description: "Some of logo designs I did for personal projects and clients",
    images: [
      `${process.env.PUBLIC_URL}/assets/logo-design-thumb.png`, 
          `${process.env.PUBLIC_URL}/assets/engage-logo.png`, 
          `${process.env.PUBLIC_URL}/assets/arunika-logo.png`,
          `${process.env.PUBLIC_URL}/assets/harf-logo.png`, 
          `${process.env.PUBLIC_URL}/assets/portwave-logo.png`,
          `${process.env.PUBLIC_URL}/assets/myventory-logo.png`,
          `${process.env.PUBLIC_URL}/assets/mabey-logo.png`,
          `${process.env.PUBLIC_URL}/assets/mirrora-logo.png`,
          `${process.env.PUBLIC_URL}/assets/poras-logo.png`,
    ],
    Skills: "Project Management, Frontend Development, Wordpress",
  },
  // Add more projects here
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openGallery = (project) => {
    setSelectedProject(project);
  };

  const closeGallery = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="portfolio">
      <h2>My Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item" onClick={() => openGallery(project)}>
            <img src={project.images[0]} alt={project.title} />
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="portfolio-gallery">
          <button className="close-btn" onClick={closeGallery}>X</button>
          
          <div class="gallery-info">
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <span>{selectedProject.Skills}</span>
          </div>
          
          <div className="gallery-images">
            {selectedProject.images.map((image, index) => (
              <img key={index} src={image} alt={`${selectedProject.title} ${index + 1}`} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
