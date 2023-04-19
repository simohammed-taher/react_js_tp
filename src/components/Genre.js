import React, { useState } from 'react'

function genre() {
    const [genre, setGenre] = useState();
    return (
        <div>
            <h1>{genre}</h1>
            <input type='radio' name='genre' value='Male' onChange={e => setGenre(e.target.value)} />Male
            <input type='radio' name='genre' value='Female' onChange={e => setGenre(e.target.value)} />Female
        </div>
    )
}

export default genre