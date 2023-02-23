import './todo.scss';
import { useDispatch, useSelector } from 'react-redux';

import Todos from './Todos';
import person from '../../assets/person.svg';
import Person from '../controlled/Person';
import { setModalForm } from '../../app/reducers/modalFormSlice';

const Content = ({ items }) => {
  const dispatch = useDispatch();
  const { title, todo_items: todos, ...other } = items;
  const { sortBy, isOpen } = useSelector((state) => state.sortOption);

  const sortTodos = (action) => {
    switch (action) {
      case 'NEW':
        return todos.slice().sort((a, b) => b.id - a.id);
      case 'OLD':
        return todos.slice().sort((a, b) => a.id - b.id);
      case 'AZ':
        return todos.slice().sort((a, b) => (a.title > b.title ? 1 : -1));
      case 'ZA':
        return todos.slice().sort((a, b) => (a.title < b.title ? 1 : -1));
      case 'INCOMPLETE':
        return todos.slice().sort((a, b) => b.is_active - a.is_active);
      default:
        return todos;
    }
  };

  const openForm = () => {
    dispatch(
      setModalForm({
        isOpen: true,
        titleForm: 'Tambahkan List Item',
        priority: 'Very High',
      })
    );
  };

  if (todos.length > 0) {
    return <Todos items={sortTodos(sortBy)} />;
  }

  return <Person src={person} onClick={openForm} data-cy='todo-empty-state' />;
};

export default Content;
