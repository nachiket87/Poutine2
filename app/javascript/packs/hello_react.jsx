// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login.jsx";
import Info from "./components/Info.jsx";

const Hello = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("token") != null) {
      setLoggedIn(true);
    }
  }, []);

  if (loggedIn) {
    return <Info setLoggedIn={setLoggedIn} />;
  } else {
    return <Login />;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement("div"))
  );
});
