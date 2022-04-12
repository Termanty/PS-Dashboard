import { LOGIN_USER, LOGOUT_USER } from "./actions";

const initialState = {
  name: "Tero",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...action.payload };
    case LOGOUT_USER:
      return { user: null };
    default:
      return state;
  }
};

export default userReducer;
