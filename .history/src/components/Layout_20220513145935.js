import { Link, Outlet } from "react-router-dom";

function Layout(){
    return (
        <div>
            <div className="text-center bg-light ">
                <Link className="btn btn-secondary" to="/tasks/list">Tasks list</Link> | 
                <Link className="btn btn-secondary" to="/login">Logout</Link>
            </div>
            <Outlet />
        </div>

    )
}

export default Layout