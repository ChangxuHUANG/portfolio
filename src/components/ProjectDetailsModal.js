import React from "react";
import { withRouter } from "react-router-dom";

class ProjectDetailsModal extends React.Component {
  render() {
    // Récupérer l'ID du projet depuis l'URL
    const { id } = this.props.match.params;

    return (
      <div>
        <h2>Détails du projet</h2>
        <p>Projet sélectionné : {id}</p> 
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
