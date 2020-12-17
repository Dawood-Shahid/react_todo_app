import './App.css';
import TodoApp from './componets/todoApp/TodoApp';
import TodoState from './context/todoContext/TodoState'

function App() {
  return (
    <TodoState>
    <div className="App">
      <TodoApp />
    </div>
    </TodoState>
  );
}

export default App;
