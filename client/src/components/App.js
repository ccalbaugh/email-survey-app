import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HeaderConnector } from "./Header/HeaderConnector";
import { Dashboard } from "./Dashboard";
import { Landing } from "./Landing";
import { SurveyNew } from "./surveys/SurveyNew";
import { UserProviderConnector } from "./UserProvider/UserProviderConnector";

export const App = () => {
  return (
    <UserProviderConnector>
      <BrowserRouter>
        <div className="container">
          <HeaderConnector />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </UserProviderConnector>
  );
};
