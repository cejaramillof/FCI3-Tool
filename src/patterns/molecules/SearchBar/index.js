import React from 'react';
import { Trans } from 'react-i18next';
import Button from 'patterns/atoms/Button';
import Input from 'patterns/atoms/Input';


const SearchBar = props => {
  
  const getInputProps = () => {
    return {
      className: 'form-control',
      describedby: 'search-button',
      placeholder: 'Glober username',
      type: 'text',
    };
  }

  const submitSearch = () => {
    let usuarioData = {
      username: 'rgomez',
      email: 'r.gomez@globant.com'
    }
    props.onSearch(usuarioData);
  }

  return (
    <div className="input-group">
      <Input {...getInputProps()} />
      <div className="input-group-append">
        <Button id="search-button" onClick={submitSearch}>
          <Trans>SELECT-A-GLOBER</Trans>
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
