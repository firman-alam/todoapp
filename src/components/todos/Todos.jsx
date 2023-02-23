import Todo from './Todo';

const Todos = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <Todo
          key={item.id}
          id={item.id}
          title={item.title}
          priority={item.priority}
          is_active={item.is_active}
        />
      ))}
    </ul>
  );
};

export default Todos;
