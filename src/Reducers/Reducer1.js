const isAddEdit = function Reducer1(state = {isAddorEdit:false}, action) {
    switch (
        action.type // NOSONAR
    ) {
        case 'SET_ADD_EDIT_SUCCESS':
            console.log(state)
            return {
                ...state,
                isAddorEdit: true,
            };
        case 'RESET_ADD_EDIT':
            return {
                ...state,
                isAddorEdit: false,
            };
        default:
            return state;
    }
};


export default isAddEdit;