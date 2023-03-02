import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from './noteTypes'

const initialState = { 
    notes :[]
}

const noteReducer = (state = initialState, action) => {
    // console.log(action.payload)
    const n = state.notes.filter((note, index) => {
        return index !== action.payload
    })
    // console.log(n)
    switch (action.type) {
        case ADD_NOTE : return {
            notes : [...state.notes, action.payload]
        }
        case DELETE_NOTE:
            return {
            notes : n
        }
        // case UPDATE_NOTE : return {
        //     notes : [...state.notes, "New Note"]
        // }
        default : return state
    }
}
export default noteReducer;