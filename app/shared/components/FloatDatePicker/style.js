import styled from 'styled-components';
import { DatePicker } from 'antd';
import { COMMON } from '../../../utils/color';

export const StyleDatePicker = styled(DatePicker)`
  &.ant-picker {
    border-radius: 5px;
    height: 40px;
    background: ${COMMON.background.white};
    border: 1px solid ${COMMON.border.input};
    box-sizing: border-box;
    font-size: 24px;
  }

  .ant-picker-suffix {
    color: ${COMMON.border.input};
  }

  .ant-picker-input input::placeholder {
    color: ${COMMON.color.placeholder_input};
  }
`;

export const DivFloatLabel = styled.div`
  position: relative;

  label:after {
    content: ' ';
    display: block;
    position: absolute;
    background: ${COMMON.background.white};
    height: 4px;
    top: 50%;
    left: -0.1em;
    right: -0.2em;
    z-index: -1;
  }
`;

const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 12px;
  top: 11px;
  transition: 0.2s ease all;
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.25);
`;

export const LabelNormal = styled(Label)`
  z-index: 2;
  top: -8px;
  padding: 0 4px;
  margin-left: -4px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${COMMON.color.placeholder_input};
`;
