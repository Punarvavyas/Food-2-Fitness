import React, { Component } from "react";
import classes from "./Searchbar.css";
import runn from "./run.jpeg"


class Home extends Component {
  state = {
    
  };

  render() {
   

    
    return (

         
      <div className={classes.SearchBar}>

         
        <center>
        <img
            src={runn}
            style={{
              width: "50%",
              height: "200px",
              marginLeft: "10px",
              marginRight: "10px",
              
            }}

          ></img>
          <br></br>
          <p>An Integrated Platform which helps you to reach your fitness goals</p>
          <br></br>

          <input
            
            type="text"
            placeholder="Search the website"
            ref={(input) => (this.search = input)}
            className={classes.Input}
            onChange={this.handleInputChange}
          />
          <br />
          
        </center>

        
      </div>
    );
  }
}

export default Home;