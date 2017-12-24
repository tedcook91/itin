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
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value})
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      event:"",
      body:"",
      location:""
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const formPayload = {
      event: this.state.event,
      body: this.state.body,
      location: this.state.location,
    }
    this.props.addActivity(formPayload);
    this.handleClearForm(event);
  }

  render() {
    // console.log(this.dayId)
    return(
      <div className="show-form">
        <form onSubmit={this.handleSubmit}>
          <TextInputField
            content={this.state.event}
            label="Event"
            name="event"
            handleChange={this.handleChange}
          />
          <TextInputField
            content={this.state.location}
            label="Location"
            name="location"
            handleChange={this.handleChange}
          />
          <TextInputField
            content={this.state.body}
            label="Notes"
            name="body"
            handleChange={this.handleChange}
          />
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default ActivityForm;
