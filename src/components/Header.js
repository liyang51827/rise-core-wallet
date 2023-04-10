import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import Logo from '../assets/image/logo.png';

const RcLogo = styled.img`
  height: 60px;
  @media screen and (max-width: 1200px) {
    height: 40px;
  }
`;
const RcNavbar = styled(Navbar)`
  background-color: #1a2129;
  width: 100%;
  height: 60px;
`;
const RcBox = styled.div`
  background-color: #1a2129;
  padding: 61px 60px;
  @media screen and (max-width: 1200px) {
    padding: 20px;
  }
`;
const RcSpace = styled.div`
  width: 6vw;
`;
const RcNavCanvas = styled(Navbar.Offcanvas)`
  background-color: #232f3e;
`;
const RcNavLinkItem = styled(Nav.Link)`
  color: #fff;
  &:hover {
    color: #f96c02;
  }
`;
const RcHeaderSocial = styled(FontAwesomeIcon)`
  font-size: 36px;
  margin-right: 24px;
  @media screen and (max-width: 1200px) {
    margin-right: 0;
  }
  &:hover {
    color: #f96c02;
  }
`;
const RcButton = styled.button`
  background: linear-gradient(180deg, #f9a222 0%, #f93c02 100%);
  border-radius: 12px;
  border: 1px;
  padding: 16px 24px;
  color: #fff;
  font-size: 20px;
  line-height: 150%;
  font-weight: 700;
  &:hover {
    background: linear-gradient(180deg, #f93c02 0%, #f9a222 100%);
  }
  @media screen and (max-width: 1300px) {
    font-size: 14px;
    font-weight: 600;
    padding: 12px 16px;
  }
`;

const Header = () => {
  return (
    <RcBox>
      <RcNavbar expand={'xl'}>
        <Container fluid>
          <Navbar.Brand href="/">
            <RcLogo src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
          <RcNavCanvas
            id="offcanvasNavbar-expand"
            aria-labelledby="offcanvasNavbarLabel-expand"
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end align-items-center flex-grow-1">
                <RcNavLinkItem href="#">About</RcNavLinkItem>
                <RcNavLinkItem href="#">Ecosystem</RcNavLinkItem>
                <RcNavLinkItem href="#">Roadmap</RcNavLinkItem>
                <RcNavLinkItem href="#">How to buy</RcNavLinkItem>
                <RcNavLinkItem href="#">Dashboard</RcNavLinkItem>
                <RcSpace />
                <RcNavLinkItem href="#">
                  <RcHeaderSocial icon={faDiscord} />
                </RcNavLinkItem>
                <RcNavLinkItem href="#">
                  <RcHeaderSocial icon={faPaperPlane} />
                </RcNavLinkItem>
                <RcNavLinkItem href="#">
                  <RcHeaderSocial icon={faTwitter} />
                </RcNavLinkItem>
                <RcNavLinkItem href="#">
                  <RcButton>Buy RiseCore</RcButton>
                </RcNavLinkItem>
              </Nav>
            </Offcanvas.Body>
          </RcNavCanvas>
        </Container>
      </RcNavbar>
    </RcBox>
  );
};

export default Header;
