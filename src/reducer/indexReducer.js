import countReducer from "./incReducer";
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    countReducer
})
export default rootReducer