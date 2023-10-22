import styled from 'styled-components';
import { Form } from 'formik';
import { Field } from 'formik';

export const StyledForm = styled(Form)`
  // width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  padding: 20px 35px;
  border: 2px solid #eac645;
  border-radius: 20px;
  background-color: black;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.768), 0 16px 20px rgba(39, 37, 37, 0.2);
`;

export const Input = styled(Field)`
  border-radius: 24px;
  padding: 4px 10px;
  font-size: 20px;
  border: 2px solid #eac645;
`;

export const Error = styled.p`
  color: red;
  position: absolute;
  font-size: 14px;
  top: 10px;
  left: 110px;
`;

export const Button = styled.button`
  border-radius: 50px;

  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  width: 150px;
  cursor: pointer;

  font-weight: 600;
  color: #eac645;
  font-size: 20px;
  font-weight: 800;
  &:hover {
    border: 2px solid #eac645;
  }
`;

export const Label = styled.label`
  font-size: 25px;
  color: rgb(37, 37, 37);
  font-weight: 600;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  position: relative;
`;

export const LabelText = styled.span`
  color: #eac645;
  font-size: 25px;
  font-weight: 700;
`;
