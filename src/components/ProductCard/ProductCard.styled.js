import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    width: 289px;
    text-decoration: none;
    color: black;
`;

export const ImageContainer = styled.div`
    height: 320px;
    background-color: #A8A8A8;
`;

export const Name = styled.h3`
    margin-top: 5px;
    font-size: 20px;
    line-height: 1.4;
`;

export const Price = styled.p`
    margin-top: 5px;
    font-size: 24px;
    line-height: 1.4;
`;