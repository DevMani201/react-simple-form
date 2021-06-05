import React from 'react'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">Manish</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>


                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signin">Signin</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">Signup</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/deleteform">DeleteForm</NavLink>
                            </li>

                           
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
