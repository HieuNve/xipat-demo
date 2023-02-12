import styled from 'styled-components';
import { Form, Select } from 'antd';

export const Containner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

export const ContainerPagination = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: ${props => (props.pagination ? 'flex' : 'none')};
  align-items: center;
  justify-content: flex-start;

  .ant-pagination-simple .ant-pagination-simple-pager input {
    height: 32px;
  }
`;

export const ContainerInputSearch = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const SelectPageSie = styled(Select)`
  height: 32px;
  margin-top: 4px;
`;

export const OptionPageSie = styled(Select)``;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const ButtonCustom = styled.div`
  width: 40px;
  height: 35px;
  cursor: pointer;
  background: #2f54eb;
  border: 1px solid #2f54eb;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const FormItemStyle = styled(Form.Item)`
  width: 100%;
  margin-bottom: 0;
`;

export const FormStyle = styled(Form)`
  width: 100%;
`;
