import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ toFilter, value }) => {
  return (
    <div>
      <Label className="input-group">
        <span>Find contacts by name</span>
        <Input
          type="text"
          name="filter"
          onChange={toFilter}
          value={value}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
    </div>
  );
};

Filter.propTypes = {
  toFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
