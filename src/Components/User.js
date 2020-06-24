import React, { useState, useEffect } from "react";
import Fetch from "./Api";

const Name = () => {
  const [data, setData] = useState("EhsanShakil");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setData(await Fetch(data));
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Username</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {console.log(data)}
    </div>
  );
};

export default Name;
