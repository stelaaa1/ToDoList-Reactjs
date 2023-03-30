<<<<<<< HEAD
import React, { useEffect } from "react";
import { v4 as uuidV4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
    // setInput("");
  };

//   const handleEdit = (todo) => {
//     console.log("Editing todo:", todo);
//     setEditTodo(todo);
//   };
  
useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput,editTodo]);

  
  const onInputChange=(event) =>{
    setInput(event.target.value);
  };

  const onFormSubmit=(event) =>{
    event.preventDefault();
    if(!editTodo){
        setTodos([...todos,{id:uuidV4(),title:input,completed:false}]);
        setInput("");
    }
    else{
        updateTodo(input,editTodo.id,editTodo.completed);

    }
  };

//   const handleInputChange = (event) => {
//     setInput(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     if (input.trim() === "") {
//       return;
//     }
//     if (editTodo) {
//       updateTodo(input, editTodo.id, editTodo.completed);
//     } else {
//       setTodos([...todos, { id: uuidV4(), title: input, completed: false }]);
//       setInput("");
//     }
//   };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {editTodo ? 'OK' : 'Add'}
      </button>
    </form>
  );
};

export default Form;
=======
import React, { useEffect } from "react";
import { v4 as uuidV4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
    // setInput("");
  };

//   const handleEdit = (todo) => {
//     console.log("Editing todo:", todo);
//     setEditTodo(todo);
//   };
  
useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput,editTodo]);

  
  const onInputChange=(event) =>{
    setInput(event.target.value);
  };

  const onFormSubmit=(event) =>{
    event.preventDefault();
    if(!editTodo){
        setTodos([...todos,{id:uuidV4(),title:input,completed:false}]);
        setInput("");
    }
    else{
        updateTodo(input,editTodo.id,editTodo.completed);

    }
  };

//   const handleInputChange = (event) => {
//     setInput(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     if (input.trim() === "") {
//       return;
//     }
//     if (editTodo) {
//       updateTodo(input, editTodo.id, editTodo.completed);
//     } else {
//       setTodos([...todos, { id: uuidV4(), title: input, completed: false }]);
//       setInput("");
//     }
//   };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {editTodo ? 'OK' : 'Add'}
      </button>
    </form>
  );
};

export default Form;
>>>>>>> origin/main
