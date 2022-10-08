import React from 'react';
import styled from 'styled-components';
import How from '../image/how.png';

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    width: 50%;
`;
const Image = styled.img`
    height: 100%;
`;

const Right = styled.div`
    width: 50%;
`;

const Service = () => {
  return (
    <Container>
        <left>
            <Image src={How}/>
        </left>
        <Right>

        </Right>
    </Container>
  )
}

export default Service