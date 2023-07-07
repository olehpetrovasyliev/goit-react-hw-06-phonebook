import { useState } from 'react';
import { StyledAddForm } from './AddForm.styled';

import { AddContactInput } from './AddFormInpt/AddFormInput';
import { AddContactBtn } from './AddFormInpt/AddFormInput.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/slice';

export const AddContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts);

  // const test = useSelector(state => state);

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else if (target.name === 'number') {
      setNumber(target.value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    // console.log(test);
    setName('');
    setNumber('');
  };
  // console.log(contacts);

  return (
    <StyledAddForm onSubmit={handleSubmit}>
      <label>
        Name
        <AddContactInput
          name={'name'}
          type={'text'}
          validator={
            "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          }
          key={crypto.randomUUID}
          title={
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          }
          cb={handleChange}
          value={name}
        />
      </label>
      <label>
        Number
        <AddContactInput
          name={'number'}
          type={'tel'}
          validator={
            '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}'
          }
          title={
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          }
          cb={handleChange}
          value={number}
        />
      </label>
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </StyledAddForm>
  );
};
