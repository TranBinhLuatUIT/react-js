import React, {useState, useEffect, useRef} from 'react'



function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null, input);
    
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = e => {
        e.preventDefault();
    
    
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('')
    };

    const handleChange = e => {
        setInput(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="todo-form"> 
                {props.edit ? 
                (
                <>
                    <input 
                        placeholder="Update your item"
                        value = {input}
                        name='text'
                        onChange={handleChange} 
                        ref={inputRef}
                        className='todo-input edit'
                    />
                    <button onClick={handleSubmit} className='todo-button edit'>Update</button>
                </>
                ): 
                (
                <>
                    <input 
                        placeholder="Add a todo"
                        value = {input}
                        name='text'
                        onChange={handleChange} 
                        ref={inputRef}
                        className='todo-input'
                    />
                    <button onClick={handleSubmit} className='todo-button'>Add todo</button>
                </>    
                )}



                

            </form>
        </div>
    )
}



export default TodoForm
