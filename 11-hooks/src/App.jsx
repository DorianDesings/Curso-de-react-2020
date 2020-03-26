import React, { useState } from 'react'

import { useHttp } from './hooks/useHttp'

const App = () => {

  const [id, setId] = useState(1)
  const [post, isLoading] = useHttp(`https://jsonplaceholder.typicode.com/posts/${id}`)

  const handlePrevId = () => {
    if (id > 1) setId(id - 1)
  }

  const handleNextId = () => {
    setId(id + 1)
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button disabled={isLoading} onClick={handlePrevId}>Prev Id</button>
      <button disabled={isLoading} onClick={handleNextId}>Next Id</button>
      {isLoading && <h2>Loading...</h2>}
      <p>{id}</p>
    </>
  );
}


export default App;