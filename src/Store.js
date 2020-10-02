import {createStore} from 'redux'

const initStore = {
  count:0
}

const reducer = (state=initStore, action) =>{
  switch(action.type){
    case 'INC':
     return Object.assign({},state,{count:state.count+1})
      break;
    
    default:
      return state;
  }

}

const store = createStore(reducer);

export default store;