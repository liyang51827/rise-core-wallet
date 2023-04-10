import styled from 'styled-components';

const RcQuiz = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  padding: 16px;
  width: 100%;
  background-color: #232c35;
  border-radius: 12px;
`;

const Questions = () => {
  return (
    <>
      <RcQuiz>Do I have to claim mannually?</RcQuiz>
      <RcQuiz>Why is my Wallet not connecting?</RcQuiz>
      <RcQuiz>Is there a FEE to claim manually?</RcQuiz>
      <RcQuiz>Why do I have to “Connect my wallet”?</RcQuiz>
      <RcQuiz>Where is my Wallet Address?</RcQuiz>
      <RcQuiz>Is it necessary to connect my Wallet?</RcQuiz>
      <RcQuiz>Why am I not receiving rewards?</RcQuiz>
      <RcQuiz>Why am I not receiving rewards?</RcQuiz>
      <RcQuiz>What is BUSD?</RcQuiz>
      <RcQuiz>How do I disconnect my Wallet?</RcQuiz>
    </>
  );
};

export default Questions;
