import React, {Component} from 'react'


function FormDisplay (props){
    // FormContainer sends props to FormComponent
    // props contains the method "changeHandler" and the object "data"
    // console.log('FormDisplay.js now received props:', props);
    return (
        <main>
          <hr/>
          <div>        
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName} </p>
            <p>Your age: {props.data.age} </p>
            <p>Your gender: {props.data.gender} </p>
            <p>Your destination: {props.data.destination} </p>
            <p>Your notes: {props.data.notes} </p>
            <p><b>YOUR DIETARY RESTRICTIONS:</b> 
              <p>Food 1: {props.data.noFood1 ? 'no' : 'yes'} </p> 
              <p>Food 2: {props.data.noFood2 ? 'no' : 'yes'} </p>
              <p>Food 3: {props.data.noFood3 ? 'no' : 'yes'} </p>
            </p>
            
          </div>
        </main>
        )  
};

export default FormDisplay
