import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import {
  Error,
  StyledForm,
  Button,
  Label,
  Input,
  LabelText,
} from './ContactForm.styled';
import { addContact } from 'redux/operation';
import { selectContacts } from 'redux/selectors';

const FormError = ({ name }) => {
  return (
    <ErrorMessage name={name} render={message => <Error>{message}</Error>} />
  );
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: '',
    number: '',
  };

  const userSchema = object({
    name: string().required(),
    number: string().required(),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const duplicate = contacts.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );
    if (duplicate) {
      return alert(`${values.name} is already in contacts`);
    }
    setIsLoading(true);
    await dispatch(addContact(values));
    setIsLoading(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <StyledForm>
        <Label>
          <LabelText>Name</LabelText>
          <Input type="text" name="name" />
          <FormError name="name" />
        </Label>
        <Label>
          <LabelText>Number</LabelText>
          <Input type="tel" name="number" />
          <FormError name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
