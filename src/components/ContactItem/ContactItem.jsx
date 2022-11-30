import React from 'react';
import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({ contact, onDelete }) => {
  return (
    <Item>
      <span>{contact.name}</span>
      <span>{contact.number}</span>
      <Button
        value={contact.id}
        onClick={() => {
          onDelete(contact.id);
        }}
      >
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
