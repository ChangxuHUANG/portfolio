import React from "react";
import { withRouter } from "react-router-dom";
import'./ProjectDetailModal.css';     





class ProjectDetailsModal extends React.Component {
 
  handleNext =() =>{
    const { resumeProjects, match, history } = this.props;
    const { id } = match.params;
    const currentIndex = resumeProjects.findIndex( 
    (p) => p.title.replace(/\s+/g, "-") === id 
  );
    const nextProject = resumeProjects[currentIndex + 1];
    if (nextProject)
      history.push(`/projects/${nextProject.title.replace(/\s+/g, '-')}`)
    } 
    
   handlePrev =() =>{
    const { resumeProjects, match, history } = this.props;
    const { id } = match.params;
    const currentIndex = resumeProjects.findIndex( 
    (p) => p.title.replace(/\s+/g, "-") === id 
  );
     const prevProject = resumeProjects[currentIndex - 1];
    if (prevProject)
      history.push(`/projects/${prevProject.title.replace(/\s+/g, '-')}`)
    } 


  
  handleBack = () => {
    this.props.history.push("/"); // Redirige vers la page d'accueil
  };
  scrollToFooter = () => {
    const contact = document.querySelector(".contact"); 
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" }); // Défilement fluide
    }
  };
  render() {
    // Récupérer l'ID du projet depuis l'URL
    const { id } = this.props.match.params;
    const  {resumeProjects}  = this.props;
    
    if (!Array.isArray(resumeProjects)) {
  return <p>Chargement en cours...</p>; // verifier si resumeProjet est bien chargé
}
    const project = resumeProjects?.find(proj => proj.title.replace(/\s+/g, "-") === id);

    const currentIndex = resumeProjects.findIndex( 
    (p) => p.title.replace(/\s+/g, "-") === id 
  );
    const prevProject = resumeProjects[currentIndex - 1];
    const nextProject = resumeProjects[currentIndex + 1];
    
     
     

    if (!project) {
      return <p>Projet introuvable</p>;
    } else{
      console.log(project) 

    }

    return (
      <div className="container-fluid">
        <div className="header">
      <div className="h4 mb-0">Changxu HUANG</div>
      <div className="buttons">
        <button className="btn btn-outline-secondary mr-2" onClick={this.handleBack}> 
          
          Accueil
        </button>
       { prevProject && (
        <button className="btn btn-outline-secondary mr-2" 
        onClick={this.handlePrev}>
    Précédent <i className="fas fa-arrow-left"></i>
  </button>
       )

       }
       { nextProject && (
        <button className="btn btn-outline-secondary mr-2" 
        onClick={this.handleNext}> 
    Suivant <i className="fas fa-arrow-right"></i>
  </button> 
       )

       }
        
        <button className="btn btn-outline-secondary mr-2"onClick={this.scrollToFooter}>Contact</button> 
        <a
          href={project.gitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="githubButton"
        >
          <span className="iconify" data-icon="mdi:github" data-inline="false"></span>
        </a>
      </div>
    </div>
      <div className="container-projet">
        <h1 className="projet-titre">{project.title}</h1> 
        <div className='banner-projet'>  
          <img src={project.imageBanner} alt="couverture"/>    
          {console.log("Image Banner Path:", project.imageBanner)} 
        </div>
        <div className="sectionProjet">
        <div className="titleProjet">
            <h1>{project.presentation} </h1>
          </div>
        <div className="infoProjet">        
          <div className="fonctionnement">
            <h2>Fonctionnement du site</h2>
          <ul >{
            project.fonctionnement.map((tag,index)=>(
              <li key={index}><span>{tag}</span></li>
            )
            )}</ul>
            </div>
            <div className="missions">
            <h2>Missions</h2>  
          <ul >{
            project.missions.map((contenu,index)=>(
              <li key={index}>{contenu}</li>
            )
            )}</ul>
            </div>
            <div className="competences">
            <h2>Compétences acquises</h2>  
          <ul >{
            project.competences.map((contenu,index)=>(
              <li key={index}>{contenu}</li>
            )
            )}</ul>
            </div>
          </div>  
          </div>
        <div className="contenu-projet">
          {project.imageContenu.map((photo,index)=>(
            <img style={{marginBottom:"3px"}} src={photo} key = {index }alt="photoProjet"/> ))}
         
        
        </div>
      
      </div>
      <div className="contact">
  
    <p><span role="img" aria-label="Téléphone">📞</span>Téléphone : <a href="tel:+33612345678">+33 7 84 19 73 33</a></p> 
    <p> <span role="img" aria-label="Email">📧</span> Email: <a href="mailto:changxuhuang@gmail.com">changxuhuang@gmail.com</a></p>
  
</div>
      </div>
    );
  }
    /*render() {
      // Récupérer l'ID du projet depuis l'URL
      
  
      return (
        <div>
          <h2>Détails du projet</h2>
          <p>Projet sélectionné </p>  
        </div>
)};*/
}

// withRouter permet d'accéder aux paramètres d'URL dans un composant de classe
export default withRouter(ProjectDetailsModal);
