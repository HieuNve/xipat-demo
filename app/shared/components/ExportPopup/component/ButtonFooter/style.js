import styled from 'styled-components';
import { Button } from 'antd';

export const DivFooter = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
`;

const ButtonFooter = styled(Button)`
  display: flex;
  height: 40px;
  align-items: center;
  border-radius: 12px;
  color: ${props => props.theme.colors.order.buttonColor};
  justify-content: center;
  font-weight: 600;

  &.ant-btn:hover,
  &.ant-btn:focus {
    color: ${props => props.theme.colors.order.buttonColor};
  }

  :hover {
    -webkit-filter: drop-shadow(0px 0px 3px #000);
    filter: drop-shadow(0px 0px 3px #000);
  }

  &.ant-btn-primary,
  &.ant-btn {
    border-color: ${props => props.theme.colors.order.buttonColor};
    padding: 5px 10px;
  }
`;

export const ButtonAdd = styled(ButtonFooter)`
  width: 100px;
  background-color: ${props => props.theme.colors.order.buttonColor} !important;
  color: ${props => props.theme.colors.white};

  &.ant-btn:hover,
  &.ant-btn:focus {
    color: ${props => props.theme.colors.white};
  }
`;
export const ButtonSave = styled(ButtonFooter)`
  width: 100px;
  background-color: ${props => props.theme.colors.white} !important;
  color: ${props => props.theme.colors.order.buttonSave};

  &.ant-btn:hover,
  &.ant-btn:focus {
    color: ${props => props.theme.colors.order.buttonSave};
  }

  &.ant-btn-primary,
  &.ant-btn {
    border-color: ${props => props.theme.colors.order.buttonSave};
  }
`;
