import { connect } from "react-redux";
import { Payments } from "./Payments";
import { handleToken } from "../../actionCreators";

export const PaymentsConnector = connect(
  null,
  { handleToken }
)(Payments);
