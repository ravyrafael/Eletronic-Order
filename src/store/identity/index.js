import { createStore} from 'redux';
const INITIAL_STATE = {
    data:{
        authenticated: false,
            user: {
                name: '',
                id: 0,
            }
        }
}

function identity(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'ADD_IDENTITY':
            return {...state, data: [action.data]}
            break;
    
        default:
            break;
    }
}
const store = createStore(identity);

export default store