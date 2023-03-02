import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from './noteTypes'

const addNote = (content) => {
    return {
        type: ADD_NOTE,
        payload: content
    }
}

const deleteNote = (index) => {
    return {
        type: DELETE_NOTE,
        payload : index
    }
}

// const updateNote = (index, noteContent) => {
//     return {
//         type: UPDATE_NOTE,
//         payload: {
//             index: index,
//             noteContent : noteContent
//         }
//     }
// }

// export {addNote, deleteNote, updateNote}
export { addNote, deleteNote }