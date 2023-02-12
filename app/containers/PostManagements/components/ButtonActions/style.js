import styled from 'styled-components';

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const ButtonCustom = styled.div`
  width: 40px;
  height: 35px;
  cursor: pointer;
  background: #2f54eb;
  border: 1px solid #2f54eb;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
  }
`;
