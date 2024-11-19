import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext.jsx";

function RegisterAndLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("login");
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    const url = isLoginOrRegister === "register" ? "register" : "login";
    const { data } = await axios.post(`/${url}`, { username, password });
    setLoggedInUsername(username);
    setId(data.id);
  }

  return (
    <div className="bg-gray-100 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={(e) => handleSubmit(e)}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <button className="bg-gray-500 text-white block w-full rounded-sm p-2 hover:bg-gray-600">
          {isLoginOrRegister === "register" ? "Register" : "Login"}
        </button>
        {isLoginOrRegister === "register" && (
          <div className="text-center mt-2">
            Already a member?
            <button
              className="text-gray-400"
              onClick={() => setIsLoginOrRegister("login")}
            >
              Login here
            </button>
          </div>
        )}
        {isLoginOrRegister === "login" && (
          <div className="text-center mt-2">
            Dont have an account?
            <button
              className="text-gray-400"
              onClick={() => setIsLoginOrRegister("register")}
            >
              Register
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default RegisterAndLoginForm;
