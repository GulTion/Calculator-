import React from 'react';
import {connect} from 'react-redux';
import './App.css';

function Counter(props) {
  return (
    <div className="Counter">
      <h1>{props.count}</h1>
      <button onClick={props.onCounter}>Count</button>
    </div>
  );
}
const mapStateToProps= (state) =>{
  return {
    count:state.count
  }
}


const mapDispatchToProps = (dispatch) =>{
return {
  onCounter:()=>{
      dispatch({type:"INC"});
  }
}

}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
