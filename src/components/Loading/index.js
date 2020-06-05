import React from "react";

import loadingGif from "../../assets/uploading.gif";

import { Container } from "./styles";
const Loading = () => {
  return (
    <Container>
      <img src={loadingGif} alt="Loading..." width="200" />
    </Container>
  );
};

export default Loading;
