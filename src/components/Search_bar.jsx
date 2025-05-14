import React, { useState } from 'react'
import "./Search_Bar.css"
import { FaSearch } from "react-icons/fa";

const Search_bar = ({ setResults }) => {
    const [input, setInput] = useState("");

    const fatchdata = async (value) => {
    if (!value) {
        setResults([]); // Clear results if no input
        return;
    }

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        const filteredResults = users.filter(user =>
            user?.name?.toLowerCase().includes(value.toLowerCase())
        );

        setResults(filteredResults);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};


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
