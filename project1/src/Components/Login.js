import React, { Component } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginSuc:false,
    
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  loginClick = () => {
    this.setState({ loginSuc: true });
};
  render() {

    if (this.state.loginSuc) {
      return <Redirect push to={"/"} />;
  }
    return (
      <div class= "container">
       
       <form action="/login" method="post">
       <h3>Login Page</h3>
        <label for="username">Enter Username:</label>
        <input type="text" placeholder="punarvavyas@gmail.com" name="username" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>

        <label for="pass_word">Password</label>
        <input type="password" placeholder="Enter Password" name="password" required/>
            
        <button type="submit" onClick={this.loginClick}  style={{backgroundColor:"#000000"}}>Login</button>
        <div class="container" style={{backgroundColor:"#F2F3F4" }}>
        
        <span class="fgpsw"> <a href="#" >Forgot Password?</a></span>
      <p>Don't have an account? <a href="/registration">Register</a>.</p>
      </div>
        </form>

      
  </div>
    );
  }
}

export default Login;