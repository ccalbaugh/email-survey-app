import React from "react";
import { connect } from "react-redux";
import { FORM_FIELDS } from "./formFields";

const SurveyFormReviewBase = ({ onCancel, formValues }) => {
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
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export const SurveyFormReview = connect(mapStateToProps)(SurveyFormReviewBase);
