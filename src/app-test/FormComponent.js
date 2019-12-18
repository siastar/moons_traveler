import React, {Component} from 'react'


function FormComponent (props){
    // FormContainer sends props to FormComponent
    // props contains the method "changeHandler" and the object "data"
    console.log('FormComponent.js now received props:', props);
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
                    <br /><br />

                    {/* Create radio buttons for gender here */}

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
                    {/* Create select box for destination here */}
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
                    <br /><br />
                    {/* Create check boxes for dietary restrictions here */}
                    <label> <b>DIETARY RESTRICTIONS</b>
                    <br />                    
                    <label>
                      <input
                        type='checkbox'
                        name='noBucatini'
                        onChange={props.changeHandler}
                        checked={props.data.noBucatini}
                      />Bucatini
                    </label>                   
                    <br />
                    <label>
                      <input
                        type='checkbox'
                        name='noRigatoni'
                        onChange={props.changeHandler}
                        checked={props.data.noRigatoni}
                      />Rigatoni
                    </label>                    
                    <br />
                    <label>
                      <input
                        type='checkbox'
                        name='noCarbonara'
                        onChange={props.changeHandler}
                        checked={props.data.noCarbonara}
                      />Carbonara
                    </label>
                  </label>
                    <br /><br />
                    <button>Submit</button>
                </form>

                  <hr />
                  
                <h2>Entered information:</h2>
                <p>Your name: {props.data.firstName} {props.data.lastName} </p>
                <p>Your age: {props.data.age} </p>
                <p>Your gender: {props.data.gender} </p>
                <p>Your destination: {props.data.destination} </p>
                <p><b>YOUR DIETARY RESTRICTIONS:</b> 
                  <p>Bucatini: {props.data.noBucatini ? 'yes' : 'no'} </p> 
                  <p>Rigatoni: {props.data.noRigatoni ? 'yes' : 'no'} </p>
                  <p>Carbonara: {props.data.noCarbonara ? 'yes' : 'no'} </p>
                </p>
            </main>
        )  
};


export default FormComponent
