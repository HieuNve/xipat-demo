import React from 'react';
import localeVI from 'antd/lib/date-picker/locale/vi_VN';
import StyleDatePicker from './StyleDatePicker';

const DatePicker = React.forwardRef((props, ref) => (
  <StyleDatePicker {...props} ref={ref} locale={localeVI} format="DD/MM/YYYY" />
));
export default DatePicker;
