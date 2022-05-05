import React, { useState, useEffect } from 'react';
import "./App.css";
import Input from "./components/input";
import Task from "./components/Todos/todos";
import Header from "./components/Header/header";

const App = () => {
    const [todos, setTodos] = useState([]);
    // console.log(todos);

	useEffect(() => {
		const data1 = localStorage.getItem("storeTODO");
		const loadedData = JSON.parse(data1);

		if(loadedData){
			setTodos(loadedData);
		}
	}, [])

	useEffect(() => {
		var data1 = JSON.stringify(todos);
		localStorage.setItem("storeTODO", data1);
	}, [todos])

    return (
        <div className =  "container">
            <div >
                <Header settodos = {setTodos}/>
                <Input todos = {todos} settodos = {setTodos}/>
                <Task todos = {todos} settodos = {setTodos}/>
            </div>
        </div>
    );
};

export default App;