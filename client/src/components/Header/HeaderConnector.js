import { connect } from "react-redux";
import { Header } from "./Header";

const mapStateToProps = ({ auth }) => ({ auth });

export const HeaderConnector = connect(mapStateToProps)(Header);
