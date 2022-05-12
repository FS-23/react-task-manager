
import Login from "./components/Login";
import TaskList from "./components/TaskList";


function App() {
  return (
    <div className="App">
      <div className="d-none"><Login/></div>
       <TaskList />  

    </div>
  );
}




export default App;
