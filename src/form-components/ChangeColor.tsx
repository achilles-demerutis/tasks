import React, { useState } from "react";
export function ChangeColor(): React.JSX.Element {
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];
    const [selectedColor, setSelectedColor] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <label key={color} style={{ marginRight: "15px" }}>
                    <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => {
                            setSelectedColor(color);
                        }}
                    />
                    <span
                        style={{
                            backgroundColor: color,
                        }}
                    >
                        {color}
                    </span>
                </label>
            ))}
            <p>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: selectedColor,
                    }}
                >
                    {selectedColor}
                </span>
                .
            </p>
        </div>
    );
}
