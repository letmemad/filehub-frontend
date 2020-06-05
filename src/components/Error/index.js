import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { ErrorContainer } from "./styles";

const Error = (props) => {
  return (
    <ErrorContainer color={props.color}>
      <FiAlertCircle />
      {props.children}
    </ErrorContainer>
  );
};

export default Error;
