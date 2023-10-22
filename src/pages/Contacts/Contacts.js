import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operation';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/FilterForm/FilterForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Spinner } from '@chakra-ui/react';
import { selectIsLoading } from 'redux/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactId, setContactId] = useState('');
  const isLoading = useSelector(selectIsLoading);

  const handleToggleModal = contactId => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      console.log(contactId);
      setContactId(contactId);
    }
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <Filter />
      {isLoading ? (
        <Spinner color="orange.500" />
      ) : (
        <ContactList handleModal={handleToggleModal} />
      )}
    </div>
  );
}
