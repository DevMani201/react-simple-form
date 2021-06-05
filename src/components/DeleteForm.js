import React, { useState } from 'react'

const DeleteForm = () => {
    const [id, setId] = useState("")
    const handle = (e) => {
        setId(e.target.value);
    }

    const deleteform = async () => {
        if (!id) {
            window.alert("Cannot be blank");
            console.log("Cannot be blank");
            return;
        }else if(id.length != 24){
            window.alert("Please Enter 24 digit ObjectId");
            console.log("Please Enter 24 digit ObjectId");
            return;
        }
        try {
            const res = await fetch(`/form/delete-details/${id}`, {
                method: "DELETE",
                headers: {
                    "content-Type": "application/json"
                }
            })
            const data = await res.json();
            console.log(res);
            console.log(data);
            console.log(res.status);
            if (res.status === 422 || !data) {
                window.alert("Not Found!");
                console.log("Not Found!");
            
            } else {
                window.alert('Delete Successfully');
                console.log('Delete Successfully');
            }

        } catch (e) {
            console.log(e);
        }
    }


    return (
        <>
            <div className="main-delete">
                <div className="container">
                    <div className="input-field mb-3">
                        <input type="text" className="form-control" name="id" onChange={handle} placeholder="Enter ObjectId" />
                    </div>
                    <div className="delete-btn">
                        <button onClick={deleteform}>Click Here To Delete The Form From DataBase</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteForm
