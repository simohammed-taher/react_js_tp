import React from 'react';

export default function valueformconsol() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const first = e.target.fname.value;
        const last = e.target.lname.value;
        console.log("first: " + first, "last: " + last);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="fname" placeholder="First Name" /><br />
                <input type="text" name="lname" placeholder="Last Name" /><br />
                <button type="submit">Submit</button>
            </form>
        </div>

    );
}
