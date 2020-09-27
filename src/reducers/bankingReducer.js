import actionTypes from '../actions/actionTypes';

const initialState = {
  balance: 0,
  isSavings: false,
};
const bankingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.DEPOSIT:
      return {
        ...state,
        balance: state.balance + payload.amount,
      };
    case actionTypes.WITHDRAW:
      return {
        ...state,
        balance: state.balance - payload.amount,
      };
    case actionTypes.COLLECT_INTEREST:
      return {
        ...state,
        balance: state.balance * 1.03,
      };
    case actionTypes.DELETE_ACCOUNT:
      return {
        ...state,
        balance: 0,
      };
    case actionTypes.CHANGE_ACC_TYPE:
      return {
        ...state,
        isSavings: !state.isSavings,
      };
    default:
      return state;
  }
};

export default bankingReducer;
