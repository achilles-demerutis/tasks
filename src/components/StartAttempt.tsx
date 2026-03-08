import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    function stopQuiz(): void{
        setInProgress(false);
    }
    function startQuiz(): void{
        setInProgress(true);
        setAttempts(attempts - 1);
    }
    function mulligan(): void{
        setAttempts(attempts + 1)
    }
    return (                                    // initially tried to use conditional for buttons, but disabled works much better
        <div>
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>Start Quiz</Button>   
            <Button onClick={stopQuiz} disabled={!inProgress}>Stop Quiz</Button>
            <Button onClick={mulligan} disabled={inProgress}>Mulligan</Button>
            <div>Attempts: {attempts}</div>
        </div>
    );
}
