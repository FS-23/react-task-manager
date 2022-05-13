import { Link, Outlet } from "react-router-dom";

function Layout(){
    return (
        <div>
            <div>
                <Link to="/tasks/list">Tasks list</Link>
                <Link to="/login">Tasks list</Link>
            </div>
            <Outlet />
        </div>

    )
}

export default Layout