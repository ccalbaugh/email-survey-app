import React from "react";
import PropTypes from "prop-types";
import StripeCheckout from "react-stripe-checkout";

export const Payments = props => {
  return (
    <StripeCheckout
      amount={500}
      name="Email Survey App"
      description="$5 for 5 email credits"
      token={token => props.handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};

Payments.propTypes = {
  handleToken: PropTypes.func.isRequired
};
