import styled from 'styled-components';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

export const Container = styled(Layout)`
  height: 100vh;
`;

export const SiderMenu = styled(Sider)`
  background: #ffffff;
`;

export const HeaderPage = styled(Header)`
  background: #ffffff;
`;

export const ContentPage = styled(Content)`
  margin: 10px 10px;
  padding: 10px;
`;
