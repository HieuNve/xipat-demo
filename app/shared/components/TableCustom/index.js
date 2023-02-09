import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';
import loadingIcon from 'images/loading.svg';
import { useMeasure } from 'react-use';
import { useTranslation } from 'react-i18next';
import {
  TableEtn,
  ContainerPagination,
  SelectPageSie,
  OptionPageSie,
} from './style';
import { PAGE_SIZE_DEFAULT } from '../../../utils/constants';

const TableCustom = ({
  columns,
  data,
  pagination,
  rowSelection,
  onChangePagination,
  isLoading,
  onChangeSorter,
  totalRecord,
  onResetPagination,
  disableClickRow,
  rowClassName,
}) => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [size, setPageSize] = useState(PAGE_SIZE_DEFAULT);
  const [totalList, setTotalList] = useState([]);
  useEffect(() => {
    if (onResetPagination) {
      setPage(1);
      setPageSize(PAGE_SIZE_DEFAULT);
    }
  }, [onResetPagination]);

  useEffect(() => {
    if (totalRecord <= 50) {
      setTotalList([50]);
    } else if (totalRecord <= 100) {
      setTotalList([50, 100]);
    } else if (totalRecord <= 200) {
      setTotalList([50, 100, 200]);
    } else if (totalRecord <= 300) {
      setTotalList([50, 100, 200, 300]);
    } else if (totalRecord <= 500) {
      setTotalList([50, 100, 200, 300, 500]);
    } else if (totalRecord > 500) {
      setTotalList([50, 100, 200, 300, 500, 1000]);
    }
  }, [totalRecord]);

  const expandRow = elementList => {
    // eslint-disable-next-line no-restricted-syntax
    for (const element of elementList) {
      const item = element.children;
      if (item.length !== 0)
        if (item[0].style.maxHeight === 'none') {
          item[0].style.maxHeight = '22px';
        } else {
          item[0].style.maxHeight = 'none';
        }
    }
  };

  const onClickRow = e => {
    if (!disableClickRow) {
      const elementList = e.target.parentElement.children;
      const spanList = e.target.parentElement.parentElement.children;
      if (elementList.length === 1) {
        expandRow(spanList);
      } else {
        expandRow(elementList);
      }
    }
  };

  const [ref, { height }] = useMeasure();
  return (
    <div ref={ref} style={{ height: '100%', overflow: 'hidden' }}>
      <TableEtn
        style={{
          marginRight: '15px',
        }}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        scroll={{ x: 1300, y: height - 110 }}
        pagination={{
          current: page,
          pageSize: size,
        }}
        locale={{
          triggerDesc: t('common.sort_descending'),
          triggerAsc: t('common.sort_up_ascending'),
          cancelSort: t('common.cancel_sort'),
        }}
        loading={{
          indicator: (
            <img
              style={{ width: '70px', height: '70px' }}
              alt=""
              src={loadingIcon}
            />
          ),
          spinning: isLoading,
        }}
        onChange={(paginations, filters, sorter) => {
          onChangeSorter(sorter);
        }}
        onRow={() => ({
          onClick: e => onClickRow(e),
        })}
        rowClassName={rowClassName}
      />
      {data.length !== 0 && (
        <ContainerPagination pagination={pagination}>
          <SelectPageSie
            value={size}
            onChange={selected => {
              setPageSize(selected);
              setPage(1);
              onChangePagination(selected, 1);
            }}
          >
            {totalList.map(value => (
              <OptionPageSie value={value}>{value}</OptionPageSie>
            ))}
          </SelectPageSie>
          <Pagination
            simple
            defaultCurrent={1}
            total={totalRecord}
            showTotal={total => `Tổng số: ${total} `}
            current={page}
            pageSize={size}
            onChange={(current, pageSize) => {
              setPage(current);
              setPageSize(pageSize);
              onChangePagination(pageSize, current);
            }}
          />
        </ContainerPagination>
      )}
    </div>
  );
};
TableCustom.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  pagination: PropTypes.bool,
  rowSelection: PropTypes.bool,
  onChangePagination: PropTypes.func,
  isLoading: PropTypes.bool,
  onChangeSorter: PropTypes.func,
  totalRecord: PropTypes.number,
  onResetPagination: PropTypes.bool,
  disableClickRow: PropTypes.bool,
  rowClassName: PropTypes.func,
};
export default TableCustom;