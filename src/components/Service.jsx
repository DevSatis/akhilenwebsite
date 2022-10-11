import React, { useState } from 'react';
import styled from 'styled-components';
import How from '../image/new.png';
import MiniCard from './MiniCard';
import Play from '../image/play.png';
import Player from '../image/kuchBate.mp4';

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    width: 50%;
    position: relative;
`;
const Image = styled.img`
    display: ${(props) => props.open && 'none'};
    width: 80%;
    margin-left: 70px;
`;
const Video = styled.video`
    display: ${(props) => !props.open && 'none'};
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
`;


const Right = styled.div`
    width: 50%;
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h1``;
const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
`;
const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
`;
const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top: 50px;
    display: flex;
    align-items: center;
`;
const Icon = styled.img`
    width: 20px;
    margin-right: 10px;

`;


const Service = () => {
    const [open, setOpen] = useState(false);

  return (
    <Container>
        <Left>
            <Image open={open} src={How}/>
            <Video open={open} 
            autoPlay
            muted 
            loop 
            controls 
            src={Player}
            />
        </Left>
        <Right>
            <Wrapper>
                <Title>Simple process to start</Title>
                <Desc>
                    We provide digital experince services to startups and small businesses
                    to looking for a partner of their digital media, design & development,
                    lead generation and communications requirments. We work with you, not
                    for you. Although we have a great resources. 
                </Desc>
                <CardContainer>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                </CardContainer>
                <Button onClick={() => setOpen(true)}>
                    <Icon src={Play}/>How it works
                </Button>
            </Wrapper>
        </Right>
    </Container>
  )
}

export default Service