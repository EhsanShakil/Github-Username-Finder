import axios from "axios";

const url = "https://api.github.com/users";

const Fetch = async (username) => {
  console.log(username);
  const changableurl = `${url}/${username}`;
  try {
    const { data } = await axios.get(changableurl);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default Fetch;
