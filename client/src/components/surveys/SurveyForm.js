import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

export class SurveyFormBase extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <Field type="text" name="surveyTitle" component="input" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export const SurveyForm = reduxForm({
  form: "surveyForm"
})(SurveyFormBase);
