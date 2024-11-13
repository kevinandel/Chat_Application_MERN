import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import RegisterAndLoginForm from "./RegisterAndLoginForm";

function Routes() {
  const { username, id } = useContext(UserContext);

  if (username) {
    return "logged in!" + username;
  }

  return <RegisterAndLoginForm />;
}

export default Routes;
