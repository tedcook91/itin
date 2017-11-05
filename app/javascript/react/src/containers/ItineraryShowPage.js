import React, { Component } from 'react'
// import DayContainer from '../containers/DayContainer'


class ItineraryShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.match.params.id,
      addDay: false
    }
    this.fetchUser = this.fetchUser.bind(this)
    this.addDay = this.addDay.bind(this)
  }

  componentDidMount() {
    this.fetchUser()
    this.addDay()
  }



  // toggleShowNewDay() {
  //   this.setState({
  //     showNewDay: !this.state.showNewDay
  //   })
  // }



  render() {

    return(
      <div>
        This is the Itin Show Page
      </div>
    )
  }
}

export default ItineraryShowPage
{/* <DayContainer
  activityType={this.state.activityType}
  body={this.state.body}
  toggleShowNewDay={this.toggleShowNewDay}
  showNewDay={this.state.showNewDay}
/> */}
