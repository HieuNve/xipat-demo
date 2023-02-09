import React from 'react';
import styled from 'styled-components';
import { InputNumber } from 'antd';

const StyledInputNumber = styled(InputNumber)`
  border-radius: 4px;

  background-color: #ffffff;
  color: #1a1a1a;
  border-color: #d9d9d9;
  .ant-input-number-handler-wrap {
    opacity: 1 !important;
    background-color: #ffffff;
    border-color: #d9d9d9;
    .ant-input-number-handler {
      .ant-input-number-handler-down-inner,
      .ant-input-number-handler-up-inner {
        // display: none;
      }
    }
  }

  .ant-input-number-handler-up-inner,
  .ant-input-number-handler-down-inner {
    color: #1a1a1a;
  }
`;

export default props => <StyledInputNumber {...props} />;
