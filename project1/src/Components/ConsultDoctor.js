import React, { Component } from "react";
import "./ConsultDoctor.css";
import { Redirect } from "react-router-dom";
import runn from "./doc.jpg"

class ConsultDoctor extends Component {
  
  
  render() {
    return (
        
        <div class="row">
                <h1>Consult a Doctor</h1>
        <div class="column">
          <div class="card">
              <h2>Doctor1</h2>
          <div><img
            src={runn}
            style={{
              width: "100px",
              height: "100px",
             
              
            }}

          ></img></div>
          <div>
          <p>Doctor Details</p>
            <p>Doctor Address and Timings</p>
            <button  style={{backgroundColor:"#000000"}}>Book Appointment</button>

          </div>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
              <h3>Doctor2</h3>
          <div><img
            src={runn}
            style={{
              width: "100px",
              height: "100px",
             
              
            }}

          ></img></div>
          <div>
          <p>Doctor Details</p>
            <p>Doctor Address and Timings</p>
            <button  style={{backgroundColor:"#000000"}}>Book Appointment</button>

          </div>
          </div>
        </div>
        
        <div class="column">
          <div class="card">
            <h3>Doctor3</h3>
            <div><img
            src={runn}
            style={{
              width: "100px",
              height: "100px",
             
              
            }}

          ></img></div>
          <div>
          <p>Doctor Details</p>
            <p>Doctor Address and Timings</p>
            <button  style={{backgroundColor:"#000000"}}>Book Appointment</button>

          </div>
            
          </div>
        
        
        </div>
      </div>

      
  
    );
  }
}

export default ConsultDoctor;