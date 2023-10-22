import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/Operations';
import { Form, Label, Input } from '../LoginForm/LoginForm.styled';
import { LabelText, ButtonText } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log('Form submitted!');
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <LabelText>Username</LabelText>
        <Input type="text" name="name" />
      </Label>
      <Label>
        <LabelText>Email</LabelText>
        <Input type="email" name="email" />
      </Label>
      <Label>
        <LabelText>Password</LabelText>
        <Input type="password" name="password" />
      </Label>
      <ButtonText type="submit">Sign up</ButtonText>
    </Form>
  );
};
