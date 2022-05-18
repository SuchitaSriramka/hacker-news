import React, { useContext } from 'react'
import { AppContext } from '../context'

const Stories = () => {
    const { hits, isLoading, handleRemove } = useContext(AppContext)

    if (isLoading) {
        return <div className="loader"></div>
    }
    return (
        <main>
            {hits.map(data => {
                const { title, url, author, points, num_comments, objectID } = data
                return (
                    <div key={objectID} className='story'>
                        <h3 className='story-title'>{title}</h3>
                        <p className='story-info'>{points} by {author} | {num_comments} comments</p>
                        <button className='btn readmore'>
                            <a href={url} target='_blank' rel="noreferrer">Read More</a>
                        </button>
                        <button className='btn remove' onClick={() => handleRemove(objectID)}>Remove</button>
                    </div>
                )
            })}
        </main>
    )
}

export default Stories