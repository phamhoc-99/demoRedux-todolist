let mangReducer=(state=['1','2','3'],action)=>{
    switch(action.type){
    case 'ADD_ITEM':
        return [...state,action.item]    
    case 'REMOVE_ITEM':
        return state.filter((e,i)=>i!=action.index)
    default:
        return state;
}}

export default mangReducer