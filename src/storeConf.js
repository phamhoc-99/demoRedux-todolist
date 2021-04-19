import {compose, createStore} from 'redux';
import reducer from './reducer/reducer'

let store =createStore(reducer,
    compose(window.devToolsExtension()));
//cach su dung redux devtool de check store thay doi
//viet dong nay vao thi inspect ra devtool moi hien thi

store.dispatch({type:'TOGGLE_IS_ADDING'});
store.dispatch({
    type:'ADD_ITEM',
    item:'4'
});
store.dispatch({
    type:'REMOVE_ITEM',
    index:1
});
console.log(store.getState());
//theo doi nhung lan store thay doi (x)
//store.subscribe(()=>console.log(store.getState()));

export default store;