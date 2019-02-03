import React, { Component } from "react";

export class UserProvider extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return this.props.children;
  }
}
