import React from 'react';
import styled from 'styled-components';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';

const FormControlMuiCustom = styled(FormControl)`
  width: 100%;

  [class*='MuiOutlinedInput-root'] {
    border-radius: 10px;
    ${props => (props.isMultiple ? 'height: auto' : 'height: 45px')}
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

  [class*='MuiOutlinedInput-input'].MuiAutocomplete-input {
    padding: 3.5px 4px 7.5px 6px !important;
  }
`;

const FloatSelectSearchMui = React.forwardRef((props, ref) => (
  <FormControlMuiCustom isMultiple={props.isMultiple}>
    <Autocomplete {...props} ref={ref} id="combo-box-demo" disablePortal />
  </FormControlMuiCustom>
));

FloatSelectSearchMui.propTypes = {
  isMultiple: PropTypes.bool,
};

export default FloatSelectSearchMui;
