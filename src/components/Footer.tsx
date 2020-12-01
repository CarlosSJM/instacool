import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faRetweet } from "@fortawesome/free-solid-svg-icons";

const style = {
  button: {
    flex: 1,
    textAlign: "center",
    padding: "10px 15px",
    cursor: "pointer",
  },
  footer: {
    backgroundColor: "#eee",
    display: "flex",
    marginBottom: "-10px",
    marginLeft: "-15px",
    width: "calc(100% + 30px)",
  },
};

export default class Footer extends React.Component {
  public render() {
    return (
      <div style={style.footer}>
        <div style={style.button as React.CSSProperties}>
          <FontAwesomeIcon icon={faThumbsUp} /> Like
        </div>
        <div style={style.button as React.CSSProperties}>
          <FontAwesomeIcon icon={faRetweet} />
          Compartir
        </div>
      </div>
    );
  }
}
