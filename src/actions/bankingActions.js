import actionTypes from './actionTypes';

export const deposit = (amount) => {
  return {
    type: actionTypes.DEPOSIT,
    payload: {
      amount,
    },
  };
};
export const withdraw = (amount) => {
  return {
    type: actionTypes.WITHDRAW,
    payload: {
      amount,
    },
  };
};
export const collectInterest = () => {
  return {
    type: actionTypes.COLLECT_INTEREST,
  };
};
export const deleteAccount = () => {
  return {
    type: actionTypes.DELETE_ACCOUNT,
  };
};
export const changeAccType = () => {
  return {
    type: actionTypes.CHANGE_ACC_TYPE,
  };
};
