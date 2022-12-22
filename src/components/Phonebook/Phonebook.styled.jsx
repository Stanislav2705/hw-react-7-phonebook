import styled from "styled-components";

export const Message = styled.p`
  font-weight: 500;
  padding: 4px;
  border-radius: 4px;
  background-color: #13c2c2;
  color: white;
`;

export const Error = styled(Message)`
    background-color: red;
`
