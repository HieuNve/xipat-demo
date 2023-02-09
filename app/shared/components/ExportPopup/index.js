import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Modal } from 'bmos-react-module';
import {
  Container,
  IconExport,
  SpanBold,
  StyleTextExport,
  TextExport,
  TextExportAlert,
} from './style';
import iconCloseModel from '../../../images/closeModal.svg';
import iconTick from '../../../images/icons/icon-tick.svg';
import iconAlert from '../../../images/icons/Vector.svg';
import { MAX_OF_RECORD } from '../../../utils/constants';
import ButtonFooter from './component/ButtonFooter';

const ExportPopup = ({
  onClose,
  totalRecord,
  onClickSave,
  textExport,
  textNoteExport,
  textAlertExport,
}) => {
  const { t } = useTranslation();
  return (
    <Modal
      title=""
      width={750}
      onClickCancel={onClose}
      onClickSave={onClickSave}
      iconClose={iconCloseModel}
      nameSave={t('common.yes')}
      nameCancel={t('common.close')}
      isCustomFooter
      buttonFooter={
        <ButtonFooter
          onClose={onClose}
          onClickYes={onClickSave}
          nameSave={t('common.yes')}
          nameCancel={t('common.close')}
        />
      }
    >
      <Container>
        {totalRecord < MAX_OF_RECORD ? (
          <IconExport src={iconTick} alt="" />
        ) : (
          <IconExport src={iconAlert} alt="" />
        )}
        <StyleTextExport>
          <TextExport>
            {totalRecord < MAX_OF_RECORD ? (
              <>
                <SpanBold>{totalRecord}</SpanBold> {textExport}
                <SpanBold> {t('common.exportFileExcel')} </SpanBold>?
              </>
            ) : (
              <>{textAlertExport}</>
            )}
          </TextExport>
          <TextExportAlert>
            {totalRecord < MAX_OF_RECORD && <i>{textNoteExport}</i>}
          </TextExportAlert>
        </StyleTextExport>
      </Container>
    </Modal>
  );
};

ExportPopup.propTypes = {
  onClose: PropTypes.func,
  totalRecord: PropTypes.number,
  onClickSave: PropTypes.func,
  textExport: PropTypes.string,
  textNoteExport: PropTypes.string,
  textAlertExport: PropTypes.string,
};

export default ExportPopup;
