import React, {Component} from 'react'

function FormTextBox (props){
    // FormContainer sends props to FormComponent
    // props contains the method "changeHandler" and the object "data"
    console.log('FormTextBox.js now received props:', props);
    return (
          <form>
            <label> NOTES
            <br />
              <textarea
                type='text'
                name='notes' //passes the name of the field (notes)
                value={props.data.notes} //passes the value to set in the state
                placeholder='Add Notes...'
                onChange={props.changeHandler}
              />
            </label>
          </form>        
        )  
};

export default FormTextBox
