import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const toFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };
  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  };
  const onAddContact = ({ name, number }) => {
    if (contacts.find(cont => cont.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in contacts`);
    }
    setContacts(prevContacts => [
      ...prevContacts,
      { name, number, id: nanoid() },
    ]);
  };
  const onDelete = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1
        style={{
          fontSize: 40,
          color: '#1251cc',
        }}
      >
        Phonebook
      </h1>
      <ContactForm onAddContact={onAddContact} />
      <h2
        style={{
          fontSize: 40,
          color: '#1251cc',
        }}
      >
        Contacts
      </h2>
      <Filter toFilter={toFilter} value={filter} />
      <ContactList contacts={filterContacts()} onDelete={onDelete} />
    </div>
  );
};
