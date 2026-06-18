import React, { useState, useEffect } from "react";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setMessage("Please fill all fields");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: name,
      email: email,
      password: password
    };

    setUsers([newUser, ...users]);
    setMessage("Registration Successful!");

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="main">
      <div className="container">
        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>

        <p className="success">{message}</p>

        <div className="users">
          <h2>Registered Users</h2>

          {users.map((user) => (
            <div key={user.id} className="userCard">
              • {user.name} - {user.email}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Registration;