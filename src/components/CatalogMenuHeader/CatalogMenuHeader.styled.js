import styled from 'styled-components';

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  margin-right: 8px;
`;

export const MenuIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled.div`
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const MenuItemWrapper = styled.li`
  padding: 8px;
`;