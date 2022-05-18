import {
    SET_LOADING,
    SET_STORIES,
    HANDLE_SEARCH,
    HANDLE_PAGE,
    REMOVE_STORY,
} from './actions'

const reducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, isLoading: true }
        case SET_STORIES:
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages
            }
        case HANDLE_SEARCH:
            return { ...state, query: action.payload, page: 0 }
        case HANDLE_PAGE:
            if (action.payload === 'prev') {
                if (state.page === 0) {
                    return { ...state, page: state.nbPages - 1 }
                }
                else {
                    return { ...state, page: state.page - 1 }
                }
            }
            else {
                if (state.page >= state.nbPages - 1) {
                    return { ...state, page: 0 }
                }
                else {
                    return { ...state, page: state.page + 1 }
                }
            }
        case REMOVE_STORY:
            return {
                ...state,
                hits: state.hits.filter((hit) => {
                    return hit.objectID !== action.payload
                })
            }
        default:
            throw new Error(`no matching "${action.type}" action type`)
    }
}

export default reducer