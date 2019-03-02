import React from "react";
import { Field } from "redux-form";

export const SurveyField = ({ input, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
