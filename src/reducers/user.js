import userConstants from '../constants/user';

const InitialState = {
    userId: "",
    avatar: "",
    status: "FAILED",
    readingList: "",
    friendList: "",
    login: "",
    username: "",
    level: "",
    experience: ""
}

export default (state = InitialState, action) => {
    switch(action.type) {
        case userConstants.GET_USER_SUCCESS:
            const payload = action.payload;
            return {
                ...state,
                ...payload,
                status: "SUCCESS"
            }
        case userConstants.GET_USER_FAILED:
            return {
                ...state,
                status: "FAILED",
                errorMessage: action.payload
            }
        default:
            return state;
    }
}