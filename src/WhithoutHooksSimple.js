import React, { Component } from "react";

// You need a class component to manage your local state
class WithoutHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // Not merge state
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

export default WithoutHooks;
