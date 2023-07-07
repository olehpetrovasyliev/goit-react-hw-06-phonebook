import { useDispatch, useSelector } from 'react-redux';
import {
  ContactsListWrapper,
  DelBtnStyled,
  StyledContact,
} from './ContactsList.styled';

import { delContact } from 'redux/slice';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  // console.log(contacts);
  const flteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().trim().includes(filter)
  );

  return (
    <ContactsListWrapper>
      {flteredContacts.map(contact => (
        <StyledContact key={contact.id}>
          {contact.name}:{contact.number}
          <DelBtnStyled
            onClick={() => {
              dispatch(delContact(contact.id));
            }}
          >
            Delete
          </DelBtnStyled>
        </StyledContact>
      ))}
    </ContactsListWrapper>
  );
};
