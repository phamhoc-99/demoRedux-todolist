import mangReducer from './mang'
import { combineReducers} from 'redux';

let reducer=combineReducers({
    mang:mangReducer,
    });

export default reducer    