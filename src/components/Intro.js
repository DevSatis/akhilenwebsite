import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: calc(100vh - 50px); 
    display: flex;
    padding: 20px;
`;
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
  font-size: 40px;
  width: 60%;
`;
const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  padding: 10px;
  background-color: darkblue;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  letter-spacing: 1px;
  cursor: pointer;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;
const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
    width: 40%;   
`;

const Intro = () => {
  return (
    <Container>
        <Left>
          <Title>
            Adventures in Creativity! 
          </Title>
          <Desc>
            We belive that designing product and services in close partnership with
            our clients is the only way to have a real impact on their business.  
          </Desc>
          <Info>
            <Button>Start a Project</Button>
            <Contact>
              <Phone>Call Us (+91) 904 446 6058</Phone>
              <ContactText>For any question or concern</ContactText>
            </Contact>
          </Info>
        </Left>
        <Right>Right</Right>
    </Container>
  )
}

export default Intro