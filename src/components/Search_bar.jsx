import React, { useState } from 'react'
import "./Search_Bar.css"
import { FaSearch } from "react-icons/fa";

const Search_bar = ({ setResults }) => {
    const [input, setInput] = useState("");

    const fatchdata = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((user) => {
                    return value &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value);
                });
                // console.log(results);
                setResults(results);
            })
            
    }

    const handelchange = (value) => {
        setInput(value);
        fatchdata(value);
    }

    return (
        <>
            <div className='whole_container'>
                <h2>Search: </h2>
                <div className='search_container' >
                    <div className='search-box' >
                        <FaSearch />
                        <input type="text" placeholder='Type to search...' value={input} onChange={(e) => handelchange(e.currentTarget.value)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search_bar
