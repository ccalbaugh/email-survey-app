import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Header } from "./Header";
import { Landing } from "./Landing";
import { SurveyNew } from "./SurveyNew";

export const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};
