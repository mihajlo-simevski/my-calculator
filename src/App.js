import * as React from "react";
import { Header } from "semantic-ui-react";
import ButtonWrapper from "./components/ButtonWrapper";
import Display from "./components/Display";
import NavBar from "./components/NavBar";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: [],
      operations: []
    }
  }
  addNumber = (newNumber) => {
      
      if(newNumber === '+'){
        this.setState({
          input: newNumber,
          operations: [...this.state.operations, newNumber]
        })
      }
      else{
        this.setState(function (prevState) {
          if(this.state.input === '+'){
            return {
              input: newNumber,
              operations: [...this.state.operations, newNumber]
            };
          }
          else {
            return {
              input: [...this.state.input, newNumber],
              operations: [...this.state.operations, newNumber]
            };
          }
          
        });
      }
      
        
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
