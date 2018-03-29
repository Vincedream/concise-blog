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
        {v.releaseDate.split("-")[0] +
          " / " +
          v.releaseDate.split("-")[1] +
          " / " +
          v.releaseDate.split("-")[2].split("T")[0]}
      </p>
    </div>
  );
};

export default SingleArticle
