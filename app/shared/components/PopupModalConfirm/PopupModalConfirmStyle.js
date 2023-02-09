import styled from 'styled-components';
import Modal from 'antd/es/modal/Modal';
import { Button } from 'antd';

const ModalCustom = styled(Modal)`
  top: 35%;
  width: 32% !important;

  .ant-modal-body {
    padding: 0;
  }

  .ant-modal-content {
    border-radius: 8px;
  }

  .ant-modal-footer {
    border-top: none;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-left: 10px;
  span {
    padding-right: 5px;
  }
`;

const TextLabelModal = styled.div`
  padding: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 1.1em;
  line-height: 34px;
  color: ${props => props.theme.colors.backPrimary};
`;
const TitleMessage = styled.b`
  word-break: break-all;
`;

const ButtonFooter = styled(Button)`
  display: flex;
  width: 70px;
  height: 35px;
  align-items: center;
  border-radius: 5px;
  color: ${props => props.theme.colors.textColor.error};
  justify-content: center;

  &.ant-btn:hover,
  &.ant-btn:focus {
    border-color: ${props => props.theme.colors.bluePrimary};
    color: ${props => props.theme.colors.bluePrimary};
  }
  &.ant-btn-primary,
  &.ant-btn {
    background-color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.border.input};
    padding: 5px 10px;
  }
`;

export { Wrapper, ModalCustom, TextLabelModal, ButtonFooter, TitleMessage };
