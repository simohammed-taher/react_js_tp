import React, { useState } from 'react';

function ImgSlider() {
    const img = [
        { id: 0, value: "https://wallpaperaccess.com/full/2637581.jpg" },
        { id: 1, value: "https://wallpaperaccess.com/full/2637571.jpg" },
        { id: 2, value: "https://wallpaperaccess.com/full/2637591.jpg" },
        { id: 3, value: "https://wallpaperaccess.com/full/2337581.jpg" }
    ];

    const [sliderData, setSliderData] = useState(img[2]);

    const handleClick = (index) => {
        console.log(index);
        const slider = img[index];
        setSliderData(slider);
    };

    return (
        <div>
            <img src={sliderData.value} height="300" width="500" />
            <div>
                {img.map((data, i) => (
                    <div key={data.id}>
                        <img src={data.value} height="70" width="100" onClick={() => handleClick(i)} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImgSlider;
