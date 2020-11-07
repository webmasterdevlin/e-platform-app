import React from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

import { Box } from '@material-ui/core';
import InputWithSearchIconFormik from '../../../../../components/eplatform/components/input-with-search-icon-formik';
import PlainErrorMessage from '../../../../../components/eplatform/components/plain-error-message';

type Props = {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  id: string;
  label: string;
};
const CountryAutosuggest: React.FC<Props> = ({ setFieldValue, id, label }) => {
  const [country, setCountry] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);

  return (
    <div className={'mb-5'}>
      <label className={'font-weight-bold'} htmlFor={id}>
        {' '}
        {label}
      </label>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={async ({ value }) => {
          if (!value) {
            setSuggestions([]);
            return;
          }

          try {
            const { data } = await axios.get(
              `https://restcountries.eu/rest/v2/name/${value}`,
            );

            setSuggestions(
              data.map(row => ({
                name: row.name,
                flag: row.flag,
              })),
            );
          } catch (e) {
            setSuggestions([]);
          }
        }}
        onSuggestionsClearRequested={() => {
          setSuggestions([]);
        }}
        getSuggestionValue={suggestion => suggestion.name}
        renderSuggestion={suggestion => (
          <div className={'d-flex flex-row'}>
            <img
              src={suggestion.flag}
              alt={suggestion.name}
              style={{ width: '25px', marginRight: '1rem' }}
            />
            <span>{suggestion.name}</span>
          </div>
        )}
        onSuggestionSelected={(event, { suggestion, method }) => {
          if (method === 'enter') {
            event.preventDefault();
          }
          setCountry(suggestion.name);
          setFieldValue(id, suggestion.name);
        }}
        inputProps={{
          placeholder: 'Search for your country',
          autoComplete: 'abcd',
          value: country,
          name: 'country',
          onChange: (_event, { newValue }) => {
            setCountry(newValue);
          },
        }}
        renderInputComponent={inputProps => {
          return null;
        }}
      />
      <PlainErrorMessage id={id} />
    </div>
  );
};

export default CountryAutosuggest;
