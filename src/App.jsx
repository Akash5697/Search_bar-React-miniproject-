import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search_bar from './components/Search_bar'
import SearchResult from './components/SearchResult'



function App() {

  
const [results,setResults] = useState([]);

  return (
    <>
    <h2>ENTER THE SEARCH ITEM</h2>
    <div className='main-container'>
    <Search_bar setResults={setResults}/>
    <SearchResult results={results}/>
    </div>
        
    </>
  )
}

export default App
