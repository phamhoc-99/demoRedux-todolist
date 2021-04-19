import React from 'react';
import {connect} from 'react-redux'; 
//import removeItem from '../action';   tach action ra thi loi

class Note extends React.Component {

removeNote(){
let {index,dispatch}=this.props;
//dispatch(removeItem(index));  
dispatch({type:'REMOVE_ITEM',index})                     
}

render (){
    return (
 <div>
<p>{this.props.children}</p>
<button onClick={this.removeNote.bind(this)}>delete</button>
 </div>
    )}
  }
  
  export default connect() (Note);
  