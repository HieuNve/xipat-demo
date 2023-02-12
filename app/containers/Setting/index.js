import React, { useState } from 'react';
import { Button, Form, Row } from 'antd';
import { ColStyle, FormItem, StyleRangePicker, Title } from './style';
import InputColor from './components/InputColor';
import 'rc-color-picker/assets/index.css';
import Input from '../../res/components/Input';
import { REGEX_EMAIL } from '../../utils/constants';

const SettingPage = () => {
  const [rangeDate, setRangeDate] = useState({
    startDate: '',
    endDate: '',
  });

  const [form] = Form.useForm();
  const submitForm = () => {
    form.validateFields().then(value => {
      const body = {
        ...value,
        startDate: rangeDate.startDate,
        endDate: rangeDate.endDate,
      };
      console.log('Setting', body);
    });
  };

  const onChangeDate = (date, dateFormat) => {
    if (dateFormat) {
      setRangeDate({
        startDate: dateFormat[0],
        endDate: dateFormat[1],
      });
    }
  };

  return (
    <div>
      <span>setting</span>
      <div>
        <Form form={form}>
          <Row gutter={8}>
            <ColStyle sm={24} md={24} lg={12} xl={12} xxl={12}>
              <Title>Title:</Title>
              <FormItem
                name="title"
                rules={[
                  {
                    required: true,
                    message: 'Title is required!',
                  },
                ]}
              >
                <Input />
              </FormItem>
            </ColStyle>
            <ColStyle sm={24} md={24} lg={12} xl={12} xxl={12}>
              <Title>Email:</Title>
              <FormItem
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Email is required!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (
                        !value ||
                        REGEX_EMAIL.test(getFieldValue('email').trim())
                      ) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Email invalidate'));
                    },
                  }),
                ]}
              >
                <Input />
              </FormItem>
            </ColStyle>
          </Row>
          <Row gutter={8}>
            <ColStyle sm={24} md={24} lg={12} xl={12} xxl={12}>
              <Title>Color:</Title>
              <FormItem
                name="color"
                rules={[
                  {
                    required: true,
                    message: 'Color is required!',
                  },
                ]}
              >
                <InputColor
                  onChange={colorSelected => {
                    form.setFieldsValue({
                      color: colorSelected,
                    });
                  }}
                />
              </FormItem>
            </ColStyle>
            <ColStyle sm={24} md={24} lg={12} xl={12} xxl={12}>
              <Title>Date:</Title>
              <FormItem
                name="date"
                rules={[
                  {
                    required: true,
                    message: 'Date is required!',
                  },
                ]}
              >
                <StyleRangePicker format="DD/MM/YYYY" onChange={onChangeDate} />
              </FormItem>
            </ColStyle>
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
