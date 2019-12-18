import React, {Component} from 'react'
import FormMain from "./components/FormMain.js"
import FormGender from "./components/FormGender.js"
import FormDestination from "./components/FormDestination.js"
import FormDietRestrictions from "./components/FormDietRestrictions.js"
import FormTextBox from "./components/FormTextBox.js"
import FormDisplay from "./components/FormDisplay.js"

class FormContainer extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',       //accessible via FormMain              name='firstName'    value={props.data.firstName}
            lastName: '',        //accessible via FormMain              name='lastName'     value={props.data.lastName}
            age: '',             //accessible via FormMain              name='age'          value={props.data.age}
            gender:'',           //accessible via FormGender            name='gender'       value='female/male'
            destination: '',     //accessible via FormDestination       name='destination'  value={props.data.destination}
            notes:'',            //accessible via FormTextBox           name='notes'        value={props.data.notes}
            noFood1: false,      //accessible via FormDietRestrictions  name='notes'        type='checkbox'
            noFood2: false,      //accessible via FormDietRestrictions  name='notes'        type='checkbox'
            noFood3: false       //accessible via FormDietRestrictions  name='notes'        type='checkbox'    
        }
        this.changeHandler = this.changeHandler.bind(this) //changeHandler MUST be bound because alters the component's state
    }

    changeHandler(event){
        console.log('event.target:', event.target);
        const {value, name, type, checked} = event.target;
        type === 'checkbox' ? //(if condition) ? (is true - DoStuff) : (is false - DoOtherStuff)
        this.setState({[name]: checked})
        : this.setState({[name]: value})                                 
    }   //https://medium.com/@bretdoucette/understanding-this-setstate-name-value-a5ef7b4ea2b4
        
    render() {
        console.log('State: ', this.state);
        return (
            <div>
              <FormMain
                changeHandler={this.changeHandler}
                data={this.state}
              />
              <FormGender
                changeHandler={this.changeHandler}
                data={this.state}
              />
              <FormDestination
                changeHandler={this.changeHandler}
                data={this.state}
              />
              <FormDietRestrictions
                changeHandler={this.changeHandler}
                data={this.state}
              />
              <FormTextBox
                changeHandler={this.changeHandler}
                data={this.state}
              />
              <FormDisplay
             // changeHandler={this.changeHandler}
                data={this.state}
              />
        </div>           
        )
    }
}
export default FormContainer
