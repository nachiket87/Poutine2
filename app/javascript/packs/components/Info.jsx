import React, { useState, useEffect } from "react";
import fetchData from "../helpers/getData.js";

const Info = (props) => {
  const logout = () => {
    window.localStorage.removeItem("token");
    const setLoggedIn = props.setLoggedIn;
    setLoggedIn(false);
  };

  const [data, setData] = useState();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    fetchData(token, setData);
  }, []);

  return (
    <div>
      <p>Info</p>
      {console.log(data)}
      <button onClick={logout}> Log out </button>
    </div>
  );
};

export default Info;
