import React, { useContext } from 'react'
import { AppContext } from '../context'

const SearchForm = () => {
    const { query, handleSearch } = useContext(AppContext)

    return (
        <form onSubmit={(e) => e.preventDefault()} className='form'>
            <h1 className='page-title'>Search Hacker News</h1>
            <div className="underline"></div>
            <input type="text" name="searchTerm"
                value={query} onChange={(e) => handleSearch(e.target.value)} className='search' />
        </form>
    )
}

export default SearchForm