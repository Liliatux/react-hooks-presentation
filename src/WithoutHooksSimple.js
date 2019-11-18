import React, { Component } from "react";

export default class WithoutHooksSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form>
        <label>
          City:
          <input
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}
