import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  StyledLabel,
  StyledInput,
  ErrorText,
  StyledButton,
  Title,
  InputWrapper,
} from './Phonebook.styled';

const Phonebook = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .matches(
            /^[A-Z][a-zA-Z]*( [A-Z][a-zA-Z]*)+$/,
            'Name must consist of two or more words separated by a space, where each word starts with a capital letter'
          )
          .required('Name is required'),
        number: Yup.string()
          .required('Phone number is required')
          .matches(/^\+/, 'Phone number must start with a "+" symbol')
          .matches(
            /^[+]\d+$/,
            'Phone number must contain only digits after the "+" symbol'
          ),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Title>Phonebook</Title>
          <InputWrapper>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <Field as={StyledInput} type="text" name="name" />
            <ErrorMessage name="name" component={ErrorText} className="error" />
          </InputWrapper>
          <InputWrapper>
            <StyledLabel htmlFor="number">Phone</StyledLabel>
            <Field as={StyledInput} type="text" name="number" />
            <ErrorMessage
              name="number"
              component={ErrorText}
              className="error"
            />
          </InputWrapper>
          <StyledButton type="submit">Add contact</StyledButton>
        </form>
      )}
    </Formik>
  );
};

export default Phonebook;
