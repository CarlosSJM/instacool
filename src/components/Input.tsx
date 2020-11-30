import * as React from "react";

const style = {
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  borderRadius: "4px",
  marginBottom: "10px",
  padding: "10px 15px",
  witdh: "calc(100% - 30px)",
};

const spanStyle = {
  color: "#777",
  fontSize: "12px",
  fontWeight: 900,
  textTransform: "uppercase",
} as React.CSSProperties;
// transform object to React.CSSProperties types

interface IInputProps {
  placeholder?: string;
  label: string;
}

export default class Input extends React.Component<IInputProps> {
  public render() {
    const { label } = this.props;
    return (
      <div style={{ display: "grid" }}>
        <span style={spanStyle}>{label} </span>
        <input {...this.props} style={style} />
      </div>
    );
  }
}
