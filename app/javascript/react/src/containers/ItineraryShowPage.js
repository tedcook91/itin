import React, { Component } from 'react'
import DayContainer from '../containers/DayContainer'


class ItineraryShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewDay: false,
      activity: {},
      body: {}

    }
    // this.addDay = this.addDay.bind(this)
    this.toggleShowNewDay = this.toggleShowNewDay.bind(this)
  }

  toggleShowNewDay() {
    this.setState({
      showNewDay: !this.state.showNewDay
    })
  }

  render() {

    return(
      <div>
        <DayContainer
          activityType={this.state.activityType}
          body={this.state.body}
          toggleShowNewDay={this.toggleShowNewDay}
          showNewDay={this.state.showNewDay}
        />
      </div>
    )
  }
}

export default ItineraryShowPage
