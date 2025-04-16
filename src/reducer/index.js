import { combineReducers } from 'redux';
import userDataReducer from "./userDataReducer";
import  dataReducer  from './dataReducer';

const rootReducer = combineReducers({
    // data: dataReducer,
    userDatas: userDataReducer
});

export default rootReducer;