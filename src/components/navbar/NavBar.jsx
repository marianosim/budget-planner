import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">My Budget Planner</Link>
            </div>
        </nav>
    )
}
