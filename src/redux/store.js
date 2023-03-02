import { createStore } from 'redux';
import noteReducer from './note/noteReducer'

const store = createStore(noteReducer);
export default store