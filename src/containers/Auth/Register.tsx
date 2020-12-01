import * as React from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Center from "../../components/Center";
import Container from "../../components/Container";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import Title from "../../components/Title";

export default class Register extends React.Component {
  public render() {
    return (
      <Container center={true}>
        <Card>
          <Title>Sign Up</Title>
          <Input placeholder="Email" label="email" />
          <Input placeholder="Password" label="Password" />
          <Button blocked={true}>Send</Button>
          <Center>
            <Link to={{ pathname: "/" }}>Log In</Link>
          </Center>
        </Card>
      </Container>
    );
  }
}
