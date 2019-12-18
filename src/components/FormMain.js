import React, {Component} from 'react'


function FormMain (props){
    // FormContainer sends props to FormComponent
    // props contains the method "changeHandler" and the object "data"
    console.log('FormMain.js now received props:', props);
    return (
        <main>
          <form>
            <input
        // type='text' 
              name='firstName'
              value={props.data.firstName}
              placeholder='First Name'
              onChange={props.changeHandler}
            />
            <br /><br />
            <input
        // type='text' 
              name='lastName'
              value={props.data.lastName}
              placeholder='Last Name'
              onChange={props.changeHandler}
            />
            <br /><br />
            <input
        // type='text'
              name='age'
              value={props.data.age}
              placeholder='Age'
              onChange={props.changeHandler}
            />
          </form>
        </main>
    )  
};
export default FormMain
