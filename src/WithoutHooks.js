import React, { Component } from "react";

// You need a class component to manage your local state
class WithoutHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      count: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.city !== this.state.city) {
      this.setState({ count: prevState.count + 1 });
    }
  }

  componentWillUnmount() {
    this.setState({ city: "", count: 0 });
  }

  handleChange(event) {
    // Not merge state
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
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
        <br />
        {this.state.count > 0 && (
          <span>Number of mouse enter {this.state.count}</span>
        )}
      </div>
    );
  }
}

export default WithoutHooks;
