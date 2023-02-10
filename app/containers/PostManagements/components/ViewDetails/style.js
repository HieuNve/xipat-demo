import styled from 'styled-components';
import { Modal } from 'antd';

export const ModalCustom = styled(Modal)`
  .ant-modal-content {
    border-radius: 20px;
  }
  .ant-modal-header {
    border-radius: 20px 20px 0 0;
  }
`;

export const FooterModalContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;
