import React from 'react';

export default function SubmitButton() {
    const handleEnter = () => {
        console.log("Mouse Entering");
    };

    const handleLeave = () => {
        console.log("Mouse Exiting");
    };

    return (
        <button
            type="button"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="submit-button"
        >
            Submit Password
        </button>
    );
}