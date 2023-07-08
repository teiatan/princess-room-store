import styled from 'styled-components';

export const SearchFormContainer = styled.form`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  margin-right: 8px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const SearchIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #ccc;
  mask: url(${process.env.PUBLIC_URL}/search-icon.svg) center/contain no-repeat;
  -webkit-mask: url(${process.env.PUBLIC_URL}/search-icon.svg) center/contain no-repeat;
  mask-size: cover;
  -webkit-mask-size: cover;
`;