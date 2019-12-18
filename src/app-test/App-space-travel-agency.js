import React, {Component} from "react"

/*
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
*/

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            destination: '',
            noBucatini: false,
            noRigatoni: false,
            noCarbonara: false           
        }
        this.changeHandler = this.changeHandler.bind(this) //changeHandler MUST be bound because alters the component's state
    }

    changeHandler(event){
        console.log('event.target:', event.target);
        const {value, name, type, checked} = event.target;

        type === 'checkbox' ? //(if condition) ? (is true - DoStuff) : (is false - DoOtherStuff)
        this.setState( {[name]: checked})
        : this.setState({[name]: value})                                 
    }
        
    render() {
        console.log('State: ', this.state);
        return (
            <main>
                <form>

                  <input
                    // type='text' 
                    name='firstName'
                    value={this.state.firstName}
                    placeholder='First Name'
                    onChange={this.changeHandler}
                  />
                  <br /><br />
    
                  <input
                    // type='text' 
                    name='lastName'
                    value={this.state.lastName}
                    placeholder='Last Name'
                    onChange={this.changeHandler}
                  />
                  <br /><br />

                  <input
                   // type='text'
                    name='age'
                    value={this.state.age}
                    placeholder='Age'
                    onChange={this.changeHandler}
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
                        checked={this.state.gender === 'male'}
                        onChange={this.changeHandler}
                      />MALE
                    </label>
                    <br />
                    <label>                      
                      <input
                        type='radio'
                        name='gender'
                        value='female'
                        checked={this.state.gender === 'female'}
                        onChange={this.changeHandler}
                      />FEMALE
                    </label>
                    <br />

                  </label>
                  
                    <br />
                    
                    {/* Create select box for destination here */}

                  <label> <b>DESTINATION</b>
                    <br />
                    <select
                      value={this.destination}
                      onChange={this.changeHandler}
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
                        onChange={this.changeHandler}
                        checked={this.state.noBucatini}
                      />Bucatini
                    </label>
                    
                    <br />
                    
                    <label>
                      <input
                        type='checkbox'
                        name='noRigatoni'
                        onChange={this.changeHandler}
                        checked={this.state.noRigatoni}
                      />Rigatoni
                    </label>
                    
                    <br />
                    
                    <label>
                      <input
                        type='checkbox'
                        name='noCarbonara'
                        onChange={this.changeHandler}
                        checked={this.state.noCarbonara}
                      />Carbonara
                    </label>

                  </label>
                    

                    
                    <br /><br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName} </p>
                <p>Your age: {this.state.age} </p>
                <p>Your gender: {this.state.gender} </p>
                <p>Your destination: {this.state.destination} </p>
                <p><b>YOUR DIETARY RESTRICTIONS:</b> 
                  <p>Bucatini: {this.state.noBucatini ? 'yes' : 'no'} </p> 
                  <p>Rigatoni: {this.state.noRigatoni ? 'yes' : 'no'} </p>
                  <p>Carbonara: {this.state.noCarbonara ? 'yes' : 'no'} </p>
                </p>
            </main>
        )
    }
}

export default App
