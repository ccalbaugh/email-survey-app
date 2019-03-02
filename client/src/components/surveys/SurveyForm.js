import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { SurveyField } from "./SurveyField";

export class SurveyFormBase extends Component {
  renderFields() {
    return (
      <>
        <Field
          label="Survey Title"
          type="text"
          name="surveyTitle"
          component={SurveyField}
        />
        <Field
          label="Subject line"
          type="text"
          name="subjectLine"
          component={SurveyField}
        />
        <Field
          label="Email Body"
          type="text"
          name="emailBody"
          component={SurveyField}
        />
        <Field
          label="Recipient List"
          type="text"
          name="recipientList"
          component={SurveyField}
        />
      </>
    );
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
