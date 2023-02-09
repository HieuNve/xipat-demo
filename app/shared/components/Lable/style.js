import styled from 'styled-components';
import { ACCOUNT, ACCOUNT_ADMIN } from '../../../themes/normalTheme';

const Wrapper = styled.div`
  padding: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${ACCOUNT_ADMIN.color.title};
`;
const RedStart = styled.span`
  margin-left: -1px;
  color: ${ACCOUNT.color.error};
`;
export { Wrapper, RedStart };
