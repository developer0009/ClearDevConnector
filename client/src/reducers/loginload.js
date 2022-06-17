import { LOGIN_LOAD } from "../action/types";
const initialState = {
  load: true,
};
export const loadLogin = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOAD:
      return {
        load: false,
      };
    default:
      return state;
  }
};
