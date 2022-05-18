import React, { useContext } from 'react'
import { AppContext } from '../context'

const Buttons = () => {
    const { nbPages, page, handlePage, isLoading } = useContext(AppContext)

    return (
        <div className='btn-container'>
            <button className='btn-page'
                disabled={isLoading}
                onClick={() => handlePage('prev')}>prev</button>
            <span className='page-no'>{page + 1} of {nbPages}</span>
            <button className='btn-page'
                disabled={isLoading}
                onClick={() => handlePage('next')}>next</button>
        </div>
    )
}

export default Buttons