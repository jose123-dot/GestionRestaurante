import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  //eventos
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    roles: [],
  });
  const [signinData, setSigninData] = useState({ email: "", password: "" });

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/signup",
        signupData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleSignin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/signin",
        signinData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  //return
  return (
    <>
      <div>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={signupData.username}
          onChange={(e) =>
            setSignupData({ ...signupData, username: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={signupData.email}
          onChange={(e) =>
            setSignupData({ ...signupData, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={signupData.password}
          onChange={(e) =>
            setSignupData({ ...signupData, password: e.target.value })
          }
        />
        <button onClick={handleSignup}>Sign Up</button>

        <h2>Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={signinData.email}
          onChange={(e) =>
            setSigninData({ ...signinData, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={signinData.password}
          onChange={(e) =>
            setSigninData({ ...signinData, password: e.target.value })
          }
        />
        <button onClick={handleSignin}>Sign In</button>
      </div>
    </>
  );
};

export default Login;
