import userConstants from '../constants/user';

export const setUserCallbackSuccess = (user) => {
    return {
        type: userConstants.GET_USER_SUCCESS,
        payload: user
    }
}

export const setAuthCallbackError = (errorMessage) => {
    return {
        type: userConstants.GET_USER_FAILED,
        payload: errorMessage
    }
}