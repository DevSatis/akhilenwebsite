import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-right: 50px;
    padding: 20px;
    background-color: #aeaeae;
    -webkit-box-shadow: 0px 0px 17px -11px rbga(0,0,0,0.58);
    box-shadow: 0px 0px 17px -11px rbga(0,0,0,0.58);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`;
const Price = styled.span`
    font-size: 50px;
    font-weight: bold;
`;
const Type = styled.button`
    padding: 10px;
    margin: 10px 0;
    border: 1.5px solid crimson;
    color: crimson;
    border-color: crimson;
    border-radius: 20px;
`;
const List = styled.ul`
    list-style: none;
`;
const ListItem = styled.li`
    margin: 25px 0;


`;
const Button = styled.button`
    border: none;
    background-color: darkblue;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
`;


const PriceCard = ({price, type}) => {
  return (
    <Container>
        <PriceContainer>
          $<Price>{price}</Price>/month
        </PriceContainer>
          <Type>{type} Plan</Type>
          <List>
            <ListItem>200 Hand-Crafted Temlate</ListItem>
            <ListItem>Exclusive Support</ListItem>
            <ListItem>50+ PreBuilt Websites</ListItem>
            <ListItem>Premium Plugins</ListItem>
          </List>
          <Button>Join Now</Button>
    </Container>
  )
}

export default PriceCard;