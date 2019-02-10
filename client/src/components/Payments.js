import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

export class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500}
        name="Email Survey App"
        description="$5 for 5 email credits"
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}
