import styled from 'styled-components';
import { Select, Table } from 'antd';

export const TABLE = {
  background: {
    hoverRow: '#e8e8e9',
    selectedRow: '#e6f7ff',
    hoverSelectedRow: '#dcf4ff',
  },
};

export const COMMON = {
  background: {
    white: '#ffffff',
    title: '#cfd8dc',
    modal: '#f2f2f2',
    bt_modal: '#f1f3f5',
  },
  color: {
    white: '#ffffff',
    error: '#dd281f',
    title: '#333333',
    placeholder_input: '#212529',
  },
  border: {
    white: '#ffffff',
    input: '#868e96',
    modal: '#b0bec5',
    bt_modal: '#f1f3f5',
  },
};

const TableEtn = styled(Table)`
  .disabled-row {
    opacity: 0.3;
    cursor: not-allowed !important;
  }
  .disabled-row:active {
    pointer-events: none;
  }

  .ant-table-wrapper {
    border-radius: 16px;
    height: 100%;
    box-shadow: unset;
  }

  .ant-table {
    font-size: 1em;
    color: ${props => props.theme.colors.textColor.placeholder_input};
    font-weight: 400;
  }

  .ant-table-header {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .ant-table-body {
    overflow: auto !important;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  .ant-table-container {
    border-radius: 16px;
    border: 1px solid ${props => props.theme.colors.border.title};
    border-top: none;
  }

  .ant-table-thead > tr > th {
    font-size: 1em;
    background-color: ${props => props.theme.colors.background.title};
    font-weight: 700;
    height: 50px !important;
  }

  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td,
  .ant-table tfoot > tr > th,
  .ant-table tfoot > tr > td {
    padding: 8.5px 10px;
  }

  .ant-table .ant-table-expanded-row-fixed {
    margin: -8.5px -18px;
  }

  .ant-table-pagination {
    display: none;
  }

  .ant-table-body::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    background-color: unset;
    border-radius: 8px;
  }

  .ant-table-body::-webkit-scrollbar-track {
    margin-bottom: 10px;
    margin-left: 10px;
    border-radius: 6px;
    background: ${props => props.theme.colors.background.white};
  }

  .ant-table-body::-webkit-scrollbar-thumb {
    border-radius: 6px;
    height: 117px;
    background: ${props => props.theme.colors.background.scroll};
    border: 1px solid ${props => props.theme.colors.border.scroll};
  }

  .ant-table-body::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.background.white};
  }

  .ant-table-body::-webkit-scrollbar-corner {
    display: none;
  }

  .ant-table-body::-webkit-scrollbar-thumb:active {
    background: ${props => props.theme.colors.background.white};
  }

  .ant-table-body::-webkit-scrollbar-track-piece {
    background-color: rgb(255, 255, 255);
  }

  .ant-table-ping-right:not(.ant-table-has-fix-right)
    .ant-table-container::after {
    box-shadow: none;
  }

  .ant-table-ping-left:not(.ant-table-has-fix-left)
    .ant-table-container::before {
    box-shadow: none;
  }

  .ant-table-cell-scrollbar {
    box-shadow: none;
  }

  .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    display: none;
  }

  .icon-row-layout {
    display: none;
  }

  .ant-table-row:hover {
    font-weight: 700;
    background: ${TABLE.background.hoverRow};
  }

  .ant-table-tbody > tr.ant-table-row:hover > td,
  .ant-table-tbody > tr > td.ant-table-cell-row-hover {
    background: none;
  }

  .ant-table-row:hover .icon-row-layout {
    margin: -8px 0 -8px -12px;
    display: flex;
  }

  .ant-table-row:hover .text-status-layout {
    display: none;
  }

  .ant-table-tbody > tr {
    cursor: pointer;
  }

  .ant-table-tbody > tr > td > div {
    overflow: hidden;
    position: relative;
    max-height: 22px;
    margin-right: -1em;
    padding-right: 1em;
    width: 100%;

    :before {
      content: '...';
      position: absolute;
      right: 0;
      bottom: 0;
    }

    :after {
      content: '';
      position: absolute;
      right: 0;
      width: 1em;
      height: 2em;
      margin-top: 0.2em;
      background: ${props => props.theme.colors.background.white};
    }
  }

  .ant-table-tbody > tr > td {
    transition: none;
  }

  .ant-table-tbody > tr:hover > td > div {
    :after {
      background: ${props => props.theme.colors.background.hoverRow};
    }
  }

  .ant-table-tbody > tr.ant-table-row-selected > td > div {
    :after {
      background: ${props => props.theme.colors.background.selectedRow};
    }
  }

  .ant-table-tbody > tr.ant-table-row-selected:hover > td > div {
    :after {
      background: ${props => props.theme.colors.background.hoverSelectedRow};
    }
  }

  .ant-checkbox-wrapper {
    margin: -3px -1px;
  }

  .ant-table-column-sort {
    background: none;
  }

  .ant-table-expanded-row-fixed {
    max-height: max-content !important;
  }

  .ant-table-tbody > tr.ant-table-placeholder:hover > td > div {
    :after {
      background: ${props => props.theme.colors.background.white};
    }
  }
`;

const ContainerPagination = styled.div`
  margin-top: 10px;
  display: ${props => (props.pagination ? 'flex' : 'none')};
  align-items: center;
  justify-content: flex-end;

  .ant-pagination-simple .ant-pagination-simple-pager input {
    height: 32px;
  }
`;

const SelectPageSie = styled(Select)`
  height: 32px;
  margin-top: 4px;
`;
const OptionPageSie = styled(Select)``;

const RowForm = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;

export { TableEtn, ContainerPagination, SelectPageSie, OptionPageSie, RowForm };
