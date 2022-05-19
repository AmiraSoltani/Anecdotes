import React from 'react'

const Home = (props) => {
  return (
    <div>
{props.jokes.map(el=><div>
    <h4>{el.auteur}</h4>
    <p>{el.joke}</p>
</div>)}
    </div>
  )
}

export default Home