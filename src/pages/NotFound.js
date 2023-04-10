import { Button, Card } from 'react-bootstrap';
import styled from 'styled-components';

const RcCard = styled(Card)`
  width: 50%;
  margin: 2rem auto 0;
`;
const RcCardTitle = styled(Card.Title)`
  font-family: SvnMontBold;
`;

const NotFound = () => {
  return (
    <RcCard>
      <Card.Body>
        <RcCardTitle>404 Page Not Found</RcCardTitle>
        <Card.Text>Oops! Sorry, but this page does not exist</Card.Text>
        <Button variant="secondary" href="/">
          Go home
        </Button>
      </Card.Body>
    </RcCard>
  );
};

export default NotFound;
