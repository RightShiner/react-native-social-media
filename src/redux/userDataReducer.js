export const USER_DETAILS = 'USER_DETAILS';
export const REGISTERED = 'REGISTERED';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const PROFILE_DATA = 'PROFILE_DATA';
export const DASHBOARD = 'DASHBOARD';

export const initialState = {
  login: false,
  register: false,
  dashboard: false,
  user_details: {},
  profile_data: {},
};

export const setLogin = value => ({
  type: LOGIN,
  payload: value,
});

export const setRegistered = value => ({
  type: REGISTERED,
  payload: value,
});

export const setUserDetails = value => ({
  type: USER_DETAILS,
  payload: value,
});

export const setProfileData = value => ({
  type: PROFILE_DATA,
  payload: value,
});

export const setLogout = () => ({
  type: LOGOUT,
});

export const setDashboard = value => ({
  type: DASHBOARD,
  payload: value,
});

export const UserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        login: action.payload,
      };
    }
    case REGISTERED: {
      return {
        ...state,
        register: action.payload,
      };
    }
    case USER_DETAILS: {
      return {
        ...state,
        user_details: action.payload,
      };
    }
    case PROFILE_DATA: {
      return {
        ...state,
        profile_data: action.payload,
      };
    }
    case DASHBOARD: {
      return {
        ...state,
        dashboard: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        login: false,
        register: false,
        user_details: {},
        profile_data: {},
      };
    }
    default:
      return state;
  }
};
