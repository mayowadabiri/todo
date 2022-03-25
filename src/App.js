import logo from './logo.svg';
import classes from './App.module.css';
import Form from './components/Forms/Form';
import Todo from './components/Todo/Todo';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState({
    id: null,
    edit: false,
  });

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    if (isEditing.edit) {
      setTodos(
        todos.map((item) => {
          if (item.id === isEditing.id) item.todo = inputValue;
          return item;
        })
      );
      setIsEditing({
        id: null,
        edit: false,
      });
      setInputValue('');
    } else {
      if (inputValue.trim() !== '') {
        console.log('submit');
        evt.preventDefault();
        setTodos([
          ...todos,
          {
            id: uuidv4(),
            todo: inputValue,
          },
        ]);
        setInputValue('');
      }
    }
  };

  const handleDelete = (id) => {
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    console.log(updatedTodo);
    setTodos(updatedTodo);
  };

  const handleEdit = (id) => {
    const filter = todos.filter((todo) => todo.id === id);
    const selectedTodo = todos.find((todo) => todo.id === id);
    setInputValue(selectedTodo.todo);
    setIsEditing({
      id,
      edit: true,
    });
  };

  return (
    <div className={classes.app}>
      <div className={classes.app_container}>
        <Form
          handleChange={handleChange}
          todoValue={inputValue}
          submitHandler={handleSubmit}
          isEditing={isEditing}
        />
        <Todo
          editHandler={handleEdit}
          deleteHandler={handleDelete}
          todoArr={todos}
          isEditing={isEditing}
        />
      </div>
    </div>
  );
}

export default App;
