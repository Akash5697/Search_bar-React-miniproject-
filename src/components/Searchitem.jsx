import React from 'react'
import "./Searchitem.css"




const Searchitem = ({result}) => {

    function hendelclick(){
        alert(`You clicked on ${result.name}`);
    }

  return (
    <div className='Searchitem' onClick={hendelclick}>
      {result.name}
    </div>
  ) 
}

export default Searchitem
