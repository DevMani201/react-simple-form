import React, { useState } from 'react'



const Signup = ({ HandleData, HandleChangeData }) => {
    const [user, setUser] = useState({
        fname: "", mname: "", lname: "", email: "", phone: "", address: "", country: "", state: "", zipcode: "", height: "", weight: ""
    })


    return (
        <>
            <div className="inner-signup">
                <div className="main-signup">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="left-section">
                                    <div className="sign-up-form">

                                        <div className="form-title">
                                            <h2>Sign up</h2>

                                        </div>
                                        <form>
                                            <div className="form-group form-required mb-3">

                                                <input type="text" className="form-control" name="fname" placeholder="First Name" onChange={HandleChangeData} required />
                                               

                                            </div>
                                            <div className="form-group mb-3">

                                                <input type="text" className="form-control" name="mname" placeholder="Middle Name" onChange={HandleChangeData} />

                                            </div>
                                            <div className="form-group form-required mb-3">

                                                <input type="text" className="form-control" name="lname" placeholder="Last Name" onChange={HandleChangeData} required />

                                            </div>


                                            <div className="form-group form-required mb-3">

                                                <input type="email" className="form-control" name="email" placeholder="Email Address" onChange={HandleChangeData} required />
                                            </div>
                                            <div className="form-group form-required mb-3">

                                                <input type="number" className="form-control" name="phone" placeholder="Phone Number" onChange={HandleChangeData} required />
                                            </div>
                                            <div className="form-group form-required mb-3">

                                                <input type="text" className="form-control" name="address" placeholder="Address" onChange={HandleChangeData} required />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group form-required mb-3">

                                                        <input type="text" className="form-control" name="country" placeholder="Country" onChange={HandleChangeData} required />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">

                                                    <div className="form-group form-required mb-3">

                                                        <input type="text" className="form-control" name="state" placeholder="State" onChange={HandleChangeData} required />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group form-required mb-3">

                                                        <input type="text" className="form-control" name="zipcode" placeholder="Zip Code" onChange={HandleChangeData} required />
                                                    </div>
                                                </div>

                                            </div>


                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group form-required mb-3">

                                                        <input type="text" className="form-control" name="height" placeholder="Height in Ft/inches" onChange={HandleChangeData} required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">

                                                    <div className="form-group form-required mb-3">

                                                        <input type="text" className="form-control" name="weight" placeholder="Weight in Kg" onChange={HandleChangeData} required />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="signup-btn">
                                                <button type="submit" className="btn" name="save" value="save" onClick={HandleData}>SAVE</button>
                                            </div>

                                        </form>
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

export default Signup
