import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeft] = useState<number>(4);
    const [rightDie, setRight] = useState<number>(3);
    function rollLeft(): void {
        setLeft(d6());
    }
    function rollRight(): void {
        setRight(d6());
    }
    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <Button onClick={rollLeft}>Roll Left</Button>
            {leftDie !== rightDie && <span>---------</span>}
            {leftDie === rightDie && leftDie === 1 && <span>You Lose!</span>}
            {leftDie === rightDie && leftDie !== 1 && <span>You Win!</span>}
            <Button onClick={rollRight}>Roll Right</Button>
            <span data-testid="right-die">{rightDie}</span>
        </div>
    );
}
