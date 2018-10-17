import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import './Display.css';

const Display = ({input, operations}) => 
<Container className="displayWrapper">
    <Container textAlign="right" fluid> Operations: {operations}</Container>
    <Divider />
    <Container textAlign="right" fluid> Input: {input} </Container>
</Container>

export default Display;