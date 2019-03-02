import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { SurveyField } from "./SurveyField";

const FIELDS = [
  { label: "Survey Title", name: "surveyTitle" },
  { label: "Subject line", name: "subjectLine" },
  { label: "Email Body", name: "emailBody" },
  { label: "Recipient List", name: "recipientList" }
];

export class SurveyFormBase extends Component {
  renderFields() {
    return FIELDS.map(({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
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
