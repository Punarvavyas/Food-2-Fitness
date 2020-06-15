import React, { Component } from "react";
import "./Registration.css";
import { Redirect } from "react-router-dom";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      Repassword:"",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  
  render() {

        
    return (
      <div class= "container row">
       
       <form action="/login" method="post">
       <div class="row">
            <h3>Registration Page</h3>
        </div>
        <div class="row">
        <label for="username">Enter Username:</label>
        </div>
        <div class="row">
        <input type="text" placeholder="punarvavyas" name="username" required/>
        </div>
        <label for="email">Enter Email:</label>
        <input type="email" placeholder="Enter Email" name="email" required/>

        <label for="password">Password</label>
        <input type="password" placeholder="Enter Password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>

        <label for="Repassword">Confirm Password</label>
        <input type="password" placeholder="Reenter Password" name="Repassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
            
        <button type="submit" style={{backgroundColor:"#000000"}}>Register</button>
        <div class="container" style={{backgroundColor:"#F2F3F4" }}>
        
        <span class="fgpsw"> <a href="#">Forgot Password?</a></span>
      <p> <a href="/login">Already have an account?</a>.</p>
      </div>
        </form>

      
  </div>
    );
  }
}

export default Registration;