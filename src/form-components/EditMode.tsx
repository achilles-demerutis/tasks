import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true)
    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={edit}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    {setEdit(event.target.checked)}     
                }
            />
            {edit ?
                <div>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {setName(event.target.value)}}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="student-checkbox"
                        label="Student"
                        checked={student}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {setStudent(event.target.checked)}}
                    />
                </div>
            :   <div>
                    {name} is {student ? "a student" : "not a student"}
                </div>
            }
        </div>
    );
}
