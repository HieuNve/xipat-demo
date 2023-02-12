import styled from 'styled-components';
import Panel from 'rc-color-picker/lib/Panel';
import { Col, DatePicker, Form } from 'antd';

const { RangePicker } = DatePicker;
export const FormSetting = styled.div``;
export const Title = styled.span`
  font-size: 14px;
  color: #46a6ff;
`;

export const PanelColor = styled(Panel)``;

export const StyleRangePicker = styled(RangePicker)`
  width: 100%;
  height: 40px;
  border-radius: 8px;
`;

export const FormItem = styled(Form.Item)`
  width: 100%;
  margin-bottom: 10px;
`;

export const ColStyle = styled(Col)`
  width: 100%;
`;
