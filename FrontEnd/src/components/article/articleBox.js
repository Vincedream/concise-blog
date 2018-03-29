import React from 'react'
import QueueAnim from 'rc-queue-anim'
import LoadArticleButton from '../button/loadArticleButton'
import SingleArticle from './singleArticle'
import './articleBox.less'

const ArticleBox = ({push,items, total, loadTotal, loadMore}) => {
  return(
    <div className="articleBox reset">
    <QueueAnim  duration={[500,80]} type={['bottom','bottom']} >
    {items.map(v => (
      <SingleArticle key={v._id} v={v} push={push} />
    ))}
    </QueueAnim>
    {items.length===0 ? null : (
    <QueueAnim  type={'bottom'} delay={800} >
      <LoadArticleButton key="LoadArticleButton" total={total} loadTotal={loadTotal}  loadMore={loadMore} />
    </QueueAnim>
    )}
    </div>
  )
}

export default ArticleBox