import React, { Component } from 'react'
import TextInputField from "../components/TextInputField";


class ItineraryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itinName:"",
      itinNotes:""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value})
  }

  handleSubmit(event) {
    event.preventDefault()
    const formPayload = {
      itinName: this.state.itinName,
      itinNotes: this.state.itinNotes
    }
    this.props.addItin(formPayload)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <TextInputField
          content={this.state.itinName}
          label="Itinerary Name"
          name="itinName"
          handleChange={this.handleChange}
        />
        <TextInputField
          content={this.state.itinNotes}
          label="Itinerary Notes"
          name="itinNotes"
          handleChange={this.handleChange}
        />
        <div>
          <input type="submit" value="Submit"/>
        </div>
      </form>
    )
  }
}

export default ItineraryForm;
