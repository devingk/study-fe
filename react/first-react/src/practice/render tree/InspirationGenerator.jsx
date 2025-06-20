import React from "react";
import FancyText from "./FancyText";
import inspirations from "./inspirations";

export default function InspirationGenerator({children}) {

    const [index, setIndex] = React.useState(0);
    const inspiration = inspirations[index];
    const next = () => setIndex((index + 1) % inspirations.length);

    return (
        <>
            <p>Your inspirational {inspiration.type} is:</p>
            {inspiration.type === 'quote' ?
                <FancyText text={inspiration.value} /> : <Color value={inspiration.value} />
            }

            <button onClick={next}>Inspire me again</button>
            {children}
        </>
    )
}