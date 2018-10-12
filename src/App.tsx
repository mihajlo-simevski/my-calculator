import * as React from "react";
import { Header } from "semantic-ui-react";
import ButtonWrapper from "./components/ButtonWrapper";
import Display from "./components/Display";
import NavBar from "./components/NavBar";


class App extends React.Component {
  constructor(props:any){
    super(props);
  }
  public render() {
    return (
      <React.Fragment>
        <NavBar />
        <Header as="h1" content="Calculator App" textAlign="center" />
        <Display />
        <ButtonWrapper />
      </React.Fragment>
    );
  }
}

export default App;
