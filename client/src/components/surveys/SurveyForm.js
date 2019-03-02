import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { SurveyField } from "./SurveyField";

export class SurveyFormBase extends Component {
  renderFields() {
    return <Field type="text" title="SurveyField1" component={SurveyField} />;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export const SurveyForm = reduxForm({
  form: "surveyForm"
})(SurveyFormBase);
