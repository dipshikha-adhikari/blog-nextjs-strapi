import markdownit from 'markdown-it'
export const md = markdownit({
    html: true,
    linkify: true,
    typographer: true
})
