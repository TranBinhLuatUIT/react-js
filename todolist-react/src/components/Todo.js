import React, {useState} from 'react';
import TodoForm from './TodoForm';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';


function Todo(props) {
    
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        props.updateTodo(edit, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return (
        <>
            {props.todos.map((todo, index) => (
                <div
                    key={index}
                    className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                    >
                    <div key={todo.id} onClick={() => props.completeTodo(todo.id)}>
                        {todo.text}
                    </div>
                    <div className='icons'>
                        <RiCloseCircleLine 
                            onClick={() => props.removeTodo(todo.id)}
                            className='delete-icon'
                        />
                        <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})}
                            className='edit-icon'
                        />
                    </div>
                </div>
            ))}
        </>
        // <div> 
        //    {a.map((b) => (
        //        <>
        //         <p>{b}</p>
        //         <RiCloseCircleLine />
        //         <TiEdit />
        //        </>
        //    ))}
        // </div>
    );


}

export default Todo
