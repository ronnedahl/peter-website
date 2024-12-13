import React from 'react';
import './projects.css';

function Projects() {
  const projects = [
    {
      title: 'UX/UI',
      description: 'Gedigen kunskap i UX/UI och designprinciper med fokus på att skapa estetiskt tilltalande och användarvänliga digitala lösningar för olika plattformar.',
      link: 'https://github.com/yourusername/project-one',
    },
    {
      title: 'HTML & CSS',
      description: 'Erfarenhet inom att bygga responsiva och professionella webbsidor med HTML och CSS, anpassade för olika enheter och användarbehov.',
      link: 'https://github.com/yourusername/project-two',
    },
    {
      title: 'JavaScript',
      description: 'Erfarenhet av att skapa dynamiska och interaktiva hemsidor med JavaScript, inklusive API-integrationer och användarvänliga funktioner.',
      link: 'https://github.com/yourusername/project-two',
    },
    {
      title: 'Agilt Arbete',
      description: 'Van att arbeta agilt med Scrum-metoden och GitHub för att effektivt samarbeta och leverera värdefulla lösningar i team och projekt.',
      link: 'https://github.com/yourusername/project-two',
    },
    {
      title: 'Frontend Ramverk',
      description: 'Djupgående kunskaper i React och komponentbaserad utveckling för att bygga moderna webbapplikationer med hög prestanda och användarvänlighet.',
      link: 'https://github.com/yourusername/project-two',
    },
    {
      title: 'Backend med Node.js',
      description: 'Erfarenhet av att bygga robusta backend-lösningar med Node.js och hantera API:er och databaser på ett smidigt sätt.',
      link: 'https://github.com/yourusername/project-two',
    },
    {
      title: 'Molnbaserad Utveckling',
      description: 'Erfarenhet i driftsättning och utveckling i molnmiljöer med fokus på AWS Serverless-tjänster för säker, skalbar och effektiv hantering.',
      link: 'https://github.com/yourusername/project-two',
    },
    {
      title: 'UX/UI Fördjupning',
      description: 'Avancerade färdigheter i Reacts Framer Motion, CSS och animeringar för att skapa dynamiska och engagerande användargränssnitt.',
      link: 'https://github.com/yourusername/project-two',
    },
    {
      title: 'Fullstack med TypeScript',
      description: 'Erfarenhet av att utveckla fullstack-applikationer med TypeScript för att skapa robusta, typade och skalbara lösningar där frontend och backend samverkar.',
      link: 'https://github.com/yourusername/project-two',
    },
  ];

  return (
    <section id="utbildning" className="projects">
      <h2>Mina Kompetenser</h2>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <div className="projects__card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
           
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

