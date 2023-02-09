import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';

const InputCustomMui = styled(TextField)`
  width: 100%;
  line-height: 30px;
  margin-bottom: 10px;

  [class*='MuiOutlinedInput-root'] {
    border-radius: 10px;
    height: 45px;
  }

  [class*='MuiInputLabel-root'] {
    top: -3px;
  }

  [class*='MuiInputLabel-root'].Mui-focused,
  [class*='MuiInputLabel-root'].MuiFormLabel-filled {
    top: 2px;
  }

  [class*='MuiOutlinedInput-input'] {
    padding: 12.5px 14px;
  }
`;

const FloatInputMui = props => (
  <InputCustomMui id="outlined-basic" variant="outlined" {...props} />
);

export default FloatInputMui;
