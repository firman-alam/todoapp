import { useParams } from 'react-router-dom';
import { HiOutlinePencil } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';

import { setTitle } from '../../app/reducers/titleSlice';
import { useUpdateGroupMutation } from '../../app/api/groupApiSlice';
import { setSelectedActivity } from '../../app/reducers/selectedActivitySlice';

const InlineEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [updateGroup] = useUpdateGroupMutation();
  const { title: titleSelected, todo_items } = useSelector(
    (state) => state.selectedActivity
  );
  const { title: titleActivity, isEditing } = useSelector(
    (state) => state.title
  );

  const handleTitle = () =>
    dispatch(setTitle({ title: titleSelected, isEditing: true }));
  const handleChange = (e) => dispatch(setTitle({ title: e.target.value }));

  const handleUpdate = async () => {
    await updateGroup({ id, title: titleActivity });
    dispatch(setSelectedActivity({ title: titleActivity }));
    dispatch(setTitle({ title: null, isEditing: false }));
  };

  const handleSync = async () => {
    if (titleActivity === titleSelected) {
      dispatch(setTitle({ title: null, isEditing: false }));
    } else if (!titleActivity) {
      dispatch(setTitle({ title: titleActivity, isEditing: false }));
    } else {
      await handleUpdate();
    }
  };

  const onKeyDown = async (e) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      await handleSync();
    }
  };

  return (
    <div className='inline-edit'>
      {!isEditing && (
        <h3 data-cy='todo-title' onClick={handleTitle}>
          {titleSelected}
        </h3>
      )}
      {isEditing && (
        <input
          autoFocus
          type='text'
          className='edit__title'
          onBlur={handleSync}
          onKeyDown={onKeyDown}
          value={titleActivity}
          onChange={handleChange}
        />
      )}

      <HiOutlinePencil
        className='edit__icon'
        data-cy='todo-title-edit-button'
        onClick={handleTitle}
        onBlur={handleSync}
      />
    </div>
  );
};

export default InlineEdit;
