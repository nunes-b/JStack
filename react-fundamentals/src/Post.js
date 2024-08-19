
import React from "react";

export default function Post(props) {
  return (
    <React.Fragment>
      <article>
      <strong>{props.title}</strong><br />
      <small>{props.subtitle}</small><br />
      <p>{props.content}</p><br />
      <small>{props.date}</small>
      </article>
      <br />
    </React.Fragment>
);
}
