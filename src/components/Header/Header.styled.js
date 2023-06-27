import styled from "@emotion/styled";
// import { Link } from "react-router-dom";

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f1f1f1;
  decoration: none;
`;

export const Catalog = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
`;

export const Logo = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 24px;
`;

export const Search = styled.input`
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Likes = styled.div`
  svg {
    cursor: pointer;
    fill: grey;
    width: 24px;
    height: 24px;
  }
`;

export const BasketPage = styled.div`
  svg {
    cursor: pointer;
    fill: #000;
    width: 24px;
    height: 24px;
  }
`;

export const RegisterPage = styled.div`
  cursor: pointer;
  text-decoration: none;
`;