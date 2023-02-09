import React from 'react';
import { Col, Form, Input, Row } from 'antd';
import { Title } from './style';
import InputColor from './components/InputColor';

const SettingPage = () => {
  const [form] = Form.useForm();

  return (
    <div>
      <span>setting</span>
      <div>
        <Form form={form}>
          <Row gutter={8}>
            <Col span={12}>
              <Title>Title:</Title>
              <Form.Item>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Title>Title:</Title>
              <Form.Item>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
              <Title>Title:</Title>
              <Form.Item>
                <InputColor />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Title>Title:</Title>
              <Form.Item>
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

SettingPage.propTypes = {};

export default SettingPage;
