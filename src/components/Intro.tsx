import * as React from "react";

interface IIntroPros {
  text?: string;
}

interface IIntroState {
  text: string;
  dato: number;
}

export default class Intro extends React.Component<IIntroPros, IIntroState> {
  public state = {
    text: "soy un texto del estado",
    dato: 2,
  };

  public render() {
    const { text } = this.props;
    const t = text ? text : this.state.text;

    return (
      <p onClick={this.handleClick} className="">
        <span>{t}</span>
      </p>
    );
  }

  private handleClick = () => {
    this.setState({ text: "me actualicé!" });
  };
}
