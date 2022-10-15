import React from 'react';
import styled from 'styled-components';
import Map from '../image/map.png';
import Phone from '../image/phone.png';
import Send from '../image/send.png';

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

const Title = styled.h1`
    margin: 50px;
    margin-top: 0;
`;
const Form = styled.form`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
`;
const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Input = styled.input`
    width: 200px;
    padding: 20px;
`;
const TextArea = styled.textarea`
    width: 200px;
    height: 60%;
    padding: 20px;
`;
const Button = styled.button`
    border: none;
    padding: 15px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
`;

const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
`;
const Icon = styled.img`
    width: 20px;
    margin-right: 20px;
`;
const Text = styled.span`
    font-size: 20px;
    margin-right: 15px;
`;

const Contact = () => {
  return (
    <Container>
        <Wrapper>
            <FormContainer>
                <Title>Questions? <br/>Let's Get in Touch!</Title>
                <Form>
                <LeftForm>
                    <Input placeholder='Your Name'/>
                    <Input placeholder='Your Email'/>
                    <Input placeholder='Subject'/>
                </LeftForm>
                <RightForm>
                    <TextArea placeholder='Your Message'/>
                    <Button>Send</Button>
                </RightForm>
                </Form>
            </FormContainer>
            <AddressContainer>
                <AddressItem>
                    <Icon src={Map}/>
                    <Text>25 BTM Layout,2nd Stage, Bangalore - 560076</Text>
                </AddressItem>
                <AddressItem>
                    <Icon src={Phone}/>
                    <Text>+91 904466058</Text>
                    <Text>+91 8050309572</Text>
                </AddressItem>
                <AddressItem>
                    <Icon src={Send}/>
                    <Text>sksatishk9@gmail.com</Text>
                    <Text>prasoonsau@gmail.com</Text>
                </AddressItem>
            </AddressContainer>
        </Wrapper>
    </Container>
  )
}

export default Contact