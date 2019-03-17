import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { SurveyField } from "./SurveyField";
import { Link } from "react-router-dom";
import { validateEmails } from "../../utils/validateEmails";
import { FORM_FIELDS } from "./formFields";

export class SurveyFormBase extends Component {
  renderFields() {
    return FORM_FIELDS.map(({ label, name }) => {
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
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  FORM_FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value`;
    }
  });

  errors.emails = validateEmails(values.emails);

  return errors;
}

export const SurveyForm = reduxForm({
  form: "surveyForm",
  validate,
  destroyOnUnmount: false
})(SurveyFormBase);
