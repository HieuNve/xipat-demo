import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Modal } from 'bmos-react-module';
import TableModal from '../TableModal';
import { Container } from './HistoryModalStyle';
import pathCloseModel from '../../../images/icons/search-remove.svg';
import { formatFullDateTime } from '../../commonFunction';

export const COLUMN_HISTORY = t => [
  {
    title: t('common.historySTT'),
    dataIndex: 'index',
    width: 50,
    align: 'center',
    render: (text, record, index) => <div>{index + 1}</div>,
  },
  {
    title: t('common.historyDate'),
    dataIndex: 'CreateDate',
    width: 100,
    render: text => <div>{formatFullDateTime(text, 'DD/MM/YYYY HH:MM')}</div>,
  },
  {
    title: t('common.historyAccount'),
    dataIndex: 'UserName',
    width: 100,
    render: text => <div>{text}</div>,
  },
  {
    title: t('common.historyLog'),
    dataIndex: 'Content',
    width: 280,
    render: text => <div dangerouslySetInnerHTML={{ __html: text }} />,
  },
];

const HistoryModal = ({ title, onClose, dataHistory }) => {
  const { t } = useTranslation();
  return (
    <Modal
      title={title}
      onClickCancel={onClose}
      width={1000}
      centered
      disableConfirm
      iconClose={pathCloseModel}
    >
      <Container>
        <TableModal
          hasBoder
          visible
          data={dataHistory}
          columns={COLUMN_HISTORY(t)}
          scroll={{ y: 400 }}
          displayPagination="none"
        />
      </Container>
    </Modal>
  );
};
HistoryModal.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string,
  dataHistory: PropTypes.array,
};

export default HistoryModal;
