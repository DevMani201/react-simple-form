import React, { useState } from 'react'
import Signup from './Signup';
import validator from 'validator'

const FormShow = () => {
    const [user, setUser] = useState({
        fname: "", mname: "", lname: "", email: "", phone: "", address: "", country: "", state: "", zipcode: "", height: "", weight: ""
    })

    const [userValid, setUserValid] = useState({})

    const eventHandler = (e) => {
        const value = e.target.value
        const name = e.target.name
        setUser((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }
    const postData = (e) => {

        e.preventDefault()

        try {
            const { fname, mname, lname, email, phone, address, country, state, zipcode, height, weight } = user;
            if (!fname, !lname || !email || !phone || !address || !country || !state || !zipcode || !height || !weight) {

                window.alert("plz fill all the field");
                console.log("plz fill all the field");

            } else if (!validator.isEmail(email)) {
                window.alert("Invalid Email, info@vitasoft.com");
                console.log("Invalid Email");
            } else if (phone.length != 10 || !/[6-9][0-9]{9}/.test(phone)) {
                window.alert("please enter valid Phone Number");
                console.log("please enter valid Phone Number");
            } else if (zipcode.length != 6) {
                window.alert("please enter valid zipcode");
                console.log("please enter valid zipcode");
            } else {
                setUserValid({
                    fname, mname, lname, email, phone, address, country, state, zipcode, height, weight
                })
                window.alert("Save SuccessFully");
                console.log("Save SuccessFully");
            }

        } catch (e) {
            console.log(e);
        }


    }

    return (
        <>
            <Signup HandleData={postData} HandleChangeData={eventHandler} />
            <div className="inner-signup">
                <div className="main-signup">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="left-section">
                                    <div className="sign-up-form">

                                        <div className="form-title">
                                            <h2>Data Show </h2>

                                        </div>
                                        <div className="form-show-data">
                                            <p><b>First Name:</b>  {userValid.fname}</p>
                                            <p><b>Middle Name:</b>  {userValid.mname}</p>
                                            <p><b>Last Name:</b>  {userValid.lname}</p>
                                            <p><b>Address:</b>
                                                {userValid.address}
                                                <ul>
                                                    <li>Country:<span> {userValid.country}</span></li>
                                                    <li>State:<span> {userValid.state}</span></li>
                                                    <li>zipcode: <span> {userValid.zipcode}</span></li>
                                                </ul>

                                            </p>
                                            <p><b>Email:</b>  {userValid.email}</p>
                                            <p><b>Phone Number:</b>  {userValid.phone}</p>
                                            <p><b>Height:</b>  {userValid.height}</p>
                                            <p><b>Weight:</b>  {userValid.weight}</p>

                                        </div>
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

export default FormShow
