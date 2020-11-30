import * as React from "react";

const style = (block: boolean) => ({
  backgroundColor: "#00D1B2",
  border: "0px",
  color: "#fff",
  padding: "10px 15px",
  marginBottom: "10px",
  width: block ? "100%" : undefined,
});

//Info dinamic Inline styles, inyecto block props like parameter on style const
interface IButtonProps {
  block?: boolean;
}

export default class Button extends React.Component<IButtonProps> {
  public render() {
    const { block = false } = this.props;
    return <button {...this.props} style={style(block)}></button>;
  }
}
