import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./input.css";

const Input = ({todos, settodos}) => {
    const [input, setinput] = useState("");

    const handleChange = (val) => {
        setinput(val);
    }

    // submitting the input by Enter Key
    const handleKey = (keyCode) => {
        if(keyCode === 13){
            if(input !== ""){
                let newToDo = {
                    id : uuidv4(),
                    listItem: input,
                    isChecked: false,
                }
                let updatedToDoList = [...todos];
                updatedToDoList.unshift(newToDo);
                settodos(updatedToDoList);
                setinput("");
            }else{
                return;
            }
        }
    }
        


    return (
        <div className = "inputHeader">
            <input
                className = "input"
                type = "text" 
                placeholder = "add tasks"
                value = {input}
                onChange = {(e) =>handleChange(e.target.value)}
                onKeyUp = {(e) => handleKey(e.keyCode)}
                />
                
                {/* <i className="fa fa-plus-circle fa-3x add" aria-hidden="true"></i> */}
        </div>
    );
};

export default Input;