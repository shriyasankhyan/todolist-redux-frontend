import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'
import {addNote, updateNote, deleteNote} from '../redux/note/noteActions'

var todo = "";
var index = 0;
var noteContent = ""
const ToDoListContainer = (props) => {
  const [note, setNote] = useState("");

  function add() {
    todo = note;
    props.addNote()
    setNote("")
  }

  function remove(ind) {
    index = ind;
    props.deleteNote()
  }

  return (
    <div>
      <h1>ToDoList</h1>
      <div >
        <div className='input-field'>
          <input placeholder='Add Todo' onChange={n => setNote(n.target.value)} value={note}></input>
        <button onClick={() => add()} >+</button>
        </div>
        
        <div className='todo-container'><div className='todo-list'>
        {props.notes.map((note,index) => {
          return <div key={index} className='todo-item'>
            <div className='note-div'>{index+1}. {note} 
            </div>
            <button onClick={() => remove(index)}>-</button>
          </div>
        })}
        </div>
        </div>
        
      </div>
     
    </div>

  )
}

const mapStateToProps = state => {
  return {
    notes : state.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNote: () => dispatch(addNote(todo)),
    deleteNote: () => dispatch(deleteNote(index))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer)