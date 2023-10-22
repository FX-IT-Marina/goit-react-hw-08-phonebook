import { ContactListItem } from './ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { selectFilter } from 'redux/selectors';

export const ContactList = ({ handleModal }) => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = () => {
    if (contacts) {
      return contacts.filter(({ name }) =>
        name
          .split(' ')
          .join('')
          .toLocaleLowerCase()
          .includes(filter.toLocaleLowerCase())
      );
    }
  };

  return (
    <List>
      {visibleContacts().map(({ name, number, id }) => {
        return (
          <ContactListItem
            name={name}
            number={number}
            key={id}
            id={id}
            handleModal={handleModal}
          />
        );
      })}
    </List>
  );
};
