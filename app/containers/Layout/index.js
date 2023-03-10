import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { useMeasure } from 'react-use';
import { Container, ContentPage, HeaderPage, SiderMenu } from './style';

const LayoutPage = ({ children, menu, defaultSelectedKeys, onClickMenu }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onClickCollapsed = () => {
    localStorage.setItem('showMenu', collapsed);
    setCollapsed(!collapsed);
  };

  const [ref, { width }] = useMeasure();

  useEffect(() => {
    if (width < 760) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [width]);

  return (
    <Container ref={ref}>
      <SiderMenu trigger={null} collapsed={collapsed} collapsible>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={defaultSelectedKeys}
          items={menu}
          onClick={itemMenu => {
            if (itemMenu) {
              onClickMenu(itemMenu.key);
            }
          }}
        />
      </SiderMenu>
      <Layout className="site-layout">
        <HeaderPage>
          {collapsed ? (
            <MenuUnfoldOutlined
              style={{
                color: 'black',
                fontSize: '20px',
              }}
              onClick={onClickCollapsed}
            />
          ) : (
            <MenuFoldOutlined
              style={{
                color: 'black',
                fontSize: '20px',
              }}
              onClick={onClickCollapsed}
            />
          )}
        </HeaderPage>
        <ContentPage>{children}</ContentPage>
      </Layout>
    </Container>
  );
};

LayoutPage.propTypes = {
  children: PropTypes.any,
  menu: PropTypes.array,
  defaultSelectedKeys: PropTypes.any,
  onClickMenu: PropTypes.func,
};

export default LayoutPage;
