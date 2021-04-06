import React, {useState} from 'react';

const ToDoList = (props) => {

    const [editInput, setEditInput] = useState("");
    const [addEdit, setAddEdit] = useState({
        show: false,
    });

    const EditItem = () => {
        setAddEdit({show: true});
    };

    const editUpdate = (event) => {
        setEditInput(event.target.value.trim());
    };


    
    return (
        <>
        <div className="todo-styles">

        <button className="delete"
         onClick={() => {
             props.onSelectDelete(props.id)}}>
                 Delete</button>

        {addEdit.show ? (
            <>
            <br />
            <textarea
            className="editTask"
            placeholder="edit"
            onChange={editUpdate}
            />

            <button
            className="saveTask"
            onClick={()=>{
                props.onSelectEdit(props.id, editInput);
                setAddEdit({show: false});
            }}
            >
                +
            </button>
            </>
        ) : (
           
        
        <button className="edit"
         onClick={EditItem}>
                 Edit</button>
        )}
        <li className="list">{props.itemVal}</li>
        </div>
        </>
    );
};

export default ToDoList;