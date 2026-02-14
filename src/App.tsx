import React from "react";
import "./App.css";
import {Button, Col, Container, Row } from "react-bootstrap";
import Dog from './dog.jpeg';
export function App(): React.JSX.Element {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 style={{ backgroundColor: "red" }}>
                            My Top 3 Movies
                        </h1>
                        <ul>
                            <li>Memories of Murder</li>
                            <li>Fantastic Mr. Fox</li>
                            <li>Star Wars VI</li>
                        </ul>
                        <div
                            style={{
                                width: "200px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                    <Col>
                        <img
                            src={Dog}
                            alt="My Dog Biscuit"
                            style={{ width: "10%" }}
                        />
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                        <header className="App-header">
                            Achilles Demerutis UD CISC275 with React Hooks and
                            TypeScript Hello World
                        </header>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload.
                        </p>
                        <div
                            style={{
                                width: "200px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
