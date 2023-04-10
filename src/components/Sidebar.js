import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faTableCellsLarge,
  faHeadphones,
  faHouse,
  faBook,
  faUsers,
  faBoltLightning,
  faComments
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const RcCol = styled(Col)`
  margin: 5px 0;
  border-radius: 12px;
  font-size: 24px;
  color: #fff;
  padding: 12px;
  cursor: pointer;
  &.active {
    background-color: #1a2129;
    color: #f96c02;
  }
  &:hover {
    background-color: #1a2129;
    color: #f96c02;
  }
  button {
    width: 100%;
  }
`;
const RcRow = styled(Row)`
  padding-top: 50px;
  padding: 24px;
  border-radius: 16px;
  background-color: #232c35;
`;
const RcButton = styled.button`
  background: linear-gradient(180deg, #f9a222 0%, #f93c02 100%);
  border-radius: 12px;
  border: 1px solid #f96c02;
  padding: 16px 0;
  width: 100%;
  color: #fff;
  font-size: 20px;
  line-height: 150%;
  font-weight: 700;
  margin-top: 6px;
  &:hover {
    background: linear-gradient(180deg, #f93c02 0%, #f9a222 100%);
  }
`;
const RcOutlinedButton = styled.button`
  background: #232c35;
  border-radius: 12px;
  border: 1px solid #f96c02;
  padding: 16px 0;
  width: 100%;
  color: #fc690a;
  font-size: 20px;
  line-height: 150%;
  font-weight: 700;
  margin-top: 12px;
  &:hover {
    background: linear-gradient(180deg, #f9a222 0%, #f93c02 100%);
    color: #fff;
  }
`;
const RcFontIcon = styled(FontAwesomeIcon)`
  margin-right: 15px;
`;
const RcAddressLink = styled.a`
  color: #f96c02;
  text-align: center;
  margin-top: 10px;
  font-style: Italic;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;
const RcLinkItem = styled.span``;

const Sidebar = () => {
  return (
    <Container>
      <RcRow>
        <RcCol xs={12} className="active">
          <RcFontIcon icon={faHouse} />
          <RcLinkItem>Home</RcLinkItem>
        </RcCol>
        <RcCol xs={12}>
          <RcFontIcon icon={faTableCellsLarge} />
          <RcLinkItem>Dashboard</RcLinkItem>
        </RcCol>
        <RcCol xs={12}>
          <RcFontIcon icon={faBook} />
          <RcLinkItem>Our Story</RcLinkItem>
        </RcCol>
        <RcCol xs={12}>
          <RcFontIcon icon={faUsers} />
          <RcLinkItem>The Team</RcLinkItem>
        </RcCol>
        <RcCol xs={12}>
          <RcFontIcon icon={faBoltLightning} />
          <RcLinkItem>Technical Specs</RcLinkItem>
        </RcCol>
        <RcCol xs={12}>
          <RcFontIcon icon={faComments} />
          <RcLinkItem>Community</RcLinkItem>
        </RcCol>
        <RcCol xs={12}>
          <RcFontIcon icon={faChartLine} />
          <RcLinkItem>Price Chart</RcLinkItem>
        </RcCol>
        <RcCol xs={12}>
          <RcFontIcon icon={faHeadphones} />
          <RcLinkItem>Help and Support</RcLinkItem>
        </RcCol>

        <RcButton>Buy RiseCore now</RcButton>
        <RcOutlinedButton>Swap</RcOutlinedButton>
        <RcAddressLink>RICECORE CONTRACT ADDRESS</RcAddressLink>
      </RcRow>
    </Container>
  );
};

export default Sidebar;
