import { RESTAURANT_SIGNUP } from '../actions/types';

const initialState = {
  user: {},
};

// eslint-disable-next-line func-names
export default function (state = initialState, action) {
  if (action.type === RESTAURANT_SIGNUP) {
    return {
      ...state,
      user: action.payload,
    };
  }
  return state;
}
