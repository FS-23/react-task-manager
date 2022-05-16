
import Login from "./components/Login";
import TaskList from "./components/TaskList";
import AddTask from './components/AddTask'
import TaskDetail from "./components/TaskDetail";
import Layout from "./components/Layout";
import TaskLayout from "./components/TaskLayout";
import SignUp from "./components/SignUp";

import { BrowserRouter , Routes , Route, Link } from 'react-router-dom'


function App() {
  return (

    <BrowserRouter>
         <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/" element={<Layout />}>
                   <Route  index element={<TaskList/>}></Route>
                   <Route  path="tasks" element={<TaskLayout/>}>
                      <Route index element = {<TaskList/>}></Route>
                      <Route path="list" element = {<TaskList/>}></Route>
                      <Route path=":id" element = {<TaskDetail/>}></Route>
                      <Route path="edit/:id" element = {<AddTask/>}></Route>
                   </Route>
              </Route>
              <Route path="*" element={
                (<div className="text-secondary text-center display-6 mt-3">
                  Ouuups ressource not found !!!!

                  <Link to="/" className="btn btn-primary ms-2"> Home </Link>
                </div>)
              }></Route>
         </Routes>
          
    </BrowserRouter>
   
  );
}




export default App;
