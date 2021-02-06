import axios from "axios";

const verifyAuth = async (email, password) => {
  const data = await axios({
    method: "post",
    url: "api/v1/auth",
    data: {
      user: {
        email: email,
        password: password,
      },
    },
  });
  return data;
};

export default verifyAuth;
