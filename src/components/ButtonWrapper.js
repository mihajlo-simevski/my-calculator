import React, { Component } from "react";
import { Button, Segment } from "semantic-ui-react";
//import PrimaryButton from "./PrimaryButton";
import './ButtonWrapper.css';
const AC = "AC";

class ButtonWrapper extends Component {
    constructor(props){
        super(props); 
        this.state = {}
    }

handleClick = (data) => {
    this.props.addNumber(data.target.textContent)  
}

render(){
    const {content, color} = this.props;
return(
<div className="buttonWrapper" onClick={this.handleClick}>
    <Button.Group widths="4" >
        <Button content="AC" color="red" />
        <Button content="CE" color="red" />
        <Button content="/" color="red" />
        <Button content="x" color="red" />
    </Button.Group>
    <Button.Group widths="4" disabled>
        <Button content="7" />
        <Button content="8" />
        <Button content="9" />
        <Button content="-" />
    </Button.Group>
    <Button.Group widths="4" disabled>
        <Button content="4" />
        <Button content="5" />
        <Button content="6" />
        <Button content="+" />
    </Button.Group>
    <Button.Group widths="4" disabled>
        <Button content="1" />
        <Button content="2" />
        <Button content="3" />
        <Button content="=" />
    </Button.Group>
    <Button.Group widths="2" disabled>
        <Button content="0" />
        <Button content="." color="blue" />
    </Button.Group>
</div>
)}
}

export default ButtonWrapper
