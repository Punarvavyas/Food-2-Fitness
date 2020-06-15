import React, { Component } from "react";
import classes from "./Searchbar.css";
import client1 from "./run.jpeg"



class SearchBar extends Component {
  state = {
    
  };

  render() {
   

    
    return (
      <div className={classes.SearchBar}>
        <center>
        <img
            src={client1}
            style={{
              width: "30%",
              height: "200px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          ></img>
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

export default SearchBar;