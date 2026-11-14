import React from 'react';
import '../App.css'
import PasswordInput from './PasswordInput'
import SubmitButton from './SubmitButton'

function App() {

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Password Validator</h1>
        <p>Tracking password typing.</p>
      </header>
      <main className="lab-card">
          <PasswordInput/>
          <SubmitButton/>
      </main>
    </div>
  );
}

export default App
