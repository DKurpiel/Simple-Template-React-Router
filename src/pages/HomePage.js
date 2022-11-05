import React from 'react';

import Article from '../components/Article';

const articles = [
  {
    id: 1,
    title: "Header 01 ...",
    author: "Jan Nowak",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 2,
    title: "Header 02 ...",
    author: "Tadeusz Nowak",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
  }
]

const HomePage = () => {

  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ))
  return (
    <div className='home'>
      {artList}
    </div>
  )
}

export default HomePage