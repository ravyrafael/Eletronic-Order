import {combineReducers} from 'redux'

import category from './ducks/category.js'
import cardapio from './ducks/cardapio.js'

const reducers  = combineReducers({
    cardapio,
    category
})

export default reducers ;