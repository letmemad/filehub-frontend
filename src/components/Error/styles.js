import styled from "styled-components";

export const ErrorContainer = styled.div`
  padding: 15px;
  text-align: center;
  color: #fff;
  font-weight: 600;
  background: ${(props) => props.color};
  border-radius: 2px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 23px;
    margin-right: 10px;
  }
`;
