import React from "react";
import TextInputField from "../components/TextInputField";

class ActivityForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event:"",
      body:"",
      location:""
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
      event: this.state.event,
      body: this.state.body,
      location: this.state.location
    }
    // this.props.addActivity(formPayload)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <TextInputField
          content={this.state.event}
          label="Event"
          name="event"
          handleChange={this.handleChange}
        />
        <TextInputField
          content={this.state.body}
          label="Body"
          name="body"
          handleChange={this.handleChange}
        />
        <TextInputField
          content={this.state.location}
          label="Location"
          name="location"
          handleChange={this.state.handleChange}
        />

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default ActivityForm;
