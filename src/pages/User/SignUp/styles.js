import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 780px) {
  }
`;

export const SignContainer = styled.div`
  width: 40%;
  margin: 0 3%;
  background-color: #fff;
  /* display: flex;
    flex-direction: column; */
  @media only screen and (max-width: 780px) {
    width: 100%;
  }
`;

export const Sign = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  @media only screen and (max-width: 780px) {
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #886688;
    transition: all 0.7s;
    &:hover {
      color: #fa5c19;
    }
  }
`;

export const Title = styled.h1`
  width: 300px;
  color: #060719;
  opacity: 0.8;
  font-weight: bolder;
`;

export const Text = styled.p`
  width: 200px;
  color: #886688;
  opacity: 0.8;
`;

export const Button = styled.button`
  padding: 15px 30px;
  margin: 10px 0;
  border: none;
  font-family: "Nunito", sans-serif;
  font-weight: bolder;
  border-radius: 20% 10%;
  background-color: #e5e5e5;
  color: #7b7b7b;
  transition: all 0.7s;

  &:hover {
    cursor: pointer;
    border-radius: 10% 20%;
    background: #fa5c19;
    color: #fff;
  }
`;

export const ImageContainer = styled.div`
  background: #e5e5e5;
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 780px) {
    display: none;
  }
`;
