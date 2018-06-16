import * as Types from '../Constants/ActionType';
import callApi from '../Utils/apiCaller';
import * as dataStorage from '../Constants/localStorage';

//Login
export const actFetchLogin = (dataLogin) => {
    return {
        type: Types.FETCH_LOGIN,
        dataLogin
    }
}

//Shop
export const actFetchShopRequest = () => {
    console.log('vào act shop')
    return (dispatch) => {
        return callApi('shops/get-list-name', 'GET', null, {
                'token': dataStorage.TOKEN
        }).then(res => {
                dispatch(actFetchShop(res.data.shopname))
            })
        }
    
}

export const actFetchShop = (shops) => {
    return {
        type: Types.FETCH_SHOP,
        shops
    }
}

export const actAddShopResquest = (shop) => {
    return dispatch => {
        return  callApi('shops/create', 'POST', shop , {
            'token': dataStorage.TOKEN     
        }).then(res => {
            console.log(res)
            dispatch(actAddShop(res.data.shop))
        })
    }
}

export const actAddShop = (shop) => {
    return {
        type: Types.ADD_SHOP,
        shop
    }
}

export const actUpdateShopResquest = (shop) => {
    return dispatch => {
        return callApi('shops/update', 'PUT', shop, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            dispatch(actUpdateShop(res.data.shop))
        })
    }
}

export const actUpdateShop = (shop) => {
    return {
        type: Types.UPDATE_SHOP,
        shop
    }
}

//System
export const actFetchSystemRequest = () => {
    return (dispatch) => {
        return callApi('systems/listsystem', 'GET', null, {
            'token': dataStorage.TOKEN
            }).then(res => {
                dispatch(actFetchSystem(res.data.system))
            })
        }
    
}

export const actFetchSystem = (systems) => {
    return {
        type: Types.FETCH_SYSTEM,
        systems
    }
}

export const actAddSystemResquest = (system) => {
    return dispatch => {
        return callApi('systems/create', 'POST', system, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            dispatch(actAddSystem(res.data.system))
        })
    }
}

export const actAddSystem = (system) => {
    return {
        type: Types.ADD_SYSTEM,
        system
    }
}

export const actUpdateSystemResquest = (system) => {
    return dispatch => {
        return callApi('systems/update', 'PUT', system, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            dispatch(actUpdateSystem(res.data.system))
        })
    }
}

export const actUpdateSystem = (system) => {
    return {
        type: Types.UPDATE_SYSTEM,
        system
    }
}

//User
export const actFetchAccountRequest = () => {
    console.log('vào act')
    return (dispatch) => {
        return callApi('users/listaccount', 'GET', null, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            dispatch(actFetchAccount(res.data.account))
        })
    }

}

export const actFetchAccount = (accounts) => {
    return {
        type: Types.FETCH_USER,
        accounts
    }
}

export const actAddUserResquest = (user) => {
    return dispatch => {
        return callApi('shops/create_boss', 'POST', user, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            dispatch(actAddUser(res.data.boss))
        })
    }
}

export const actAddUser = (user) => {
    return {
        type: Types.ADD_USER,
        user
    }
}

export const actUpdateUserResquest = (system) => {
    return dispatch => {
        return callApi('user/update-profileBoss', 'PUT', system, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            dispatch(actUpdateUser(res.data.boss))
        })
    }
}

export const actUpdateUser = (boss) => {
    return {
        type: Types.UPDATE_USER,
        boss
    }
}

//Position
export const actFetchPositionRequest = () => {
    console.log('vao position')
    return (dispatch) => {
        return callApi('positions/list-position', 'POST', {
            position_shop_id: dataStorage.DATA_USER.user_shop_id
        } , {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log('res postion', res)
            dispatch(actFetchPosition(res.data.position))
        })
    }
}

export const actFetchPosition = (positions) => {
    return {
        type: Types.FETCH_POSITION,
        positions
    }
}

export const actAddPositionResquest = (position) => {
    return dispatch => {
        return callApi('positions/create', 'POST', position, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            dispatch(actAddPosition(res.data.positions))
        })
    }
}

export const actAddPosition = (position) => {
    return {
        type: Types.ADD_POSITION,
        position
    }
}
//
export const actUpdatePositionResquest = (position) => {
    return dispatch => {
        return callApi('positions/update', 'PUT', position, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log('update api position')
            dispatch(actUpdatePosition(res.data.position))
        })
    }
}

export const actUpdatePosition = (position) => {
    return {
        type: Types.UPDATE_POSITION,
        position
    }
}

//Staff
export const actFetchStaffRequest = () => {
    console.log('vào act')
    return (dispatch) => {
        return callApi('boss/get-listStaff', 'POST', {
            idShop: dataStorage.DATA_USER.user_shop_id
        }, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            dispatch(actFetchStaff(res.data.staffs))
        })
    }

}

export const actFetchStaff = (staffs) => {
    return {
        type: Types.FETCH_STAFF,
        staffs
    }
}


export const actAddStaffResquest = (staff) => {
    return dispatch => {
        return callApi('boss/create', 'POST', staff, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            dispatch(actAddStaff(res.data.user))
        })
    }
}


export const actAddStaff = (staff) => {
    return {
        type: Types.ADD_STAFF,
        staff
    }
}


export const actUpdateStaffResquest = (staff) => {
    return dispatch => {
        return callApi('boss/update-staff', 'PUT', staff, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            dispatch(actUpdateStaff(res.data.staff))
        })
    }
}

export const actUpdateStaff = (staff) => {
    return {
        type: Types.UPDATE_STAFF,
        staff
    }
}

//Drink
export const actFetchDrinkRequest = () => {
    console.log('vào act')
    return (dispatch) => {
        return callApi('drinks/get', 'POST', {
            drink_shop_id: dataStorage.DATA_USER.user_shop_id
        }, {
                'token': dataStorage.TOKEN
            }).then(res => {
                console.log(res)
                dispatch(actFetchDrink(res.data.drinks))
            })
    }

}

export const actFetchDrink = (drinks) => {
    return {
        type: Types.FETCH_DRINK,
        drinks
    }
}


export const actAddDrinkResquest = (drink) => {
    console.log('drink bên index', drink)
    return dispatch => {
        return callApi('drinks/create', 'POST', drink, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            dispatch(actAddDrink(res.data.drink))
        })
    }
}


export const actAddDrink = (drink) => {
    return {
        type: Types.ADD_DRINK,
        drink
    }
}


export const actUpdateDrinkResquest = (drink) => {
    return dispatch => {
        return callApi('drinks/update-drink', 'PUT', drink, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res)
            dispatch(actUpdateDrink(res.data.drink))
        })
    }
}

export const actUpdateDrink = (drink) => {
    return {
        type: Types.UPDATE_DRINK,
        drink
    }
}


//Cart
export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,   //product : product
        quantity,  //quantity : quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message, // message : message
    }
}

export const actDeleteProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product,
    }
}

export const actUpdateProductInCart = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity,
    }
}