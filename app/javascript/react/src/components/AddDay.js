import React, { Component } from 'react';

class AddDay extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div><button type="button" name="add-day" label="add-day" onClick={this.props.addDay}>+Add Day</button></div>
    )
  }
}

export default AddDay
