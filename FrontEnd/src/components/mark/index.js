import React from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import "./index.less"

const ReactHighMark = ({source="",style="fresh"}) => {
  const renderer = new marked.Renderer()
  marked.setOptions({
    renderer,
    highlight: (code) => hljs.highlightAuto(code).value,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  })
  let htmlCode = marked(source)
  let styleClass = `markBox ${style}`
  return(
    <div className={styleClass} >
      <div dangerouslySetInnerHTML={{__html: htmlCode}} ></div>
    </div>
  )
}

export default ReactHighMark