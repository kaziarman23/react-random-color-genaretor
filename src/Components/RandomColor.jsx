import { useEffect, useState } from "react";

function RandomColor() {
    const [colorType, setColorType] = useState("hex");
    const [color, setColor] = useState("#F0270C");

    const handleHexColor = () => {
        const hex = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
        ];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColor(hex.length)];
        }
        console.log(hexColor);
        setColor(hexColor);
    };
    const randomColor = (length) => {
        return Math.ceil(Math.random() * length - 1);

        // another way of doing the same thing
        // const score = Math.ceil(Math.random() * length - 1);
        //  console.log(score)
        // return score;
    };

    const handleRgbColor = () => {
        const r = randomColor(256);
        const g = randomColor(256);
        const b = randomColor(256);

        setColor(`rgb(${r},${g},${b})`);
        //console.log(r,g,b)
    };

    useEffect(() => {
        if (colorType === "rgb") handleRgbColor();
        else handleHexColor();
    }, []);

    return (
        <div
            style={{ background: color }}
            className="w-full h-screen overflow-hidden"
        >
            <div className="w-1/2 h-32 mx-auto flex justify-evenly items-center mt-40 mb-10">
                <button
                    onClick={() => setColorType("rgb")}
                    className="p-2 text-black bg-red-700 hover:bg-red-600 rounded-xl font-bold"
                    type="button"
                >
                    RGB Color Code
                </button>
                <button
                    onClick={() => setColorType("hex")}
                    className="p-2 text-black bg-red-700 hover:bg-red-600 rounded-xl font-bold"
                    type="button"
                >
                    HEX Color Code
                </button>
                <button
                    onClick={
                        colorType === "hex" ? handleHexColor : handleRgbColor
                    }
                    className="p-2 text-black bg-red-700 hover:bg-red-600 rounded-xl font-bold"
                    type="button"
                >
                    Random Colors
                </button>
            </div>
            <div className=" w-full h-5 text-center text-white font-bold text-xl">
                <h1>{colorType}</h1>
                <h4>{color}</h4>
            </div>
        </div>
    );
}

export default RandomColor;
