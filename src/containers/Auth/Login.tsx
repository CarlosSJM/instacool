import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Center from "../../components/Center";
import Container from "../../components/Container";
import Input from "../../components/Input";
import Title from "../../components/Title";

export default class Login extends React.Component {
  public render() {
    return (
      <Container center={true}>
        <Card>
          <Title>Log In</Title>
          <Input placeholder="Email" label="email" />
          <Input placeholder="Password" label="Password" />
          <Button blocked={true}>Send</Button>
          <Center>
            <Link to={"/register"}>Sign Up</Link>
          </Center>
        </Card>
      </Container>
    );
  }
}
