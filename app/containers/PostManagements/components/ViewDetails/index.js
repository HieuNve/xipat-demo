import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useDispatch, useSelector } from 'react-redux';
import { Container, FooterModalContainer, ModalCustom, Wrapper } from './style';
import { REDUX_KEY } from '../../../../utils/constants';
import reducer from '../../reducer';
import saga from '../../saga';
import * as actions from '../../actions';
import * as selectors from '../../selector';
import loadingIcon from '../../../../images/loading.svg';

const key = REDUX_KEY.postManagement;
const ViewDetails = ({ id, onCancel }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const dispatch = useDispatch();

  const informationUser = useSelector(selectors.selectInformationUser());

  const isLoading = useSelector(selectors.selectLoadingModal());

  useEffect(() => {
    if (id) {
      dispatch(actions.getInformationUser(id));
    }
  }, [id]);
  return (
    <ModalCustom
      visible
      title="View Information"
      onCancel={onCancel}
      footer={[
        <FooterModalContainer>
          <Button onClick={onCancel}>Close</Button>
        </FooterModalContainer>,
      ]}
    >
      {isLoading ? (
        <Wrapper>
          <img width="50px" height="50px" alt="" src={loadingIcon} />
        </Wrapper>
      ) : (
        <Container>
          <span>User id: {informationUser.userId}</span>
          <span>Title: {informationUser.title}</span>
          <span>Body: {informationUser.body}</span>
        </Container>
      )}
    </ModalCustom>
  );
};

ViewDetails.propTypes = {
  id: PropTypes.string,
  onCancel: PropTypes.func,
};

export default ViewDetails;
