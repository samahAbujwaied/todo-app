import React, { useContext } from "react";
import { LoginContext } from "../context/auth";
import { If } from "react-if";

const Authentication = (props) => {
  const contextType = useContext(LoginContext);
  let render = false;
  try {
    render =
      contextType.loggedIn && props.capability
        ? contextType.user.capabilities.includes(props.capability)
        : false;
  } catch (error) {
    throw Error;
  }

  return (
    <If condition={render}>
      <div>{props.children}</div>
    </If>
  );
};

export default Authentication;