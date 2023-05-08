import React from 'react';
import { useState } from 'react';

function SignUpUi() {
    const [display, setDisplay] = useState(false);
    return (
        <div>
            <div>
                <button onClick={() => setDisplay(false)}>Sign Up</button>
                <button onClick={() => setDisplay(true)}>Sign In</button>
            </div>
            {display ? (
                <div>
                    <h1>Sign Up</h1>
                    <div>
                        <div>
                            <input placeholder="First Name" />
                            <input placeholder="Last Name" />
                        </div>
                        <div>
                            <input placeholder="Email" />
                        </div>
                        <div>
                            <input placeholder="Password" />
                        </div>
                        <button>Sign Up</button>
                    </div>
                </div>
            ) : (
                <div>
                    <h1>Sign In</h1>
                    <div>
                        <div>
                            <input placeholder="Email" />
                        </div>
                        <div>
                            <input placeholder="Password" />
                        </div>
                        <button>Sign In</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SignUpUi;
