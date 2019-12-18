import React, {Component} from 'react'

function FormDietRestrictions (props){
    // FormContainer sends props to FormComponent
    // props contains the method "changeHandler" and the object "data"
    console.log('FormDietRestrictions.js now received props:', props);
    return (
        <main>
          <hr/>
          <form>
            <label>
              <b>DIETARY RESTRICTIONS</b>
              <br />                    
              <label>
                <input
                  type='checkbox'
                  name='noFood1'
                  onChange={props.changeHandler}
                  checked={props.data.noFood1}
                />Avoid Food Type 1       
              </label>                   
              <br />
              <label>
                <input
                  type='checkbox'
                  name='noFood2'
                  onChange={props.changeHandler}
                  checked={props.data.noFood2}
                />Avoid Food Type 2
              </label>                    
              <br />
              <label>
                <input
                  type='checkbox'
                  name='noFood3'
                  onChange={props.changeHandler}
                  checked={props.data.noFood3}
                />Avoid Food Type 3
              </label>
            </label>
          </form>
        </main>
        )  
};
export default FormDietRestrictions
