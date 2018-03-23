const marked = require('markedtoc')
const renderer = new marked.Renderer()

renderer.heading = function (text, level) {
  const escapedText = text.toLowerCase()
  // .replace(/[^\w]+/g, '-')
  const head = `
    <h${level}>
      <a name="${escapedText}" href="#${escapedText}">
        <span class="header-link"></span>
      </a>
      ${text}
    </h${level}>
  `
  return head
}

marked.setOptions({
  renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})

console.log(marked("```\nvar a = (function(){\nconsole.log('111')\n},function(){\nconsole.log('222')\n})();  ----> 222\n```"))
