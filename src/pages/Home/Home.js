import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Phonebook</h1>
      <button>
        <NavLink to="/contacts">Let's start</NavLink>
      </button>
    </div>
  );
}
