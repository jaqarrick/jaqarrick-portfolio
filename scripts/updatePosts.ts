const path = require("path")
const fs = require("fs")
const matter = require("gray-matter")
const { dir } = require("console")
const markdown = require("markdown").markdown

const getPosts = () => {
  const directoryPath = path.join(__dirname, "../src/components/blog/posts")
  const files = fs.readdirSync(directoryPath).filter(file => {
    if (file != ".DS_Store") return file
  })
  return files.map(file => {
    const filePath = path.join(
      __dirname,
      `../src/components/blog/posts/${file}`
    )
    const rawPost = matter.read(filePath)
    return {
      htmlText: markdown.toHTML(rawPost.content),
      date: rawPost.data.date,
      title: rawPost.data.title,
      id: rawPost.data.id,
    }
  })
}

fs.writeFile(
  path.join(__dirname, "../src/components/blog/data/blogData.json"),
  JSON.stringify(getPosts()),
  err => {
    if (err) throw err
  }
)
