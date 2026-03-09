import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoublerProps {
    value: number;
    setValue: (newValue: number) => void;
}
interface HalverProps {
    value: number;
    setValue: (newValue: number) => void;
}
function Doubler({value, setValue}: DoublerProps): React.JSX.Element {      //kind of similar to a state, somewhat confusing, will need to work with it
    return (
        <Button
            onClick={() => {
                setValue(2 * value);
            }}
        >
            Double
        </Button>
    );
}
function Halver({ value, setValue }: HalverProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue(0.5 * value);
            }}
        >
            Halve
        </Button>
    );
}
export function DoubleHalf(): React.JSX.Element {
    const [value, setValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Doubler value={value} setValue={setValue}></Doubler>
            <Halver value={value} setValue={setValue}></Halver>
        </div>
    );
}
