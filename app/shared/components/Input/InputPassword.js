import React from 'react';
import { InputPasswordText } from './inputStyles';

const InputPassword = React.forwardRef((props, ref) => (
  <InputPasswordText {...props} ref={ref} />
));

export default InputPassword;
