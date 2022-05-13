
import Login from "./components/Login";
import TaskList from "./components/TaskList";
import AddTask from './components/AddTask'


function App() {
  return (
    <div className="">
      <div className="d-none"><Login/></div>
       <TaskList />  
       <AddTask />

    </div>
  );
}




export default App;
