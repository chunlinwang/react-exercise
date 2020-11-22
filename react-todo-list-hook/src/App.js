import Provider from './context'
import TodoList from './components/TodoList'

function App() {
  return (
    <Provider>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
