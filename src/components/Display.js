import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import './Display.css';

const Display = () => 
<Container className="displayWrapper">
    <Container textAlign="right" fluid> Operations</Container>
    <Divider />
    <Container textAlign="right" fluid> Input</Container>
</Container>

export default Display;