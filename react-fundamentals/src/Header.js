import React from "react";

export default function Header(props) {
  return (
    <React.Fragment>
          <h1>{props.title}</h1>
          {props.children}
 </React.Fragment>

  );
}
