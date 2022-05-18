import React, { useEffect, createContext, useReducer } from 'react'
import reducer from './reducer'
import {
    SET_LOADING,
    SET_STORIES,
    HANDLE_SEARCH,
    HANDLE_PAGE,
    REMOVE_STORY,
} from './actions'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
    isLoading: true,
    hits: [],
    query: 'React',
    page: 0,
    nbPages: 0,
}

const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchStories = async (url) => {
        dispatch({ type: SET_LOADING })
        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data);
            dispatch({
                type: SET_STORIES,
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages
                }
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleSearch = (value) => {
        console.log(value);
        dispatch({ type: HANDLE_SEARCH, payload: value })
    }

    const handlePage = (value) => {
        dispatch({ type: HANDLE_PAGE, payload: value })
    }

    const handleRemove = (id) => {
        dispatch({ type: REMOVE_STORY, payload: id })
    }
    useEffect(() => {
        fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
    }, [state.query, state.page])

    return (
        <AppContext.Provider value={{ ...state, handleSearch, handlePage, handleRemove }}>{children}</AppContext.Provider>
    )
}

export { AppContext, AppProvider }