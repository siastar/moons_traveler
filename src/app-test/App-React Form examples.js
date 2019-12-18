import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName:'',
            lastName:'',
            telephone:'',
            gender:'not declared gender',
            favColor: 'unknown',
            isPresent: false
        }
        this.handleChange = this.handleChange.bind(this) //handleChange MUST be bound because alters the component's state
    }

    handleChange(event) {
        console.log('changing state...');
        console.log('event:', event);
        const {name, value, type, checked} = event.target
        console.log('event.target: ', event.target);
        //comment: 
        type === 'checkbox' ?
            this.setState({[name]: checked})
        :
            this.setState({[name]: value}) //comment: [event.target.name]: event.target.value // [event.target.info] MUST to be wrapped in []
        
    }
 // a list to the jsx/html attributes-properties https://reactjs.org/docs/dom-elements.html   
    render() {
        return (
            <form>
              <input
                type='text'
                name='firstName'
                placeholder='first name'
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <br />
              <input
                type='text'
                name='lastName'
                placeholder='last name'
                value={this.state.lastName}
                onChange={this.handleChange}
              />
              <br />
              <input
                type='text'
                name='telephone'
                placeholder='telephone'
                value={this.state.telephone}
                onChange={this.handleChange}
              />     
              <br />
              <textarea
               // type='text'*
                value='default text...'
                onChange={this.handleChange}
              />
              <br />
              <label>
                <input
                  type='checkbox'
                  name='isPresent'
                  checked={this.state.isPresent}
                  onChange={this.handleChange}                
                />is present?
              </label>
              <br />

              
              <br />
              <label>
                <input

                  type='radio'
                  name='gender'
                  value='male'
                  checked={this.state.gender === 'male'}
                  onChange={this.handleChange}                
                />male
              </label>
              <br />

 <br />
              <label>
                <input
                  type='radio'
                  name='gender'
                  value='female'
                  checked={this.state.gender === 'female'}
                  onChange={this.handleChange}                
                />female
              </label>
              <br />
              <br />
              
              <label> Favorite color: </label>
              
              <select
                value={this.favColor}
                onChange={this.handleChange}
                name='favColor'
              >   
                <option value='blue'> blue </option>
                <option value='red'> red </option>
                <option value='yellow'> yellow </option>
                <option value='green'> green </option>
                <option value='purple'> purple </option>
                
              </select>
              

              

              <h1>{this.state.firstName} {this.state.lastName} {this.state.telephone}</h1>
              <h3>is a {this.state.gender} person</h3>
              <h3>and is favourite color is {this.state.favColor} </h3>
              

            </form>
        )
    }
}

export default App
