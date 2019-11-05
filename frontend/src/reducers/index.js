import { combineReducers } from 'redux';
import addtodoreducer from './addtodoreducer'
import loginreducer from '../reducers/loginreducer';
import registerreducer from "../reducers/registerreducer"
import getallreducer from '../reducers/getallreducer';
import gettodoreducer from './gettodoreducer';

export default combineReducers({
    loginreducer, registerreducer,user: getallreducer, addtodo:addtodoreducer,gettodo:gettodoreducer
});
