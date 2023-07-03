import React, { useState } from 'react';
import { MenuButton, MenuIcon, MenuItem, MenuContainer, MenuList, MenuItemWrapper } from './CatalogMenuHeader.styled';

const catalogCategories = [
  { id: 1, name: 'Category 1' },
  { id: 2, name: 'Category 2' },
  { id: 3, name: 'Category 3' },
];

export function BasicMenu() {
  const [isCatalogMenuOpen, setIsCatalogMenuOpen] = useState(false);

  const handleClick = () => {
    setIsCatalogMenuOpen(!isCatalogMenuOpen);
  };

  const handleClose = () => {
    setIsCatalogMenuOpen(false);
  };

  const handleCategoryClick = (category) => {
    console.log(category);
    handleClose();
  };

  const handleMouseLeave = () => {
    setIsCatalogMenuOpen(false);
  };

  return (
    <MenuContainer>
      <MenuButton onClick={handleClick}>
        <MenuIcon>☰</MenuIcon>
      </MenuButton>
      {isCatalogMenuOpen && (
        <MenuList onMouseLeave={handleMouseLeave}>
          {catalogCategories.map((category) => (
            <MenuItemWrapper key={category.id}>
              <MenuItem onClick={() => handleCategoryClick(category)}>
                {category.name}
              </MenuItem>
            </MenuItemWrapper>
          ))}
        </MenuList>
      )}
    </MenuContainer>
  );
};