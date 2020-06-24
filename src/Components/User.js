import React, { useState, useEffect } from "react";
import Fetch from "./Api";

const Name = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    const fetchData = Fetch(username);
  };

  return (
    <div>
      <h1>Username</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>
        Search
      </button>
      {console.log(data)}
    </div>
  );
};

export default Name;
