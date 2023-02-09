import styled from 'styled-components';
import { DatePicker } from 'antd';
import { COMMON } from '../../../utils/color';

const StyleDatePicker = styled(DatePicker)`
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

export default StyleDatePicker;
