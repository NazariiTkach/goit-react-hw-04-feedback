import styled from '@emotion/styled';

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const BtnElement = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: #f8f8ff;
  font-size: 20px;
  text-transform: capitalize;
  &:nth-of-type(1) {
    background-color: #32CD32;
  }
  &:nth-of-type(2) {
    background-color: #FF8C00;
    &:hover {
    }
  }
  &:nth-of-type(3) {
    background-color: #8B0000;
  }
  &:hover {
    transform: scale(1.1);
  }
`;