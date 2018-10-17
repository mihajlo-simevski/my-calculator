import * as React from "react";
import { Header } from "semantic-ui-react";
import ButtonWrapper from "./components/ButtonWrapper";
import Display from "./components/Display";
import NavBar from "./components/NavBar";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: 0,
      operations: []
    }
  }
  addNumber = (newNumber) => {
    // tslint:disable-next-line:no-console
    console.log("Red","Green", newNumber);
    
      let input = [...this.state.operations, newNumber];
    this.setState({
      operations: input
    })
    
  }
 render() {
    return (
      <React.Fragment>
        <NavBar />
        <Header as="h1" content="Calculator App" textAlign="center" />
        <Display input={this.state.input} operations={this.state.operations} />
        <ButtonWrapper addNumber={this.addNumber}/>
      </React.Fragment>
    );
  }
}

export default App;
