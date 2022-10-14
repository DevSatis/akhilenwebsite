import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 90%;
    background: url("https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble.png");
`;
const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

`;
const FormContainer = styled.div`
    width: 50%;
`;
const Form = styled.form`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AddressContainer = styled.div`
    width: 50%;
`;

const Contact = () => {
  return (
    <Container>
        <Wrapper>
            <FormContainer>
                f
            </FormContainer>
            <AddressContainer>
                a 
            </AddressContainer>
        </Wrapper>
    </Container>
  )
}

export default Contact