import ActionType1 from "../ActionTypes/ActionType1";

 const setAddEditAction = (payload) => {
     console.log(payload)
     return({
    type: "SET_ADD_EDIT",
    payload,
});
 }

export {setAddEditAction};
