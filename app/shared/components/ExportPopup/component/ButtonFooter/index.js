import React from 'react';
import PropTypes from 'prop-types';
import { ButtonAdd, ButtonSave, DivFooter } from './style';

const ButtonFooter = ({ onClickYes, onClose, nameCancel, nameSave }) => (
  <DivFooter>
    <ButtonSave onClick={onClose}>{nameCancel}</ButtonSave>
    <ButtonAdd onClick={onClickYes}>{nameSave}</ButtonAdd>
  </DivFooter>
);

ButtonFooter.propTypes = {
  onClickYes: PropTypes.func,
  onClose: PropTypes.func,
  nameCancel: PropTypes.string,
  nameSave: PropTypes.string,
};

export default ButtonFooter;
