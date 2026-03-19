/*
The MultipleChoiceQuestions component allows a user to select an answer from a list in a dropdown, and then displays whether they got it correct or incorrect. The component takes in a parameter representing the expectedAnswer and also a parameter representing the list of options.

You will need a state to represent the user’s currently selected choice.
The initial state of the selected choice is the first element of the options list.
When the user’s given answer matches the expectedAnswer, display ✔️; otherwise display ❌
*/

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="multipleChoice">
                <Form.Label>Choose an option</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((option) => (      // similar to mapping buttons, only maping options in a dropdown
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{choice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
