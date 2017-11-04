import React, { Component } from 'react'
import TextInputField from "../components/TextInputField";


class ItineraryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      notes:""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value })
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      name:"",
      notes:""
    })
  };


  handleSubmit(event) {
    event.preventDefault();
    const formPayload = {
        name: this.state.name,
        notes: this.state.notes
    }
    this.props.addItin(formPayload)
    this.handleClearForm(event);
  }

  render() {
    return(
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="medium-4 cell">
            <form className="callout" onSubmit={this.handleSubmit}>
              <TextInputField
                content={this.state.name}
                label="Itinerary Name"
                name="name"
                handleChange={this.handleChange}
              />
              <TextInputField
                content={this.state.notes}
                label="Itinerary Notes"
                name="notes"
                handleChange={this.handleChange}
              />

              <div className="submit-button">
                <input className= "button" type="submit" value="Submit"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ItineraryForm;
