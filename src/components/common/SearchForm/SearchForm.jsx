import React, { useState } from 'react';
import { SearchFormContainer, Label, Input, Button, SearchIcon } from './SearchForm.styled';

const SearchForm = ({ labelText, inputPlaceholder, buttonFunction }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    buttonFunction(searchQuery);
    setSearchQuery('');
  };

  return (
    <SearchFormContainer>
      {labelText && <Label>{labelText}</Label>}
      <Input
        type="text"
        placeholder={inputPlaceholder}
        value={searchQuery}
        onChange={handleInputChange}
      />
      <Button onClick={handleSubmit}>
        <SearchIcon />
      </Button>
    </SearchFormContainer>
  );
};

export default SearchForm;