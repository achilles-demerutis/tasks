import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type holidays = "❤️" | "🍀" | "🐰" | "🎃" | "🎄";
    const [Holiday, setHoliday] = useState<holidays>("🎄")
    const alphabetical: Record<holidays, holidays> = {
        "🎄": "🐰",
        "🐰": "🎃",
        "🎃": "🍀",
        "🍀": "❤️",
        "❤️": "🎄",
    };
    const chronological: Record<holidays,holidays> = {
        "❤️": "🍀",
        "🍀": "🐰",
        "🐰": "🎃",
        "🎃": "🎄",
        "🎄": "❤️",
    }
    function cycleAlphabetical(): void {
        setHoliday(alphabetical[Holiday]);
    }
    function cycleChronological(): void {
        setHoliday(chronological[Holiday]);
    }
    return (
        <div>
            <Button onClick={cycleAlphabetical}>Advance by Alphabet</Button>
            <Button onClick={cycleChronological}>Advance by Year</Button>
            <p></p>
            <div>Holiday: {Holiday}</div>
        </div>
    );
}
