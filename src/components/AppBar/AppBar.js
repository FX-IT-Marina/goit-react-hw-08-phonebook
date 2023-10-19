import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu /UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/Selectors';

export const AppBar = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};