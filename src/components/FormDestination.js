import React, {Component} from 'react'

function FormDestination (props){
    // FormContainer sends props to FormComponent
    // props contains the method "changeHandler" and the object "data"
    console.log('FormComponent.js now received props:', props);
    return (
        <main>
          <hr/>
          <form>
            <label> <b>DESTINATION</b>
              <br />
              <select
                value={props.data.destination}
                onChange={props.changeHandler}
                name='destination'
              >
                <option value="">-- Please Choose a destination --</option>
                <option value='moon'>Moon</option>
                <option value='pluto'>Pluto</option>
                <option value='encelado'>Encelado</option>
                <option value='phobos'>Phobos</option>
                <option value='europa'>Europa</option>
              </select>
            </label>
          </form>
        </main>
        )  
};

export default FormDestination
