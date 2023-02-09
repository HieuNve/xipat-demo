import React from 'react';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';

const ContentCol = ({ text }) => (
  <Tooltip title={text}>
    <div>{text}</div>
  </Tooltip>
);
ContentCol.propTypes = {
  text: PropTypes.string,
};

export default ContentCol;
