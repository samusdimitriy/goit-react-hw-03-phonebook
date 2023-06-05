import React from 'react';
import {
  StyledContactsContainer,
  StyledContactItem,
  StyledContactName,
  StyledContactNumber,
  StyledDeleteButton,
} from './Contacts.styled';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <StyledContactsContainer>
      <ul>
        {contacts.map(contact => (
          <StyledContactItem key={contact.id}>
            <StyledContactName>{contact.name}:</StyledContactName>
            <StyledContactNumber>{contact.number}</StyledContactNumber>
            <StyledDeleteButton
              type="button"
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </StyledDeleteButton>
          </StyledContactItem>
        ))}
      </ul>
    </StyledContactsContainer>
  );
};

export default Contacts;
