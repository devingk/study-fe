import { useState } from "react";

export default function BatchCounter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>React Batch Update Practice</h1>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
            }}>
                +3
            </button>
        </>
    )
}