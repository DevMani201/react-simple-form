import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';

const Signin = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const onSubmits = async (e) => {
        e.preventDefault();
        try {
            const { email, password } = user;
            const res = await fetch("/form/login", {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            })
           
            const data = await res.json();
            console.log(res);
            console.log(data);
            console.log(res.status);

            if (res.status === 422 || !res) {
                window.alert("invalid credentials")
                console.log("invalid credentials");
            } else {
                window.alert("Successfully register")
                console.log("Successfully register");
                history.push("/")
            }

        } catch (e) {
            console.log(e + "error in fetching");
        }

    }
    const eventHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setUser((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })

    }
    return (
        <>
            <div className="inner-signup">
                <div className="main-signup">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 order-last">
                                <div className="left-section">
                                    <div className="sign-up-form">

                                        <div className="form-title">
                                            <h2>Sign in</h2>

                                        </div>
                                        <form method="POST">

                                            <div className="form-group mb-3">
                                                <label htmlFor="email">
                                                    <i class="zmdi zmdi-email"></i>
                                                </label>
                                                <input type="email" className="form-control" name="email" placeholder="Email Address" onChange={eventHandler} />
                                            </div>

                                            <div className="form-group mb-3">
                                                <label htmlFor="password">
                                                    <i class="zmdi zmdi-lock"></i>
                                                </label>
                                                <input type="password" className="form-control" name="password" placeholder="Password" onChange={eventHandler} />
                                            </div>
                                            <div className="signup-btn">
                                                <button className="btn" type="submit" onClick={onSubmits}>Log In</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 sign-up-right-img order-first">
                                <div className="right-section">
                                    <div className="signup-img">
                                        <img src="img/form-signup.png" alt="signup-form-img" className="img-fluid" />
                                    </div>


                                    <div className="already-regi">
                                        <NavLink to='/signup'>Create an Account</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin
