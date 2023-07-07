import { useState } from 'react';
import { StyledAddForm } from './AddForm.styled';

import { AddContactInput } from './AddFormInpt/AddFormInput';
import { AddContactBtn } from './AddFormInpt/AddFormInput.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/slice';
import { selectContacts } from 'redux/selectors';

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleChange = ({ target }) => {
    setContact(prev => ({ ...prev, [target.name]: target.value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(c => c.name === e.target.name.value)) {
      return alert('Contact already exists');
    }

    dispatch(addContact(contact));

    setContact({ name: '', number: '' });
  };

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
          value={contact.name}
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
          value={contact.number}
        />
      </label>
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </StyledAddForm>
  );
};
