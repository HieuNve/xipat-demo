import styled from 'styled-components';
import { Input } from 'antd';

const InputText = styled(Input)`
  height: 40px;
  background: ${props => props.theme.background.white};
  border: 1px solid ${props => props.theme.border.input};
  box-sizing: border-box;
  border-radius: 5px;
  ::-webkit-input-placeholder,
  :-ms-input-placeholder,
  ::placeholder {
    color: ${props => props.theme.colors.backPrimary};
  }
`;
const InputPasswordText = styled(Input.Password)`
  height: 40px;
  background: ${props => props.theme.background.white};
  border: 1px solid ${props => props.theme.border.input};
  box-sizing: border-box;
  border-radius: 5px;
  &.ant-input-affix-wrapper {
    background: ${props => props.theme.background.white};
    border: 1px solid ${props => props.theme.border.input};
    box-sizing: border-box;
    border-radius: 5px;
  }
  .ant-input ::-webkit-input-placeholder,
  .ant-input :-ms-input-placeholder,
  .ant-input ::placeholder {
    color: ${props => props.theme.colors.backPrimary};
  }
`;
export { InputText, InputPasswordText };
