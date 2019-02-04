import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    const leftHeaderContent =
      this.props.auth === null ? (
        ""
      ) : this.props.auth ? (
        <a href="/api/logout">Logout</a>
      ) : (
        <a href="/auth/google">Login With Google</a>
      );

    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            EmailSurveyApp
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>{leftHeaderContent}</li>
          </ul>
        </div>
      </nav>
    );
  }
}
