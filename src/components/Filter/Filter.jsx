import React from 'react';
import {
  StyledFilterContainer,
  StyledFilterInput,
  StyledFilterHeading,
} from './Filter.styled';

const Filter = ({ filter, onFilterChange }) => {
  const handleChange = event => {
    onFilterChange(event.target.value);
  };

  return (
    <StyledFilterContainer>
      <StyledFilterHeading>Find contacts by name</StyledFilterHeading>
      <StyledFilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </StyledFilterContainer>
  );
};

export default Filter;
