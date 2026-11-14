import React from 'react';

export default function PasswordInput() {

    const handleChange = (e) => {
        console.log("Entering password...");
    };

    return (
        <div className="input-container">
            <label htmlFor="password-field">Password: </label>
            <input 
               id="password-field"
               type="password"
               onChange={handleChange}
               placeholder="Enter your password..."
               />
            </div>
    );
}


