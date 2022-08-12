import { combineReducers } from "redux";
import isAddEdit from "./Reducer1";
import Reducer2 from "./Reducer2";

const rootReducer = combineReducers({
    isAddEdit,
    Reducer2
  });

  export default rootReducer;