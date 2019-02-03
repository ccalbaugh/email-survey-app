export default (state = {}, action) => {
  const actionHandlers = {};

  const reducer = actionHandlers[action.type];

  return reducer ? reducer(state, action) : state;
};
