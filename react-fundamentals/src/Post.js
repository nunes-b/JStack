
import React from "react";
import propTypes from "prop-types";

export default function Post(props) {
  return (
    <React.Fragment>
      <article>
      <strong>{props.title}</strong><br />
      <small>{props.subtitle}</small><br />
      <p>{props.content}</p><br />
      <small>{props.date}</small><br/>
      <hr />
      <small> likes: {props.likes}</small>
      <small> média: {props.likes / 2}</small>
      <small> viwers: {props.likes * 2}</small>
      </article>
      <br />
    </React.Fragment>
);
}

Post.propTypes ={
  likes: propTypes.number.isRequired,
  title: propTypes.string.isRequired
}
