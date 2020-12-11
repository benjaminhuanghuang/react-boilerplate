import {createStore, combinReducers} from "redux";
import {todos} from '../pages/todos/reducer'

const reducers ={
  todos
}

const rootReducer = combinReducers(reducers);

export const configureStore = () =>{
  return createStore(rootReducer);
}  
