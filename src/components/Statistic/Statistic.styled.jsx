import styled from '@emotion/styled';

export const StatList = styled.ul`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  flex-direction: column;
  font-weight: 700;
`;

export const StatItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #808080;
  font-size: 25px;
  &:nth-of-type(1) {
    color: #32CD32;
  }
  &:nth-of-type(2) {
    color:  #FF8C00;
  }
  &:nth-of-type(3) {
    width: 100%;
    margin-bottom: 15px;
    padding-bottom: 20px;
    border-bottom: 1px dashed rgb(83, 83, 83);
    color: #8B0000;
  }
`;