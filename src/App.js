import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import ToDoListContainer from './components/ToDoListContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDoListContainer />
      </div>
    </Provider>
  );
}

export default App;
