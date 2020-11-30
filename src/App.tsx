import React from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Center from "./components/Center";
import Container from "./components/Container";
import Input from "./components/Input";
import Link from "./components/Link";
import Title from "./components/Title";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Container>
          <Card>
            <Title>Log In</Title>
            <Input placeholder="Email" label="email" />
            <Input placeholder="Password" label="Password" />
            <Button block={true}>Send</Button>
            <Center>
              <Link>Sign up</Link>
            </Center>
          </Card>
        </Container>
      </div>
    );
  }
}

export default App;
