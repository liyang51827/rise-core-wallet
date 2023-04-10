import { FormControl, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import RiseCore from '../assets/image/img-icon-risecore.png';
import Busd from '../assets/image/img-icon-busd.png';

const RcInput = styled(FormControl)`
  border 2px solid #f96c0a;
  background-color: #1a2129;
  height: 60px;
  color: #fff;
  &:focus {
    background-color: #1a2129;
    color: #fff;

  }
`;

const RcContainer = styled(Container)`
  border: 2px solid #f96c0a;
  border-radius: 12px;
  margin: 20px 0;
  padding: 30px 24px;
`;

const RcColHeader = styled.p`
  font-size: 28px;
  color: #fff;
  font-family: SvnMont;
  font-weight: 600;
  margin: 10px;
  text-align: center;
`;

const RcNum1 = styled.span`
  color: #fff;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  margin: 10px;
`;

const RcNum2 = styled.span`
  color: #a9b2b9;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  margin: 10px;
`;

const RcColEnd = styled(Col)`
  display: flex;
  justify-content: end;
`;

const RcColStart = styled(Col)`
  display: flex;
  justify-content: start;
`;

const RcFormDivider = styled.hr`
  border: 1px solid #434d56;
  margin-top: 20px;
  opacity: 1;
`;

const RcColCenter = styled(Col)`
  display: flex;
  justify-content: center;
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
  &:hover {
    background: linear-gradient(180deg, #f9a222 0%, #f93c02 100%);
    color: #fff;
  }
`;

const RcCol = styled(Col)`
  color: #fff;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const WalletForm = () => {
  return (
    <>
      <RcInput type="text" placeholder="Enter your wallet address" />
      <RcContainer>
        <Row>
          <Col xs={12}>
            <RcColHeader>Your wallet</RcColHeader>
            <Row>
              <RcColEnd xs={6}>
                <RcNum1>3654</RcNum1>
                <img src={RiseCore} alt="rise core" />
                <RcNum2>($1820)</RcNum2>
              </RcColEnd>
              <RcColStart xs={6}>
                <RcNum1>1280</RcNum1>
                <img src={Busd} alt="busd" />
                <RcNum2>($256)</RcNum2>
              </RcColStart>
            </Row>
          </Col>
          <RcFormDivider />
          <Col xs={12}>
            <RcColHeader>TOTAL EARNED : </RcColHeader>
            <RcColCenter>
              <RcNum1>1280</RcNum1>
              <img src={Busd} alt="busd" />
              <RcNum2>($256)</RcNum2>
            </RcColCenter>
          </Col>
          <RcFormDivider />
          <Col xs={12}>
            <RcColHeader>YOUR PENDING REWARDS </RcColHeader>
            <RcColCenter>
              <RcNum1>1280</RcNum1>
              <img src={Busd} alt="busd" />
              <RcNum2>($256)</RcNum2>
            </RcColCenter>
          </Col>
          <RcFormDivider />
          <Col xs={12}>
            <RcColHeader>TOTAL REWARDS DISTRIBUTED TO HOLDERS</RcColHeader>
            <RcColCenter>
              <RcNum1>38712852.801</RcNum1>
              <img src={Busd} alt="busd" />
              <RcNum2>($38.712.852,801)</RcNum2>
            </RcColCenter>
          </Col>
        </Row>
      </RcContainer>
      <Container>
        <Row>
          <Col>
            <RcButton>Connect Wallet</RcButton>
          </Col>
          <RcCol xs={1}>
            <FontAwesomeIcon icon={faArrowRightLong} />
          </RcCol>
          <Col>
            <RcOutlinedButton>Claim Manually</RcOutlinedButton>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WalletForm;
