import React, {  useState, useCallback } from "react"; 
import { useHistory } from "react-router-dom";  
import ProjectDetailsModal from "./ProjectDetailsModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { NavLink } from "react-router-dom";


const Projects = ({ resumeProjects, resumeBasicInfo }) => {


  const history = useHistory();



  if (!resumeProjects || !resumeBasicInfo) return null;

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>{resumeBasicInfo.section_name.projects}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">
            {resumeProjects.map((project) => (
               
              <div key={project.title} className="col-sm-12 col-md-6 col-lg-4" style={{ cursor: "pointer" }}>
                <span className="portfolio-item d-block">
                  <div className="foto" onClick={() => history.push(`/projects/${project.title.replace(/\s+/g, '-')}`)}
                  > 
                    <div>
                      <img
                        src={project.images[0]}
                        alt="projectImages"
                        height="230"
                        style={{ marginBottom: 0, paddingBottom: 0, position: "relative" }}
                      />
                      <span className="project-date">{project.startDate}</span>
                      <br />
                      <p className="project-title-settings mt-3">{project.title}</p>
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
