import React from 'react';
import { InputText } from './inputStyles';

const InputValue = React.forwardRef((props, ref) => (
  <InputText {...props} ref={ref} />
));

export default InputValue;
