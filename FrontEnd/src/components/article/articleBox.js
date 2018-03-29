import React from "react";
import QueueAnim from "rc-queue-anim";
import LoadArticleButton from "../button/loadArticleButton";
import SingleArticle from "./singleArticle";
import LoadSlogon from "../../components/loadSlogon";
import "./articleBox.less";

const ArticleBox = ({ push, items, total, loadTotal, loadMore }) => {
  return (
    <div className="articleBox reset ">
      {items.length === 0 ? (
        <LoadSlogon text="加载中,请稍后..." />
      ) : (
        <div>
          <QueueAnim duration={[500, 80]} type={["bottom", "bottom"]}>
            {items.map(v => <SingleArticle key={v._id} v={v} push={push} />)}
          </QueueAnim>
          <QueueAnim type={"bottom"} delay={800}>
            <LoadArticleButton
              key="LoadArticleButton"
              total={total}
              loadTotal={loadTotal}
              loadMore={loadMore}
            />
          </QueueAnim>
        </div>
      )}
    </div>
  );
};

export default ArticleBox;
