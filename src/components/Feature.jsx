import React from 'react';
import styled from 'styled-components';
import Phone from '../image/app2.png';
import AnimatedShapes from './AnimatedShapes';


const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    width: 50%;
`;
const Image = styled.img`
    width: 80%;
`;
const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Title = styled.span`
    font-size: 40px;
`;
const SubTitle = styled.span`
    font-size: 18px;
    font-style: italic;
    color: #333;
    margin-top: 20px;
`;
const Desc = styled.p`
    font-size: 14px;
    color: #777;
    margin-top: 20px;
`;
const Button = styled.button`
    width: 150px;
    border: none;
    cursor: pointer;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    margin-top: 20px;
    font-size: 20px;
`;

const Feature = () => {
  return (
    <Container>
        <Left> <Image src={Phone} /> </Left>
        <Right>
            <Title>
                <b>Good </b> Design <br/>
                <b>Good</b> Business
            </Title>
            <SubTitle>We know that good design means good business.</SubTitle>
            <Desc>We help our clients succeed by creating brand identities, digital experinces,
                and print materials that communicate clearly, achievemarketing goals, and look fantastic.
            </Desc>
            <Desc>
                We care your business and guarantee you to achieve marketing goals.
            </Desc>
            <Button>Learn More</Button>
        </Right>
        <AnimatedShapes />
    </Container>
  )
}

export default Feature