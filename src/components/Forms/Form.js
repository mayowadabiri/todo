import React from 'react';
import classes from './Form.module.css';
import Button from '../Button/Button';
const Form = ({ handleChange, todoValue, submitHandler, isEditing }) => {
  return (
    <div className={classes.form_group}>
      <input
        type="text"
        placeholder="Add todo"
        onChange={handleChange}
        value={todoValue}
      />
      <Button onclick={submitHandler} bgColor={classes.button_yellow}>
        {isEditing.edit ? 'EDIT' : 'ADD'}
      </Button>
    </div>
  );
};

export default Form;
