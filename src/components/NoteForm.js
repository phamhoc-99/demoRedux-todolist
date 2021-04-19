import React from 'react';
import {connect} from 'react-redux'
//import  addItem from '../action'   tach action ra thi loi

class NoteForm extends React.Component {

handleSubmit(e){
  e.preventDefault();
  let {dispatch}=this.props;
  //dispatch(addItem(this.refs.txt.value));
  dispatch({type:'ADD_ITEM',item:this.refs.txt.value});
}

render (){
    return (
<form onSubmit={this.handleSubmit.bind(this)}>
  <input type="text" ref="txt" />
  <br/> <br/>
  <button>add</button>  
</form>
)}
}
  
  export default 
 connect() 
  (NoteForm);
  