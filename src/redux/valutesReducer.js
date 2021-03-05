const GET_VALUTES = 'GET_VALUTES'
const GET_DATE = 'GET_DATE'
const GET_TYPE = 'GET_TYPE'
const GET_COUNT = 'GET_COUNT'
const GET_RESULT = 'GET_RESULT'
const ADD_TO_LIKED = 'ADD_TO_LIKED'

let initialState = {
    valutes: {},
    date: "",
    type: 58.38,
    count: '',
    result: '',
    likedValutes: []
}

const valutesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VALUTES:
            return {
                ...state,
                valutes: action.payload
            }
        case GET_DATE:
            return {
                ...state,
                date: action.payload
            }
        case GET_COUNT:
            return {
                ...state,
                count: action.payload
            }
        case GET_TYPE:
            return {
                ...state,
                type: action.payload
            }
            case GET_RESULT:
            return {
                ...state,
                result: state.count / state.type
            }
            case ADD_TO_LIKED:
            return {
                ...state,
                likedValutes: [...state.likedValutes, action.id],
            }
        default:
            return state
    }
}

export const getValutes = (valutes) => ({ type: GET_VALUTES, payload: valutes })
export const getDate = (date) => ({ type: GET_DATE, payload: date })
export const getType = (type) => ({ type: GET_TYPE, payload: type })
export const getCount = (count) => ({ type: GET_COUNT, payload: count })
export const getResult = () => ({ type: GET_RESULT })
export const addValute = (id, charCode) => ({ type: ADD_TO_LIKED, id, charCode })

export default valutesReducer