import React, { useState } from "react";

export default function Card({ card }) {
    const [side, setSide] = useState(false);

    return (
        <div className={`card ${side ? "side" : ""}`} onClick={() => setSide(!side)}>
            <div className="front">{card.pl}</div>
            <div className="back">{card.en}</div>
        </div>
    );
}
