import React, { useRef, useState } from "react";
import verifyAuth from "../helpers/verfiyAuth.js";

const Login = () => {
  const [token, setToken] = useState(
    () => window.localStorage.getItem("token") || ""
  );

  const [showError, setShowError] = useState(false);
  const form = useRef(null);
  const submit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const getData = verifyAuth(email, password, setToken);
    getData
      .then((res) => window.localStorage.setItem("token", res.data.token))
      .catch(() => setShowError(true));
    form.current.reset();
  };
  return (
    <div>
      <form onSubmit={(e) => submit(e)} ref={form}>
        <input type="email" />
        <input type="password" />
        <button> Click </button>
        Token: {token ? token : ""}
      </form>
      {showError ? <div> WRONG PASSWORD </div> : ""}
    </div>
  );
};

export default Login;
