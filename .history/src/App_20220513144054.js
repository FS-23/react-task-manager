
import Login from "./components/Login";
import TaskList from "./components/TaskList";
import AddTask from './components/AddTask'

import { BrowserRouter , Routes , Route } from 'react-router-dom'


function App() {
  return (

    <BrowserRouter>
         <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/" element={<Layout />}>
                   <Route path="tasks" element={TaskLayout}>
                      <Route index element = {TaskList}></Route>
                      <Route path="list" element = {TaskList}></Route>
                      <Route path=":id" element = {TaskDetail}></Route>
                      <Route path="edit/:id" element = {AddTask}></Route>
                   </Route>
                      
              </Route>
         </Routes>
           <div className="">
              <div className="d-none"><Login/></div>
              <TaskList />  
              <AddTask />

            </div>
    </BrowserRouter>
   
  );
}




export default App;
