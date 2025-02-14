import React from 'react'
import "./SearchResult.css"
import Searchitem from './Searchitem' 

const SearchResult = ({results}) => {
  return (
    <>
    <h2>Search Result</h2>
    <div className='SearchResult'>
      {
        results.map((result,id)=>{
            return <Searchitem result={result} key={id}/>
        })
      }
    </div>
    </>
    
  )
}

export default SearchResult
