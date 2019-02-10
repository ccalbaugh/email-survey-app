import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HeaderConnector } from "./Header/HeaderConnector";
import { Dashboard } from "./Dashboard";
import { Landing } from "./Landing";
import { SurveyNew } from "./SurveyNew";
import { UserProviderConnector } from "./UserProvider/UserProviderConnector";

export const App = () => {
  return (
    <UserProviderConnector>
      <div className="container">
        <BrowserRouter>
          <div>
            <HeaderConnector />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    </UserProviderConnector>
  );
};
