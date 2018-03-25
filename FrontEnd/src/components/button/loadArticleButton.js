import React from 'react'
import "./loadArticleButton.less"

const LoadArticleButton = ({loadTotal, total, loadMore,onClick}) => {
  return(
    <div className='loadArticleButton reset' onClick={() =>loadMore()}>
      {loadTotal === total ? 'That is All' : 'Load More ('+(loadTotal+' / '+total)+')'}
    </div>
  )
}

export default LoadArticleButton