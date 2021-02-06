import axios from "axios";

const fetchData = (token, setData) => {
  const getData = async () => {
    const data = await axios.get(`/api/v1/locations/1`, {
      headers: {
        Authorization: "Bearer " + token, //the token is a variable which holds the token
      },
    });
    setData(data.data);
    return data;
  };
  getData();
};

export default fetchData;
