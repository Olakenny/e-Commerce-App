import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailReducer, productDeleteReducer, } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import {
     userLoginReducer, 
     userRegisterReducer, 
     userDetailsReducer, 
     userUpdateProfileReducer, 
     userListReducer, 
     userDeleteReducer,
     userUpdateReducer,
     } from './reducers/userReducers'
import { orderCreateReducer, orderDetailReducer, orderPayReducer, myOrderListReducer } from './reducers/orderReducers'


//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailReducer,
    productDelete: productDeleteReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailReducer,
    orderPay: orderPayReducer,
    orderListMy: myOrderListReducer,
    
}) 

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []


const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAdrdressFromStorage = localStorage.getItem('shippingAdrress') ?
    JSON.parse(localStorage.getItem('shippingAdrress')) : {}


const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAdrdressFromStorage,
    },
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, applyMiddleware(composeWithDevTools(...middleware)))
// const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store




