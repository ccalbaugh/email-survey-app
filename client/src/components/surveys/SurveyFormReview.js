import React from "react";
import { connect } from "react-redux";
import { FORM_FIELDS } from "./formFields";
import { submitSurvey } from "../../actionCreators";
import { withRouter } from "react-router-dom";

const SurveyFormReviewBase = ({
  onCancel,
  formValues,
  submitSurvey,
  history
}) => {
  const fieldsToReview = FORM_FIELDS.map(({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {fieldsToReview}
      <button
        className="yellow darken-3 btn-flat white-text"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey<i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export const SurveyFormReview = connect(
  mapStateToProps,
  { submitSurvey }
)(withRouter(SurveyFormReviewBase));
