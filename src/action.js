function addItem(item){
    return {type:'ADD_ITEM',item}
}
function removeItem(index){
    return {type:'REMOVE_ITEM',index}
}

export default {addItem,removeItem};