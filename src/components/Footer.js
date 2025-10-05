import React, { Component } from "react";

class Footer extends Component {
  render() {
    

    return (
      <footer>
        <div className="col-md-12">
          {/*<div className="social-links">{networks}</div>*/} 

          {/*<div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
              </small>
            </div>
          </div>*/}
          <div className="contact" style={{backgroundColor:"#1F1F1F"}}> 
  
    <p><span role="img" aria-label="Téléphone">📞</span>Téléphone : <a href="tel:+33612345678">+33 7 84 19 73 33</a></p> 
    <p> <span role="img" aria-label="Email">📧</span> Email: <a href="mailto:changxuhuang@gmail.com">changxuhuang@gmail.com</a></p>
  
</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
