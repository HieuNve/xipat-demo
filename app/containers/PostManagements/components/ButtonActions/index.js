import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { ButtonCustom, Icon } from './style';
import iconDetails from '../../../../images/icon/icon-details.svg';

const ButtonActions = ({ onClickView }) => (
  <div>
    <Tooltip title="View Information">
      <ButtonCustom onClick={onClickView}>
        <Icon src={iconDetails} alt="" />
      </ButtonCustom>
    </Tooltip>
  </div>
);

ButtonActions.propTypes = {
  onClickView: PropTypes.func,
};

export default ButtonActions;
