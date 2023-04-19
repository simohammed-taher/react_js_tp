import React, { useState } from 'react';

function ValueFormAdd() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email) {
            setList([...list, { name, email }]);
            setName("");
            setEmail("");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>React</h1>
                <input type="text" name="fname" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} /><br></br>
                <input type="text" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
                <button type="submit">Add</button>
            </form>
            <ul>
                {list.map((a, index) => (
                    <li key={index}>
                        <li>{a.name}</li>
                        <li>{a.email}</li>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ValueFormAdd;
