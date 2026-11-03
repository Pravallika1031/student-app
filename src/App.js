import React from 'react';

import './App.css';

function App() {
  const [name, setName] = React.useState('');
  const [rollNo, setRollNo] = React.useState('');
  const [message, setMessage] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === '' || rollNo.trim() === '') {
      setMessage('Please enter Name and Roll No');
    } else {
      setMessage('Registration Successful!');
    }
  }

  return (
    <div>
      <nav className="navbar">
        <h2>Student App</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>

      <h1>Student Registration Form -Github Demo</h1>

      <form className="student-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <label>Roll No:</label>
        <input
          type="text"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          placeholder="Enter roll number"
        />

        <button type="submit">Register</button>

        <p>{message}</p>
      </form>
    </div>
  );
}

export default App;
