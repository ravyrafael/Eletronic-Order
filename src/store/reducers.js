import {combineReducers} from 'redux'
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'
import category from './ducks/category.js'
import cardapio from './ducks/cardapio.js'

const reducers  = combineReducers({
    cardapio,
    category,
    firebaseReducer
})

export default reducers ;