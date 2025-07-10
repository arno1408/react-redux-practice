import React from "react";
import "./Title.css";

export default function Title({ header, text, styles }) {
  return (
    <>
      <h1 className="header-text">{header}</h1>
      <p className="text" style={styles}>
        {text}
      </p>
    </>
  );
}
