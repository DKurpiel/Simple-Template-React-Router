import React from 'react'

const Article = ({ title, author, text }) => {

  const styles = {
    marginBottom: 30
  }
  const stylesSpan = {
    display: "block",
    marginBottom: 10,
    fontSize: 12
  }

  return (
    <article style={styles}>
      <h3 style={{
        marginBottom: 3,
        textTransform: "uppercase"
      }}>{title}</h3>
      <span style={stylesSpan}>{author}</span>
      <p>{text}</p>
    </article>
  )
}

export default Article