import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<number>(0);

    let usesLeft = attempts > 0;        //allows the use button to disappear upon being less than 1
    function onUse() {
        setAttempts((prev) => Math.max(prev - 1, 0));
    }
    function onGain() {
        if (Number.isNaN(requested)) {
            return;
        }
        setAttempts((prev) => prev + requested);
    }
    return (
        <div>
            <Form.Group controlId="formAttempts">
                <Form.Label>Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const value = event.target.value;
                        const parsed = parseInt(value, 10);
                        setRequested(Number.isNaN(parsed) ? 0 : parsed);
                    }}
                />
            </Form.Group>
            <div>{attempts}</div>
            <button onClick={onUse} disabled={!usesLeft}>
                Use
            </button>
            <button onClick={onGain}>Gain</button>
        </div>
    );
}
