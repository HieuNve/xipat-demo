import styled from 'styled-components';
import { Button, Modal } from 'antd';

const ModalCustom = styled(Modal)`
  .ant-modal-content {
    border: 1px solid ${props => props.theme.border.titleModal};
    border-radius: 16px;
    width: calc(100%);
  }
  .ant-modal-body {
    padding: 0;
  }
  .ant-modal-footer {
    padding-top: 16px;
    padding-bottom: 20px;
    border-top: none;
  }
`;
const ModalTitle = styled.div`
  height: 50px;
  background: ${props => props.theme.background.titleModal};
  border: 1px solid ${props => props.theme.border.titleModal};
  border-radius: 16px 16px 0 0;
  display: flex;
  position: relative;
  padding: 14px 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 1.14285em;
  line-height: 20px;
  color: #333333;
`;
const ButtonFooter = styled(Button)`
  display: flex;
  height: 40px;
  align-items: center;
  border-radius: 8px;
  color: ${props => props.theme.colors.backPrimary};
  justify-content: center;

  &.ant-btn:hover,
  &.ant-btn:focus {
    background-color: ${props => props.theme.background.titleModal} !important;
    //font-weight: 600;
  }
  &.ant-btn-primary,
  &.ant-btn {
    background-color: ${props => props.theme.background.ButtonModal};
    border-color: ${props => props.theme.background.ButtonModal};
    color: ${props => props.theme.colors.backPrimary};
    padding: 5px 10px;
  }
`;
const DivFooter = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  font-style: normal;
  font-weight: 400;
  justify-content: center;
  font-size: 1.07142em;
  line-height: 20px;
  color: #2b2929;
  align-items: center;
`;
export { ModalCustom, ModalTitle, ButtonFooter, DivFooter };
