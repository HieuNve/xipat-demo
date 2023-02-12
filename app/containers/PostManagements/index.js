import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Form,
  Input,
  Pagination,
  Row,
  Table,
  Tooltip,
} from 'antd';
import { useMeasure } from 'react-use';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonCustom,
  ContainerInputSearch,
  ContainerPagination,
  Containner,
  FormItemStyle,
  FormStyle,
  Icon,
  OptionPageSie,
  SelectPageSie,
} from './style';
import iconExcel from '../../images/icon/icon-search.svg';
import iconPrint from '../../images/icon/icon-print.svg';
import { REDUX_KEY } from '../../utils/constants';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import * as selectors from './selector';
import ButtonActions from './components/ButtonActions';
import ViewDetails from './components/ViewDetails';

const key = REDUX_KEY.postManagement;

const PostManagements = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [page, setPage] = useState(1);
  const [size, setPageSize] = useState(50);
  const [totalList, setTotalList] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [idSelected, setIdSelected] = useState('');

  const listUser = useSelector(selectors.selectUsers());
  const totalRecord = useSelector(selectors.selectTotalRecord());
  const isLoading = useSelector(selectors.selectLoading());

  useEffect(() => {
    if (totalRecord <= 50) {
      setTotalList([50]);
    } else if (totalRecord <= 100) {
      setTotalList([50, 100]);
    } else if (totalRecord <= 200) {
      setTotalList([50, 100, 200]);
    } else if (totalRecord <= 300) {
      setTotalList([50, 100, 200, 300]);
    } else if (totalRecord <= 500) {
      setTotalList([50, 100, 200, 300, 500]);
    } else if (totalRecord > 500) {
      setTotalList([50, 100, 200, 300, 500, 1000]);
    }
  }, [totalRecord]);

  useEffect(() => {
    dispatch(actions.getListUser(''));
    return () => {
      dispatch(actions.resetRedux());
    };
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: '10%',
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      width: '10%',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      width: '50%',
      render: text => <div>{text}</div>,
    },
    {
      title: 'Action',
      width: '30%',
      align: 'center',
      render: (text, record) => (
        <ButtonActions
          onClickView={() => {
            setShowInfo(true);
            setIdSelected(record.id);
          }}
        />
      ),
      showOnResponse: true,
      showOnDesktop: true,
    },
  ];

  const onChangePagination = (pageSize, current) => {
    console.log(pageSize, current);
  };

  const onClickSearch = () => {
    const keySearch = form.getFieldValue('keySearch');

    if (keySearch) {
      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(keySearch)) {
        dispatch(actions.getListUser(`?userId=${keySearch}`));
      } else {
        dispatch(actions.getListUser(`?title=${keySearch}`));
      }
    } else {
      dispatch(actions.getListUser(``));
    }
  };

  const [ref, { height }] = useMeasure();

  return (
    <Containner ref={ref}>
      <span>Users Management</span>
      <Row>
        <Col sm={24} md={24} lg={12} xl={12} xxl={12}>
          <ContainerPagination pagination>
            <SelectPageSie
              value={size}
              onChange={selected => {
                setPageSize(selected);
                setPage(1);
                onChangePagination(selected, 1);
              }}
            >
              {totalList.map(value => (
                <OptionPageSie value={value}>{value}</OptionPageSie>
              ))}
            </SelectPageSie>
            <Pagination
              simple
              defaultCurrent={1}
              total={totalRecord}
              showTotal={total => `Tổng số: ${total} `}
              current={page}
              pageSize={size}
              onChange={(current, pageSize) => {
                setPage(current);
                setPageSize(pageSize);
                onChangePagination(pageSize, current);
              }}
            />
          </ContainerPagination>
        </Col>
        <Col sm={24} md={24} lg={12} xl={12} xxl={12}>
          <ContainerInputSearch>
            <FormStyle form={form} onFinish={onClickSearch}>
              <FormItemStyle name="keySearch">
                <Input placeholder="Filter in records..." />
              </FormItemStyle>
              <Button
                style={{ display: 'none' }}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </FormStyle>

            <ButtonCustom onClick={onClickSearch}>
              <Tooltip title="Search">
                <Icon src={iconExcel} alt="" />
              </Tooltip>
            </ButtonCustom>
            <ButtonCustom>
              <Icon src={iconPrint} alt="" />
            </ButtonCustom>
          </ContainerInputSearch>
        </Col>
      </Row>

      <Table
        columns={columns}
        dataSource={listUser}
        pagination={{
          current: page,
          pageSize: size,
        }}
        scroll={{ x: 1300, y: height - 110 }}
        loading={isLoading}
      />

      {showInfo && (
        <ViewDetails
          onCancel={() => {
            setShowInfo(false);
            setIdSelected('');
          }}
          id={idSelected}
        />
      )}
    </Containner>
  );
};

PostManagements.propTypes = {};

export default PostManagements;
