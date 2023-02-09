import React, { useState } from 'react';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';
import { TableModalEtn, TableModalEtnHasBoder } from './style';
import { PAGE_SIZE_DEFAULT } from '../../../utils/constants';

const TableModal = ({
  columns,
  data,
  displayPagination,
  hasBoder,
  rowSelection,
}) => {
  const [page, setPage] = useState(1);
  const [size, setPageSize] = useState(PAGE_SIZE_DEFAULT);

  const onClickRow = e => {
    const elementList = e.target.parentElement.children;
    // eslint-disable-next-line no-restricted-syntax
    for (const item of elementList) {
      if (item.style.whiteSpace === 'nowrap' || item.style.whiteSpace === '') {
        item.style.whiteSpace = 'normal';
      } else {
        item.style.whiteSpace = 'nowrap';
      }
    }
  };

  return (
    <div>
      {hasBoder ? (
        <TableModalEtnHasBoder
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          scroll={{ y: 400 }}
          pagination={{
            current: page,
            pageSize: size,
          }}
          onRow={() => ({
            onClick: e => onClickRow(e),
          })}
        />
      ) : (
        <TableModalEtn
          columns={columns}
          dataSource={data}
          scroll={{ y: 400 }}
          pagination={{
            current: page,
            pageSize: size,
          }}
          onRow={() => ({
            onClick: e => onClickRow(e),
          })}
        />
      )}

      <Pagination
        style={{
          marginTop: '20px',
          justifyContent: 'flex-end',
          display: displayPagination,
          float: 'right',
        }}
        defaultCurrent={1}
        total={data.length}
        showTotal={total => `Tổng số: ${total} `}
        current={page}
        pageSize={size}
        onChange={(current, pageSize) => {
          setPage(current);
          setPageSize(pageSize);
        }}
      />
    </div>
  );
};
TableModal.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  displayPagination: PropTypes.string,
  hasBoder: PropTypes.bool,
  rowSelection: PropTypes.func,
};
export default TableModal;
