import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { refreshUser } from 'redux/Auth/Operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/Home/Home.js'));
const RegisterPage = lazy(() => import('../pages/Register/Register.js'));
const LoginPage = lazy(() => import('../pages/Login/Login.js'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts.js'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={ContactsPage} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
}

//   return (
//     <FormContainer>
//       <Title>Phonebook</Title>
//       <ContactForm />
//       <Title>Contacts</Title>
//       <Filter />
//       <ContactList />
//     </FormContainer>
//   );
// }
