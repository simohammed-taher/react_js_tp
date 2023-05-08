import React, { useEffect, useState } from 'react';

function DarkToLight() {
    const [theme, setTheme] = useState(false);
    const handleClick = () => {
        setTheme(!theme);
    };
    useEffect(() => {
        if (theme === true) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div>
            <button onClick={handleClick}>{theme ? 'Light' : 'Dark'}</button>
            <h1>Theme Color in React</h1>
            <p>Light and dark Theme</p>
        </div>
    );
}

export default DarkToLight;
