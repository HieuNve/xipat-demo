import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'bmos-react-module';
import { useTranslation } from 'react-i18next';
import { QuestionCircleOutlined } from '@ant-design/icons';
import pathCloseModel from 'images/closeModal.svg';
import {
  TextLabelModal,
  TitleMessage,
  Wrapper,
} from './PopupModalConfirmStyle';

const PopupModalConfirm = ({
  content,
  subjectConfirm,
  onCancel,
  onAccept,
  title,
  nameSave,
}) => {
  const { t } = useTranslation();
  return (
    <Modal
      visible
      onClickCancel={onCancel}
      width={700}
      onClickSave={onAccept}
      closeIcon={<img style={{ width: '16px' }} src={pathCloseModel} alt="" />}
      title={title}
      nameSave={nameSave}
    >
      <Wrapper>
        <div style={{ marginLeft: '16px', marginRight: '3px' }}>
          <QuestionCircleOutlined
            size="large"
            style={{
              color: '#2b79e5',
              fontSize: 25,
            }}
          />
        </div>
        <TextLabelModal>
          {content}
          <TitleMessage> {` "${subjectConfirm}" `}</TitleMessage>
          {t(`common.no`).toLowerCase()} ?
        </TextLabelModal>
      </Wrapper>
    </Modal>
  );
};
PopupModalConfirm.propTypes = {
  onCancel: PropTypes.func,
  onAccept: PropTypes.func,
  content: PropTypes.string,
  subjectConfirm: PropTypes.string,
  title: PropTypes.string,
  nameSave: PropTypes.string,
};
export default PopupModalConfirm;
