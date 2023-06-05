import styled from 'styled-components';

export const StyledContactsContainer = styled.div`
  margin-top: 20px;
`;

export const StyledContactsHeading = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
  text-align: center;
`;

export const StyledContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const StyledContactName = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const StyledContactNumber = styled.span`
  margin-right: 5px;
`;

export const StyledDeleteButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
