import React from "react";
import styled from "styled-components";



const SplashScreen = () => {
  return (
    <Cont>
      <Wrap>
        <Title>Notes</Title>
        <Content> Make learning Easier</Content>
      </Wrap>
      
    </Cont>
  );
};

const Cont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;

`;
const Wrap = styled.div`
width: 300px;
margin: auto;
text-align: center;
`;
const Title = styled.h4`
  margin-bottom: 20px;
  font-size: 60px;
`;
const Content = styled.p`
  font-size: 20px;
  line-height: 150%;
  font-weight: 100;
  letter-spacing: 1px;
`;

export default SplashScreen;
