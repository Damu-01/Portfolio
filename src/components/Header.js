import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-logo">
                    <h3>{props.logo}</h3>
                </div>
                <ul className="topnav" id="Mynav">
                    <li>
                        <Link to="/" className="link">{props.title}</Link>
                    </li>
                    <li>
                        <Link to="/projects" className="link">{props.title1}</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;