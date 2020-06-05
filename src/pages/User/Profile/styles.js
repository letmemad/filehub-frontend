import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background: #f5f5f5;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a svg {
      font-size: 25px;
      color: grey;
      opacity: 0.7;

      transition: all 0.7s;

      &:hover {
        color: #fa5c19;
        opacity: 1;
      }
    }
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
    div {
      display: flex;
      align-items: center;
      flex-direction: column;

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        border: none;
        border-radius: 50%;
        background-color: #fa5c19;
        position: absolute;
        margin-top: 50px;
        color: #fff;
        box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.3);

        cursor: pointer;
      }
      input[type="file"] {
        display: none;
      }
    }

    section {
      margin: 0 40px;
      @media only screen and (max-width: 780px) {
        margin-top: 60px;
        text-align: center;
      }

      h2 {
        font-size: 20px;
      }

      p {
        display: flex;
        align-items: center;
        font-size: 13px;
        color: grey;
        opacity: 0.7;
        font-weight: bold;

        svg {
          margin: 0 5px 0 0;
        }
      }

      ul {
        margin: 20px 0;
        list-style: none;
        display: flex;

        li {
          font-size: 15px;
          display: flex;
          align-items: center;
          color: grey;
          opacity: 0.9;

          & + li {
            margin: 0 40px;
          }
        }
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 40px 0;
  padding: 0 40px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  div {
    width: 400px;
    max-width: 90%;
    margin: 30px 0;
    text-align: center;
  }

  form {
    width: 100%;

    h1 {
      font-size: 18px;
      color: #0b0c30;
    }

    label {
      font-weight: 500;
      font-size: 15px;
    }

    button {
      cursor: pointer;
      padding: 15px 25px;
      background: #060719;
      border: none;
      border-radius: 20px 40px;
      color: #fff;
      font-weight: bold;

      transition: all 0.7s;

      &:hover {
        border-radius: 40px 20px;
      }
    }
  }
`;
