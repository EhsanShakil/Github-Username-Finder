import React, { useState } from "react";
import Fetch from "./Api";

const Name = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");

  const handleSubmit = async () => {
    const fetchData = await Fetch(username);
    console.log(fetchData);

    if (fetchData) {
      setData(fetchData);
    }
    if (!username) {
      alert("NO Username FOund");
    }
    setUsername("");
  };

  console.log(data);

  return (
    <div>
      <h1>Username</h1>

      <div className="ui icon input">
        <input
          type="text"
          placeholder="Search Here..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <i className="inverted circular search link icon"></i>
      </div>
      <button className="ui primary button" onClick={handleSubmit}>
        <i className="github icon"></i>
        Search
      </button>

      <h1>{data.name}</h1>
      <h1>{data.location}</h1>
      <img src={data.avatar_url} alt={data.avatar_url} />
      <a href={data.html_url} target="_blank">
        {data.html_url}
      </a>
    </div>
  );
};

export default Name;
