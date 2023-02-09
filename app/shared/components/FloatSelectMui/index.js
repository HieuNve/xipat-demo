import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const InputSelectCustomMui = styled(TextField)`
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

const FloatSelectMui = props => (
  <InputSelectCustomMui
    select
    id="outlined-basic"
    variant="outlined"
    onChange={e => props.onChange(e.target.value)}
    label={props.label}
    value={props.dataValue}
  >
    {props.children}
  </InputSelectCustomMui>
);

FloatSelectMui.propTypes = {
  dataValue: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FloatSelectMui;
