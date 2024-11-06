// src/components/Portfolio.js
import React, { useState } from 'react';
import './Portfolio.css';
// Import the images at the top of the file if they are sta

const projects = [
    {
        title: "Myventory",
        description: "A fantastic project showcasing my design and coding skills.",
        images: [
          `${process.env.PUBLIC_URL}/assets/myvent-1.png`, 
          `${process.env.PUBLIC_URL}/assets/myvent-2.png`, 
          `${process.env.PUBLIC_URL}/assets/myvent-3.png`,
          `${process.env.PUBLIC_URL}/assets/myvent-4.png`, 
          `${process.env.PUBLIC_URL}/assets/myvent-5.png`, 
          `${process.env.PUBLIC_URL}/assets/myvent-6.png`,
          `${process.env.PUBLIC_URL}/assets/myvent-7.png`, 
          `${process.env.PUBLIC_URL}/assets/myvent-8.png`,
        ],
      },
  {
    title: "Mirrora",
    description: "Another amazing project that dives into AI and automation.",
    images: ["/assets/project2-1.jpg", "/assets/project2-2.jpg"],
  },
  {
    title: "Marvelkid's Clinic App",
    description: "A fantastic project showcasing my design and coding skills.",
    images: [
      `${process.env.PUBLIC_URL}/assets/marvel-1.png`, 
          `${process.env.PUBLIC_URL}/assets/marvel-2.jpg`, 
          `${process.env.PUBLIC_URL}/assets/marvel-3.jpg`,
          `${process.env.PUBLIC_URL}/assets/marvel-4.jpg`,
          `${process.env.PUBLIC_URL}/assets/marvel-5.jpg`, 
          `${process.env.PUBLIC_URL}/assets/marvel-6.jpg`,
          `${process.env.PUBLIC_URL}/assets/marvel-7.jpg`, 
          `${process.env.PUBLIC_URL}/assets/marvel-8.jpg`, 
    ],
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
          <h3>{selectedProject.title}</h3>
          <p>{selectedProject.description}</p>
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
