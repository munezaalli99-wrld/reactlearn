import { Outlet,Link} from "react-router-dom";
function Dashboard(){
    return (
        <div>
            <h2>This is a dashboard</h2>
            <nav>
                <Link to="Overview">Overview</Link>
                <Link to="Stats">Stats</Link>
            </nav>
            <Outlet />
            
        </div>
    )
}
 
export default Dashboard;