import React, { Component } from "react";

export default class WithoutHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      count: -1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.city !== this.state.city) {
      this.setState({ count: prevState.count + 1 });
    }
  }

  componentWillUnmount() {
    this.setState({ city: "", count: -1 });
  }

  handleChange(event) {
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
