import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/Auth/Operations';
import { selectUser } from 'redux/Auth/Selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>{name}</p>
      <button type="button" onClick={handleLogOut}></button>
    </div>
  );
};
