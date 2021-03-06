import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    const isStaff = JSON.parse(localStorage.getItem("honey_user")).staff

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/tickets">Tickets</Link>
            </li>
            {
                isStaff
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="/employees">Employees</Link>
                    </li>
                    : ""
            }
            {
                localStorage.getItem("honey_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            navigate("/", { replace: true })
                            localStorage.removeItem("honey_user")
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}

