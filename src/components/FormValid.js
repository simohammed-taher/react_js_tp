import React, { useState } from 'react'

function FormValid() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [error, setError] = useState(false)
    const handlSubmit = (e) => {
        e.preventDefault();
        if (firstName.length == 0 || lastName.length == 0) {
            setError(true);
        } if (firstName && lastName) {
            console.log("First Name", firstName, "\nLast Name", lastName)
        }
    }
    return (
        <form onSubmit={handlSubmit}>
            <div>
                <input type='text' onChange={e => setFirstName(e.target.value)} placeholder='First Name' /><br />
                {error && firstName.length <= 0 ? <label>First name empty</label> : ""}
                <input type='text' onChange={e => setLastName(e.target.value)} placeholder='Last Name' /><br />
                {error && lastName.length <= 0 ? <label>last name empty</label> : ""}
                <button>Submit</button>
            </div></form>
    )
}

export default FormValid