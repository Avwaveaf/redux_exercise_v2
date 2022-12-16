export const ActionTypes = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    RESET : "RESET"
};
export const incrementCounterActionCreator = () => { 
    return {
        type:ActionTypes.INCREMENT
    };
};
export const decrementCounterActionCreator = () => { 
    return {
        type:ActionTypes.DECREMENT
    }
};
export const resetCounterActionCreator = () => {
    return {
        type:ActionTypes.RESET
    }
 };