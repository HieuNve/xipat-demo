import React from 'react';
import { Button, Col, Form, Input, Row } from 'antd';
import { Title } from './style';
import InputColor from './components/InputColor';
import 'rc-color-picker/assets/index.css';

const SettingPage = () => {
  const [form] = Form.useForm();
  const submitForm = () => {
    form.validateFields().then(value => {
      console.log(value);
    });
  };

  return (
    <div>
      <span>setting</span>
      <div>
        <Form form={form}>
          <Row gutter={8}>
            <Col span={12}>
              <Title>Title:</Title>
              <Form.Item
                name="title"
                rules={[
                  {
                    required: true,
                    message: 'not null',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Title>Title:</Title>
              <Form.Item name="email">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
              <Title>Title:</Title>
              <Form.Item name="color">
                <InputColor />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Title>Title:</Title>
              <Form.Item name="date">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <div>
        <Button onClick={submitForm}>Submit</Button>
      </div>
    </div>
  );
};

SettingPage.propTypes = {};

export default SettingPage;
