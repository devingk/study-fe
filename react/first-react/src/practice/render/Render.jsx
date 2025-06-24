import { useEffect, useState } from "react";
import Clock from "./Clock";

export default function Render() {

    function getCurrentTime() {
        const now = new Date();
        const h = now.getHours().toString().padStart(2, '0');
        const m = now.getMinutes().toString().padStart(2, '0');
        const s = now.getSeconds().toString().padStart(2, '0');

        return `현재 시각: ${h}:${m}:${s}`;
    }

    const [time, setTime] = useState(getCurrentTime());

    useEffect(() => {
        const intervalId = setInterval(() => setTime(getCurrentTime()), 1000);

        return () => clearInterval(intervalId);
    }, []);

    return <Clock time={time} />
}