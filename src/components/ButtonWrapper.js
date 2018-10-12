import * as React from "react";
import { Button } from "semantic-ui-react";
import PrimaryButton from "./PrimaryButton";
import './ButtonWrapper.css';

const ButtonWrapper = () => (
<div className="buttonWrapper">
    <Button.Group widths="4">
        <PrimaryButton content="AC" color="red" />
        <PrimaryButton content="CE" color="red" />
        <PrimaryButton content="/" color="red" />
        <PrimaryButton content="x" color="red" />
    </Button.Group>
    <Button.Group widths="4">
        <PrimaryButton content="7" color="" />
        <PrimaryButton content="8" color="" />
        <PrimaryButton content="9" color="" />
        <PrimaryButton content="-" color="" />
    </Button.Group>
    <Button.Group widths="4">
        <PrimaryButton content="4" color="" />
        <PrimaryButton content="5" color="" />
        <PrimaryButton content="6" color="" />
        <PrimaryButton content="+" color="" />
    </Button.Group>
    <Button.Group widths="4">
        <PrimaryButton content="1" color="" />
        <PrimaryButton content="2" color="" />
        <PrimaryButton content="3" color="" />
        <PrimaryButton content="=" color="" />
    </Button.Group>
    <Button.Group widths="2">
        <PrimaryButton content="0" color="" />
        <PrimaryButton content="." color="blue" />
    </Button.Group>
</div>
    );

export default ButtonWrapper
