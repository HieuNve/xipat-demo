import styled from 'styled-components';
import { Select } from 'antd';

const SelectOption = styled(Select)`
  height: 40px;
  width: 70%;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: ${props => props.theme.colors.backPrimary};
  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    height: 40px;
    background: ${props => props.theme.background.white};
    border: 1px solid ${props => props.theme.border.input};
    box-sizing: border-box;
    border-radius: 5px;
  }
  &.ant-select-single .ant-select-selector .ant-select-selection-item,
  &.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    padding: 4px;
  }
  &.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    padding: 0px 5px;
  }
`;
export { SelectOption };
