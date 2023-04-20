import React from 'react'
import TextEditor from './TextEditor';
import GetApi from './GetApi';
import FormValid from './FormValid';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<TextEditor />} />
                    <Route path='/form' element={<GetApi />} />
                    <Route path='getapi' element={<FormValid />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing