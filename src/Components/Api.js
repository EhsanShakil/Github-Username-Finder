import axios from "axios";

const url = "https://api.github.com/users";

const Fetch = async (username) => {
  console.log(username);
  const changableurl = `${url}/${username}`;
  try {
    const { data } = await axios.get(changableurl);
    console.log(data);
  } catch (error) {
    throw new Error("Profile Not Found");
  }
};

export default Fetch;
