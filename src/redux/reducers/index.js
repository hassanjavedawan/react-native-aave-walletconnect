/** @format */

// redux/reducers/countReducer.js
const initialState = {
  allowance: '0',
  loading: false,
  errorText: '',
  successText: '',
};

export default (state = initialState, action) => {
  console.log('reducers  |==>', action);
  switch (action.type) {
    case 'ALLOWANCE':
      return {
        ...state,
        allowance: action.payload.allowance,
      };

    case 'LOADING':
      return {
        ...state,
        loading: action.payload.loading,
      };
    case 'ERROR':
      return {
        ...state,
        errorText: action.payload.errorText,
      };
    case 'SUCCESS':
      return {
        ...state,
        successText: action.payload.successText,
      };

    default:
      return state;
  }
};
