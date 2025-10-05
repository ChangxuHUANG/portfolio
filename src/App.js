import React, { Component, useEffect, useRef }from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";  
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects"; 
import Skills from "./components/Skills";
import ProjectDetailsModal from "./components/ProjectDetailsModal"; 
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";




class App extends Component {

  constructor(props) {
    super(); 
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }
  componentDidMount() {
    AOS.init({ duration: 1000,once: true });
  }
  

  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `/res_primaryLanguage.json`
        : `/res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  /*swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }*/
      swapCurrentlyActiveLanguage(oppositeLangIconId) {
        var pickedLangIconId =
          oppositeLangIconId === window.$primaryLanguageIconId
            ? window.$secondaryLanguageIconId
            : window.$primaryLanguageIconId;
      
        const oppositeElement = document.getElementById(oppositeLangIconId);
        if (oppositeElement) {
          oppositeElement.removeAttribute("filter", "brightness(40%)");
        }
        
        const pickedElement = document.getElementById(pickedLangIconId);
        if (pickedElement) {
          pickedElement.setAttribute("filter", "brightness(40%)");
        } 
      }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `/portfolio_shared_data.json`, 
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  } 
/*
componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(window.$primaryLanguage, window.$secondaryLanguageIconId);
  }

  applyPickedLanguage = (pickedLanguage, oppositeLangIconId) => {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;

    const resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;

    this.loadResumeFromPath(resumePath);
  };

  swapCurrentlyActiveLanguage = (oppositeLangIconId) => {
    const pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;

        const oppositeElement = document.getElementById(oppositeLangIconId);
        if (oppositeElement) {
          oppositeElement.removeAttribute("filter", "brightness(40%)");
        }
        
        const pickedElement = document.getElementById(pickedLangIconId);
        if (pickedElement) {
          pickedElement.setAttribute("filter", "brightness(40%)");
        } 
  };

  loadResumeFromPath = async (path) => {
    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error("Erreur lors du chargement des données");
      
      const data = await response.json();
      this.setState({ resumeData: data });
    } catch (error) {
      alert(error);
    }
  };

  loadSharedData = async () => {
    try {
      const response = await fetch("portfolio_shared_data.json");
      if (!response.ok) throw new Error("Erreur lors du chargement des données partagées");

      const data = await response.text(); 
      this.setState({ sharedData: data }, () => {
        document.title = this.state.sharedData.basic_info?.name || "Portfolio";
      });
    } catch (error) {
      alert(error);
    }
  };*/ 
  render() {
    
    return (
      <Router>               
          <ScrollToTop /> 
        <Switch>
        {/*page d'accueil*/ }
          <Route 
          exact path="/"
          render={() => (
          <>
          <Header sharedData={this.state.sharedData.basic_info} />
        <div className="col-md-12 mx-auto text-center language">
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$primaryLanguage,
                window.$secondaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon mr-5"
              data-icon="twemoji-flag-for-flag-france"
              data-inline="false"
              id={window.$primaryLanguageIconId}
            ></span>
          </div>
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$secondaryLanguage,
                window.$primaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon"
              data-icon="twemoji-flag-for-flag-united-kingdom"
              data-inline="false"
              id={window.$secondaryLanguageIconId}
            ></span>
          </div>
        </div>  
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer id = "footer" sharedBasicInfo={this.state.sharedData.basic_info} />
        </>
        )} />
         {/*page de projet*/ }
         <Route
  path="/projects/:id"
  render={(props) => (
    <ProjectDetailsModal {...props} resumeProjects={this.state.resumeData.projects }/>
  )}
/> 

        </Switch>  
      </Router>
    );
  }
}

export default App; 
