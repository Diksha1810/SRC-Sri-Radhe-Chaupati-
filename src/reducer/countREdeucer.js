import { INCREMENT, DECREMENT } from "../action";

const initialState = {};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      };
    case DECREMENT:
      return {
        ...state,
        [action.payload]: Math.max((state[action.payload] || 0) - 1, 0),
      };
    default:
      return state;
  }
};
export default countReducer;