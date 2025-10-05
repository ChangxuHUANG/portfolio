import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
      <div>
        <div className="header" style={{height:70,backgroundColor:this.state.checked ? '#353535' : '#e9d5a1',borderBottom:"none", justifyContent:"flex-end",}}> 
      
      <div className="buttons" >  
        <button className="homeButton" onClick={this.handleBack}style={{fontSize:"20px",color:this.state.checked ? 'white' : '#353535'}}>
          Accueil
        </button>
        <button onClick={()=> {document.querySelector(".contact").scrollIntoView({behavior:"smooth"})}}style={{fontSize:"20px",color:this.state.checked ? 'white' : '#353535'}}>Contact</button> 
        <a
          href={"https://github.com/ChangxuHUANG?tab=repositories"} 
          target="_blank"
          rel="noopener noreferrer"
          className="githubButton"
        >
          <span className="iconify" data-icon="mdi:github" data-inline="false"style={{fontSize:"30px"}}></span>
        </a>
        <a href="/CV. HUANG Changxu.pdf" download>
        <button  style={{ fontSize: "20px",color:this.state.checked ? 'white' : '#353535' }}>Mon CV</button></a> 
      </div>
       </div>
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block',paddingTop:"0px" }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12" style={{paddingTop:"50px"}}>
            <div>
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" /> 
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
            </div>
          </div>
        </div>
      </header>
      </div>
    );
  }
}

export default Header;
