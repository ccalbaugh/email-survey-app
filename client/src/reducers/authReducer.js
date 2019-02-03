import { FETCH_USER } from "../actions/index";

const fetchUser = (state, { currentUser }) => currentUser || false;

export default (state = null, action) => {
  const actionHandlers = {
    [FETCH_USER]: fetchUser
  };

  const reducer = actionHandlers[action.type];

  return reducer ? reducer(state, action) : state;
};
