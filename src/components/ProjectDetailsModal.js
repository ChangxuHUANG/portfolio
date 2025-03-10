import React from "react";
import { withRouter } from "react-router-dom";
import'./ProjectDetailModal.css';     




class ProjectDetailsModal extends React.Component {
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
    const { resumeProjects } = this.props;
    

    const project = resumeProjects?.find(proj => proj.title.replace(/\s+/g, "-") === id);

    if (!project) {
      return <p>Projet introuvable</p>;
    }

    return (
      <div>
        <div className="header">
      <div className="name">Changxu HUANG</div>
      <div className="buttons">
        <button className="homeButton" onClick={this.handleBack}>
          Accueil
        </button>
        <button onClick={this.scrollToFooter}>Contact</button> 
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
        <h1 className="projetName">{project.title}</h1> 
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
        <img src={project.imageContenu} alt="photoProjet"/>  
        
        </div>
      
      </div>
      <div className="contact">
  
    <p>📞 Téléphone : <a href="tel:+33612345678">+33 7 84 19 73 33</a></p> 
    <p>📧 Email : <a href="mailto:changxuhuang@gmail.com">changxuhuang@gmail.com</a></p>
  
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
