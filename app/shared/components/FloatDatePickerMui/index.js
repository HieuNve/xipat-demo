import React from 'react';
import styled from 'styled-components';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import { FORMAT_DATE } from '../../../utils/constants';

const DatePickerMui = styled(DesktopDatePicker)`
  width: 100%;

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

const FloatDatePickerMui = props => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePickerMui
      {...props}
      inputFormat={FORMAT_DATE}
      renderInput={params => <TextField {...params} />}
    />
  </LocalizationProvider>
);

export default FloatDatePickerMui;
