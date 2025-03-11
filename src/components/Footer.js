import React, { Component } from "react";

class Footer extends Component {
  render() {
    

    return (
      <footer>
        <div className="col-md-12">
          {/*<div className="social-links">{networks}</div>*/} 

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
