import { useEffect } from "react";
import React from "react"; 
import { useHistory } from "react-router-dom";   



const Projects = ({ resumeProjects, resumeBasicInfo }) => {


  const history = useHistory(); 
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".project-card");
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // vérifie au chargement

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  if (!resumeProjects || !resumeBasicInfo) return null;

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>{resumeBasicInfo.section_name.projects}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">
            {resumeProjects.map((project,index) => (
               
              <div key={project.title} className="col-sm-12 col-md-6 col-lg-6" >
                <span className="portfolio-item d-block">
                  <div className="container mt-4 p-3" 
                  > 
                    <div className="row align-items-start project-card"
                     >  
                      <section className="col-md-6">
                      <h2 className="project-title-settings mt-3">{project.title}</h2>
                      <p style={{fontSize:"18px"} }className="text-justify">{project.description}</p>
                      <div className="mb-3">
                        {project.technologies.map((techno,index)=>
                        <button style={{fontSize:"18px"}} key={techno[index]}className="btn btn-outline-primary mr-2 mb-2">
                          {techno.name}</button>)}   
                      </div>
                        <button className="btn btn-primary" style={{fontSize:"18px"}} onClick={() => history.push(`/projects/${project.title.replace(/\s+/g, '-')}`)}>Voir les détails</button>                 
                      </section>
                      <section className="col-md-6 text-center"> 
                      <img
                        src={project.images[0]}
                        
                        alt="projectImages"
                        height="330" 
                        style={{ marginBottom: 0, paddingBottom: 0, position: "relative",width:"95%",maxWidth: "331px" }} 
                      />
                      <span className="project-date d-block mt-2">{project.startDate}</span> 
                      </section>
                      
                    </div>
                  </div>
                </span>
              </div>
              
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
