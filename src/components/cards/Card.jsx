import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HiOutlineTrash } from 'react-icons/hi';

import { formatDate } from '../../helpers/helper';
import { setModalAlert } from '../../app/reducers/modalAlertSlice';

function Card({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch(
      setModalAlert({
        type: 'activity',
        isOpen: true,
        id: item.id,
        title: item.title,
      })
    );
  };

  const handleNavigate = () => {
    navigate(`/activity/${item.id}`);
  };

  const formattedDate = formatDate(item.created_at);

  return (
    <section className='card' data-cy='activity-item' onClick={handleNavigate}>
      <div className='card__container'>
        <p data-cy='activity-item-title'>{item.title}</p>
        <div className='card__footer'>
          <span data-cy='activity-item-date'>{formattedDate}</span>
          <HiOutlineTrash
            className='icon'
            onClick={handleDelete}
            data-cy='activity-item-delete-button'
          />
        </div>
      </div>
    </section>
  );
}

export default Card;
