import React from 'react'
import "./loadArticleButton.less"

const LoadArticleButton = ({loadTotal, total, loadMore,onClick}) => {
  return(
    <div className="loadMoreBox">
    <div className='loadArticleButton' onClick={() =>loadMore()}>
      {loadTotal === total ? 'That is All' : 'Load More ('+(loadTotal+' / '+total)+')'}
    </div>
    </div>
  )
}

export default LoadArticleButton