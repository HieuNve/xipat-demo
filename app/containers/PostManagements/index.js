import React from 'react';
import { Pagination, Table } from 'antd';
import { Containner } from './style';

const PostManagements = () => {
  const dataTest = [];
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      width: 150,
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  for (let i = 0; i < 100; i += 1) {
    dataTest.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  return (
    <Containner>
      <span>Users Management</span>
      <div />
      <Pagination defaultCurrent={6} total={500} />
      <Table
        columns={columns}
        dataSource={dataTest}
        pagination={{ pageSize: 50 }}
        scroll={{
          y: '50vh',
        }}
      />
    </Containner>
  );
};

PostManagements.propTypes = {};

export default PostManagements;
