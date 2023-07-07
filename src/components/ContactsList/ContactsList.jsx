import { useDispatch, useSelector } from 'react-redux';
import {
  ContactsListWrapper,
  DelBtnStyled,
  StyledContact,
} from './ContactsList.styled';

import { delContact } from 'redux/slice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

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
