import { Container, Row, Col, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faTwitter,
  faTelegram
} from '@fortawesome/free-brands-svg-icons';

import Logo from '../assets/image/logo.png';

const RcContainer = styled(Container)`
  background-color: #1d1523;
  color: white;
`;
const RcWrap = styled.div`
  display: flex;
  padding: 40px 0;
  color: white;
`;
const RcEtherWrap = styled.div`
  overflow-wrap: break-word;
  color: #a9b2b9;
  font-size: 16px;
  @media screen and (max-width: 992px) {
    justify-content: center;
    text-align: center;
    margin-bottom: 12px;
  }
`;
const RcNavLinkItem = styled(Nav.Link)`
  color: #fff;
  &:hover {
    color: #fc690a;
  }
`;
const RcCol = styled(Col)`
  display: flex;
`;
const RcDivider = styled.hr`
  border: 1px solid #a1a1a1;
  margin-right: -12px;
  margin-left: -12px;
`;

const RcLogo = styled.img`
  height: 60px;
  @media screen and (max-width: 1200px) {
    height: 40px;
  }
`;

const RcDiv = styled.div`
  color: #a9b2b9;
  font-size: 16px;
  @media screen and (max-width: 992px) {
    justify-content: center;
    text-align: center;
    margin-bottom: 12px;
  }
`;

const RcRow = styled(Row)`
  margin-left: 60px;
  @media screen and (max-width: 992px) {
    margin-left: 0px;
  }
`;

const RcNav = styled(Nav)`
  justify-content: start;
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

const Footer = () => {
  return (
    <RcContainer fluid>
      <Row>
        <Col lg={4} md={12} sm={12}>
          <RcWrap href="/" className="justify-content-center flex-grow-1">
            <RcLogo src={Logo} alt="logo" />
          </RcWrap>
        </Col>
        <RcCol lg={8} md={12} sm={12}>
          <RcNav className="align-items-center flex-grow-1 pe-3">
            <RcNavLinkItem href="/about">ABOUT</RcNavLinkItem>
            <RcNavLinkItem href="/ecosystem">ECOSYSTEM</RcNavLinkItem>
            <RcNavLinkItem href="/swap">SWAP</RcNavLinkItem>
            <RcNavLinkItem href="/roadmap">ROADMAP</RcNavLinkItem>
            <RcNavLinkItem href="/how-to-buy">HOW TO BUY</RcNavLinkItem>
          </RcNav>
        </RcCol>
      </Row>
      <RcDivider />
      <RcRow>
        <Col lg={4} md={12} sm={12}>
          <RcDiv className="justify-content-begin">
            &copy; 2023 RiseCore. All Rights Reserved.
          </RcDiv>
        </Col>
        <Col lg={5} md={12} sm={12}>
          <RcEtherWrap className="justify-content-center">
            Contact: 0x3cDf6D8E12464d5a4dd575CDC614C930d8C8D6a3
          </RcEtherWrap>
        </Col>
        <Col lg={3} md={12} sm={12}>
          <Nav className="justify-content-center">
            <RcNavLinkItem href="#">
              <FontAwesomeIcon icon={faDiscord} />
            </RcNavLinkItem>
            <RcNavLinkItem href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </RcNavLinkItem>
            <RcNavLinkItem href="#">
              <FontAwesomeIcon icon={faTelegram} />
            </RcNavLinkItem>
          </Nav>
        </Col>
      </RcRow>
    </RcContainer>
  );
};

export default Footer;
