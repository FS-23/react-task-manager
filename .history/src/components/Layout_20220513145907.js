import { Link, Outlet } from "react-router-dom";

function Layout(){
    return (
        <div>
            <div>
                <Link className="btn btn-secondary" to="/tasks/list">Tasks list</Link> | 
                <Link className="btn btn-secondary" to="/login">Tasks list</Link>
            </div>
            <Outlet />
        </div>

    )
}

export default Layout