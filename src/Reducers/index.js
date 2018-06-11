import {combineReducers} from 'redux';
import login from './login';
import shops from './shops';
import systems from './systems';
import users from './users';
import staffs from './staffs';
import positions from './positions';

const appReducers = combineReducers({
    login,
    shops,
    systems,
    users,
    staffs,
    positions
})

export default appReducers;