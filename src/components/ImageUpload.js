import React, { useState } from "react";
function ImageUpload() {
    const [data, setData] = useState();
    console.log(data)
    return (
        <div >
            <div >
                <label htmlFor="imgs">Upload</label>
            </div>
            <input id="imgs" type="file" accept="image/png, image/jpeg,.txt,.doc" onChange={(e) => setData(e.target.files)} />
        </div>
    );
}
export default ImageUpload;