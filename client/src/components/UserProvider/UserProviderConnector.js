import { connect } from "react-redux";
import { UserProvider } from "./UserProvider";
import { fetchUser } from "../../actionCreators/index";

export const UserProviderConnector = connect(
  null,
  { fetchUser }
)(UserProvider);
