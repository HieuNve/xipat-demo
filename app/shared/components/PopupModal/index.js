import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import pathCloseModel from 'images/closeModal.svg';
import { ButtonFooter, DivFooter, ModalCustom, ModalTitle } from './style';
const ModalPopup = ({
  title,
  onClickSave,
  isSaveAndReset,
  onClickSaveAndReset,
  onClickCancel,
  isLoading,
  children,
  width,
  nameSave,
  nameSaveAndReset,
}) => {
  const { t } = useTranslation();

  const onKeyDownListener = e => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClickCancel(false);
    }
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      onClickSave();
    }
    if (e.ctrlKey && e.key === 'd') {
      e.preventDefault();
      onClickSaveAndReset();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDownListener);
    return () => {
      document.removeEventListener('keydown', onKeyDownListener);
    };
  });

  return (
    <ModalCustom
      centered
      closable
      visible
      width={width}
      onCancel={() => {
        onClickCancel(false);
      }}
      closeIcon={<img style={{ width: '16px' }} src={pathCloseModel} alt="" />}
      footer={[
        <DivFooter>
          <ButtonFooter loading={isLoading} onClick={onClickSave}>
            <div>{nameSave}</div>
          </ButtonFooter>
          {isSaveAndReset ? (
            <ButtonFooter loading={isLoading} onClick={onClickSaveAndReset}>
              <div> {nameSaveAndReset}</div>
            </ButtonFooter>
          ) : null}
          <ButtonFooter
            onClick={() => onClickCancel(false)}
            style={{ marginLeft: '10px' }}
          >
            <div>{t('common.cancel')}</div>
          </ButtonFooter>
        </DivFooter>,
      ]}
    >
      <ModalTitle>{title}</ModalTitle>
      {children}
    </ModalCustom>
  );
};
ModalPopup.propTypes = {
  title: PropTypes.string,
  onClickSave: PropTypes.func,
  onClickCancel: PropTypes.func,
  isSaveAndReset: PropTypes.bool,
  onClickSaveAndReset: PropTypes.func,
  isLoading: PropTypes.bool,
  children: PropTypes.element,
  width: PropTypes.number,
  nameSave: PropTypes.string,
  nameSaveAndReset: PropTypes.string,
};
export default ModalPopup;
