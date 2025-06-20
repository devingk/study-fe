import Copyright from "./Copyright";
import FancyText from "./FancyText";
import InspirationGenerator from "./InspirationGenerator";

export default function RenderTree() {
    return (
        <>
            <FancyText title={true} text="Render Tree" />
            <InspirationGenerator>
                <Copyright year={2025} />
            </InspirationGenerator>
        </>
    )
}