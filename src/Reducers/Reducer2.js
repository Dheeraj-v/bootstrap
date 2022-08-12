const Reducer2 = function Reducer2(state = {}, action) {
    switch (
        action.type // NOSONAR
    ) {
        case 'SET_DELETE':
            return {
                ...state,
                isAddorEdit: true,
            };
        case 'RESET_DELETE':
            return {
                ...state,
                isAddorEdit: false,
            };
        default:
            return state;
    }
};

Reducer2.reducerName = 'iSDelete';

export default Reducer2;