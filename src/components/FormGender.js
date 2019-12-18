import React, {Component} from 'react'

function FormGender (props){
    // FormContainer sends props to FormComponent
    // props contains the method "changeHandler" and the object "data"
    console.log('FormGender.js now received props:', props);
    return (
        <main>
           <hr/>
          <form>
            <label>
              <b>GENDER</b>
              <br />
              <label>                
                <input
                  type='radio'
                  name='gender'
                  value='male'
                  checked={props.data.gender === 'male'}
                  onChange={props.changeHandler}
                />MALE
              </label>
              <br />
              <label>                      
                <input
                  type='radio'
                  name='gender'
                  value='female'
                  checked={props.data.gender === 'female'}
                  onChange={props.changeHandler}
                />FEMALE
              </label>
              <br />
            </label>
            <br />                                       
          </form>
        </main>
        )  
};


export default FormGender
