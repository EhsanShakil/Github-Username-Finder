import React, { useState } from "react";
import Fetch from "./Api";
import "../App.css";
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
      alert("No Username Found");
    }
    setUsername("");
  };

  console.log(data);

  return (
    <div className="container">
      <h1>Github Username Finder</h1>
      <div>
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
      </div>
      <div className="row">
        <img className="image" src={data.avatar_url} alt={data.avatar_url} />
        <div className="coloum">
          <h1>{data.name}</h1>
          <h1>{data.location}</h1>
          <a href={data.html_url} target="_blank">
            {data.html_url}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Name;
