import React from 'react'
import QueueAnim from 'rc-queue-anim'
import LoadArticleButton from '../button/loadArticleButton'
import './articleBox.less'

const ArticleBox = ({push,items, total, loadTotal, loadMore}) => {
  return(
    <div className="articleBox">
    <QueueAnim  duration={[500,80]} type={['bottom','bottom']} >
    {items.map(v => (
        <div onClick={() => {push(`/article/${v._id}`)}} key={v._id} className="signleBox">
          <h3 className="title">{v.title}</h3>
          <ul>
            {(v.classify).map(j => (
              <li key={j+v._id} >{j}</li>
            ))}
          </ul>
          <p>{(v.releaseDate).split('-')[0]+' / '+(v.releaseDate).split('-')[1]+' / '+((v.releaseDate).split('-')[2]).split('T')[0]}</p>
        </div>
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