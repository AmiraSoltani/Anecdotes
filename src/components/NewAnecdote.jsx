import React, {useState} from 'react'

const NewAnecdote = (props) => {
    const [auteur, setAuteur]=useState("");
    const [joke, setJoke]=useState("");
const onChangeAuteur=(e)=>{
    setAuteur(e.target.value)
    console.log(auteur)
}
const onChangeJoke=(e)=>{
    setJoke(e.target.value)
    console.log(joke)
}
  return (
   <form>
       <input type="text" name="auteur" onChange={onChangeAuteur}/>
       <input type="text" name="joke" onChange={onChangeJoke}/>
       <button onClick={(e)=>{
           e.preventDefault(); 
           props.add(auteur, joke);
           setAuteur("")
           setJoke("")
       }}>Add Joke</button>
   </form>
  )
}

export default NewAnecdote