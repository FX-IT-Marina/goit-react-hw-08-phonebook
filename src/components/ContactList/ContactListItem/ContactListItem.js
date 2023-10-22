import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operation';
import { Item, ContactName, Button } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, handleModal }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleIsModalOpen = () => {
    handleModal(id);
  };

  const deleteHandle = async () => {
    setIsLoading(true);
    await dispatch(deleteContact(id));
    setIsLoading(false);
  };

  return (
    <Item id={id}>
      <ContactName>
        {name}:<span>{number}</span>
      </ContactName>
      <Button onClick={handleIsModalOpen} type="submit"></Button>
      <Button onClick={deleteHandle} isLoading={isLoading}>
        Delete
      </Button>
    </Item>
  );
};
