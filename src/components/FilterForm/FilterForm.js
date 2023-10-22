import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { selectValue } from 'redux/selectors';
import { Label, Input, LabelText } from './FilterForm.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectValue);

  const onChange = e => {
    const filter = e.currentTarget.value;
    dispatch(changeFilter(filter));
  };

  return (
    <Label>
      <LabelText>Find contacts by name</LabelText>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </Label>
  );
};
