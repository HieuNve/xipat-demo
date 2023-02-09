import styled from 'styled-components';
import { Table } from 'antd';

const TableModalEtn = styled(Table)`
  .ant-table-body {
    overflow: auto !important;
  }

  .ant-table {
    border-radius: 16px;
  }

  .ant-table-thead > tr > th {
    font-size: 1em;
    background-color: #c5ced9;
    font-weight: 700;
    height: 50px !important;
  }
  .ant-table-tbody > tr > td {
    border-top: 1px solid ${props => props.theme.colors.border.tb_modal};
    border-bottom: none;
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
    background: ${props => props.theme.colors.background.white}
    margin-right: 10px;
  }

  .ant-table-body::-webkit-scrollbar-thumb {
    border-radius: 6px;
    height: 117px;
    background:${props => props.theme.colors.background.scroll}
    border: 1px solid ${props => props.theme.colors.border.scroll}
  }

  .ant-table-body::-webkit-scrollbar-thumb:hover,
  .ant-table-body::-webkit-scrollbar-thumb:active {
    background: ${props => props.theme.colors.background.white}
  }

  .ant-table-body::-webkit-scrollbar-corner {
    display: none;
  }

  .ant-table-body::-webkit-scrollbar-track-piece {
    background-color: rgb(255, 255, 255);
  }

  .ant-table-container {
    border-radius: 16px;
    border: 1px solid #c5ced9;
    border-top: none;
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
    background: rgba(33, 37, 41, 0.1);
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

  .ant-table-tbody > tr > td {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const TableModalEtnHasBoder = styled(TableModalEtn)`
  .ant-table-header {
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
  }
  .ant-table-body {
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
  }
`;

export { TableModalEtn, TableModalEtnHasBoder };
