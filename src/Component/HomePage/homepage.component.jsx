import React, { Component } from "react";
import Directory from '../../Component/directory/directory.component';
import "./homepage.style.scss";

class HomePage extends Component {
  constructor(){
    super()
    this.state={
      name:{}
    }
  }
  render() {
    return (
      <div className="homepgae">
        <Directory  />
      </div>
    );
  }
}

export default HomePage;
