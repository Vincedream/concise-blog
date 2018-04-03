import React from "react";
import comments from '../../img/comments.png'
import views from '../../img/views.png'
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
      <ul className="class" >{v.classify.map(j => <li key={j + v._id}>{j}</li>)}</ul>
      <p>
        {v.releaseDate.replace(/\//g,' / ')}
      </p>
      <ul className="detail">
        <li>
        <img src={comments} alt=""/>
          <span>{v.comments.length}</span>
        </li>
        <li>
        <img src={views} alt=""/>
        <span>{v.views}</span>
         
        </li>
      </ul>
    </div>
  );
};

export default SingleArticle
