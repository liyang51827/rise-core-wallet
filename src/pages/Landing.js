import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import WalletForm from '../components/WalletForm';
import Questions from '../components/Questions';

const RcDivider = styled.hr`
  border: 1px solid #a1a1a1;
  margin: -1px 0;
`;
const RcBox = styled.div`
  width: 100%;
  padding: 60px 0;
  background-color: #1a2129;
`;

const RcHeader = styled.p`
  font-size: 36px;
  color: #fff;
  font-family: SvnMont;
  font-weight: 700;
  margin: 0;
  @media screen and (max-width: 992px) {
    margin-top: 40px;
  }
`;

const RcSubHeader = styled.p`
  font-size: 28px;
  color: #fff;
  font-family: SvnMont;
  font-weight: 600;
  margin: 0;
  @media screen and (max-width: 992px) {
    margin-top: 40px;
  }
`;

const RcColorDiv = styled.div`
  width: 80px;
  height: 5px;
  background: linear-gradient(to right, #f9a222 0%, #f93c02 100%);
  border-radius: 5px;
  margin-bottom: 24px;
`;

const RcContent = styled.p`
  color: #a9b2b9;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 10px 0 50px;
`;

const Landing = () => {
  return (
    <>
      <Header />
      <RcDivider />
      <RcBox>
        <Container>
          <Row>
            <Col md={12} lg={4}>
              <Sidebar />
            </Col>
            <Col md={12} lg={8}>
              <Row>
                <Col xs={12}>
                  <RcHeader>Dashboard</RcHeader>
                  <RcColorDiv />
                  <RcContent>
                    Enter your wallet address to view your current, total and
                    any pending rewards that are in process of being sent.
                    Connect your wallet to start a manual claim of any pending
                    rewards (transaction fee applies).
                  </RcContent>
                </Col>
                <Col xs={12} md={8}>
                  <WalletForm />
                </Col>
                <Col xs={12} md={4}>
                  <RcSubHeader>Frequently Asked Questions</RcSubHeader>
                  <RcColorDiv />
                  <Questions />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </RcBox>
      <Footer />
    </>
  );
};

export default Landing;
