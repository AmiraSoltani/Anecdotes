import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import NewAnecdote from './components/NewAnecdote';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  const [list, setList]=useState([]);
  const AddAnecdote=(x, y)=>{
setList([...list, {auteur:x, joke:y}])
console.log(list)
  }
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/'>
      <Home jokes={list}/>
      </Route>
      <Route path='/add'>
     <NewAnecdote add={AddAnecdote}/>
     </Route>
     </Switch>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
