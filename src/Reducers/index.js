import {combineReducers} from 'redux';
import login from './login';
import shops from './shops';
import systems from './systems';
import users from './users';
import staffs from './staffs';
import positions from './positions';
import drinks from './drinks';
import cart from './cart';

const appReducers = combineReducers({
    login,
    shops,
    systems,
    users,
    staffs,
    positions,
    drinks,
    cart
})

export default appReducers;