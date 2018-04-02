import React from "react";
import "./singleArticle.less"
const SingleArticle = ({push, v=[]}) => {
  return (
    <div
      onClick={() => {
        push(`/article/${v._id}`);
      }}
     
      className="signleBox"
    >
      <h3 className="title">{v.title}</h3>
      <ul>{v.classify.map(j => <li key={j + v._id}>{j}</li>)}</ul>
      <p>
        {v.releaseDate.replace(/\//g,' / ')}
      </p>
    </div>
  );
};

export default SingleArticle
