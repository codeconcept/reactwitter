import React from "react";

const Tweet = props => {
  console.log("props", props);
  return (
    <div className="card" style={{ width: 300 }}>
      <div className="card-body">
        <h5 className="card-title">{props.content.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.content.author}
        </h6>
        <p className="card-text">{props.content.content}</p>
        <a href="#!" className="card-link">
          Card link
        </a>
        &nbsp;
        <a href="#!" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};

export default Tweet;
