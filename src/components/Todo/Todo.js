import Button from '../Button/Button';
import classes from './Todo.module.css';

const Todo = ({ todoArr, deleteHandler, editHandler, isEditing }) => {
  return (
    <>
      <ul className={classes.todo}>
        {todoArr.map((item) => (
          <li className={classes.todo_item} key={item.id}>
            <p className={classes.todo_text}>{item.todo}</p>
            <div className={classes.todo_btns}>
              <Button onclick={() => editHandler(item.id)}>Edit</Button>
              {!isEditing.edit ? (
                <Button onclick={() => deleteHandler(item.id)}>Delete</Button>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
