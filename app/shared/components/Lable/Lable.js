import React from 'react';
import PropTypes from 'prop-types';

import { RedStart, Wrapper } from './style';

Label.defaultProps = {
  isRequired: false,
};

export default function Label(props) {
  return (
    <Wrapper>
      {props.title} {props.isRequired && <RedStart>*</RedStart>}
    </Wrapper>
  );
}

Label.propTypes = {
  isRequired: PropTypes.bool,
  title: PropTypes.string,
};
