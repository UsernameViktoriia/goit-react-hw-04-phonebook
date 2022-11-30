import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  font-size: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #2362df;
`;

export const Input = styled.input`
  border: 2px solid #2362df;
  border-radius: 5px;
  padding: 5px;
  font-size: 20px;
  background: #f4f40033;
`;

export const Button = styled.button`
  margin: 0 auto;
  margin-top: 15px;
  border: 0;
  border-radius: 5px;
  background: #4676d7;
  color: #fff;
  padding: 8px 16px;
  font-size: 20px;
`;
