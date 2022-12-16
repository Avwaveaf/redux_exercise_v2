import { ActionTypes } from "./action";

export const counterReducer = (counter = 0, action = {}) => { 
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return counter += 1
        case ActionTypes.DECREMENT:
            return counter -= 1
        case ActionTypes.RESET:
            return 0
        default:
            return counter
    }
};