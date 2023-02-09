import React from 'react';
import { SelectOption } from './selectStyle';

const SelectCustom = React.forwardRef((props, ref) => (
  <SelectOption {...props} ref={ref}>
    {/* eslint-disable-next-line react/prop-types */}
    {props.children}
  </SelectOption>
));

export default SelectCustom;
