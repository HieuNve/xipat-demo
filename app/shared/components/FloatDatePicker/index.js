import React from 'react';
import localeVI from 'antd/lib/date-picker/locale/vi_VN';
import PropTypes from 'prop-types';
import { StyleDatePicker, DivFloatLabel, LabelNormal } from './style';

const FloatDatePicker = React.forwardRef((props, ref) => (
  <DivFloatLabel>
    <StyleDatePicker {...props} ref={ref} locale={localeVI} />
    <LabelNormal>{props.label}</LabelNormal>
  </DivFloatLabel>
));
FloatDatePicker.propTypes = {
  label: PropTypes.string,
};

export default FloatDatePicker;
