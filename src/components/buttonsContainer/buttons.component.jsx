import React, { useState } from 'react';
import './buttons.styles.css';

const BUTTON_W = 170;
const BUTTON_H = 52;
const GAP = 50;

const centerPos = () => ({
    top: (window.innerHeight / 2 - BUTTON_H / 2).toFixed() + 'px',
    left: (window.innerWidth / 2 + GAP / 2).toFixed() + 'px'
});

const staticPos = () => ({
    top: (window.innerHeight / 2 - BUTTON_H / 2).toFixed() + 'px',
    left: (window.innerWidth / 2 - BUTTON_W - GAP / 2).toFixed() + 'px'
});

const getRandomPoint = () => {
    const range = 0.3;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const x = cx + (Math.random() - 0.5) * 2 * (window.innerWidth * range);
    const y = cy + (Math.random() - 0.5) * 2 * (window.innerHeight * range);
    const minX = cx - window.innerWidth * range;
    const maxX = cx + window.innerWidth * range - BUTTON_W;
    const minY = cy - window.innerHeight * range;
    const maxY = cy + window.innerHeight * range - BUTTON_H;
    return {
        top: Math.min(Math.max(y, minY), maxY).toFixed() + 'px',
        left: Math.min(Math.max(x, minX), maxX).toFixed() + 'px'
    };
};

function TwoButtons() {
    const [prankStyles, setPrankStyles] = useState(centerPos);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="buttons-container">
            <div className="jump-boundary" />
            <div className="static" style={{ ...staticPos(), position: 'fixed' }} onClick={() => setIsOpen(true)}>
                <span>No Thank you</span>
            </div>
            <div className="prank" style={{ ...prankStyles, position: 'fixed' }} onMouseOver={() => setPrankStyles(getRandomPoint())}>
                <span>Yes Sure</span>
            </div>
            {isOpen && (
                <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                    <div className="modal-box" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setIsOpen(false)}>X</button>
                        <div className="modal-heading">
                            <h1>Thank you</h1>
                        </div>
                        <div className="modal-content">
                            <h3>We very much appreciate your decision</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TwoButtons;
