import React, { Component } from 'react';
import DayForm from "../components/DayForm";
import DaysIndex from "../components/DaysIndex"


class DayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: []
    }
    // this.addActivity = this.addActivity.bind(this)

  }

  render() {
    // let dayForm = null
    // if (this.props.showNewDay) {
    //   dayForm = <DayForm addDay ={this.addDay} />
    // }
    return(
      <div>
        <h1>Days of Trip</h1>
        <hr />
        <DaysIndex
          days={this.state.days}
        />
        <hr />
        <DayForm
          // addNewDay={addNewDay}
        />
      </div>
    )
  }
}

export default DayContainer
