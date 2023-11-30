import React, {useState} from "react";
import {VolumeUp} from "@mui/icons-material";

export default function Card({card}) {
    const [side, setSide] = useState(false);

    function handleClickSpeaker(e) {
        e.stopPropagation();
        console.log('abc');
    }

    return (
        <div className='cardWrapper'>
            <div className={`card ${side ? "side" : ""}`} onClick={() => setSide(!side)}>
                <div className="front">{card.pl}
                    <VolumeUp
                        className='speaker'
                        onClick={handleClickSpeaker}
                    ></VolumeUp>
                </div>
                <div className="back">{card.en}
                    <VolumeUp
                        className='speaker'
                        onClick={handleClickSpeaker}
                    ></VolumeUp>
                </div>
            </div>
        </div>
    );
}
