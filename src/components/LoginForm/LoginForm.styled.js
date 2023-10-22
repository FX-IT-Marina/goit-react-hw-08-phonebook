import styled from 'styled-components';

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background-color: black;
  border: 2px solid #eac645;
  border-radius: 20px;
  padding: 15px 10px;
  box-sizing: border-box;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.768), 0 16px 20px rgba(39, 37, 37, 0.2);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  border-radius: 10px;
  padding: 4px 10px;
  font-size: 14px;
  border: 2px solid #eac645;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 4px;
`;

export const LabelText = styled.span`
  color: #eac645;
  font-size: 15px;
  font-weight: 700;
`;

export const ButtonText = styled.button`
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
