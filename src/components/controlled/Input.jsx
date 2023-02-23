import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setModalForm } from '../../app/reducers/modalFormSlice';
import { useCreateTodoMutation } from '../../app/api/todoApiSlice';

const Input = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [createTodo] = useCreateTodoMutation();
  const { title, priority, ...other } = useSelector((state) => state.modalForm);

  const createTodoHandler = () => {
    if (!title) {
      return;
    }

    createTodo({
      title: title,
      activity_group_id: id,
    });

    dispatch(
      setModalForm({
        title: '',
        isOpen: false,
        isDropDownItem: false,
        priority: 'Very High',
      })
    );
  };

  const handleChange = (e) => {
    dispatch(
      setModalForm({
        title: e.target.value,
      })
    );
  };

  const onSubmitWithEnter = (e) => {
    if (e.key === 'Enter') createTodoHandler();
  };

  return (
    <input
      autoFocus
      value={title}
      onChange={handleChange}
      onKeyDown={onSubmitWithEnter}
      data-cy='modal-add-name-input'
    />
  );
};

export default Input;
