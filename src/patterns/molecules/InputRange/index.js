import './styles.scss';

import React from 'react';
import Small from '../../atoms/Small';
import Label from '../../atoms/Label';
import { Trans } from 'react-i18next';

const InputRange = props => {

  const getLabelProps = ({ labelText, id }) => {
    return {
      htmlFor: id,
      labelText,
    };
  }

  const getSmallProps = () => {
    return {
      className: 'range',
      children: spanGroupTag()
    };
  }

  const getInputProps = ({ defaultValue, id, tags }) => {
    return {
      defaultValue,
      id,
      className: 'custom-range',
      min: 0,
      max: tags ? tags.length - 1 : [],
      type: 'range',
      tags
    };
  }

  const spanGroupTag = () => {
    return (
      <>
        {getInputProps(props).tags.map((tag, index) => renderSpanTags(tag, index))}
      </>
    );
  }

  const renderSpanTags = (tag, key) => {
    return (
      <span
        className={getClassNameRange(key)}
        key={key} >
        <Trans>{tag}</Trans>
      </span>
    );
  }

  const getClassNameRange = id => {
    return (props.defaultValue === id) ? 'active-range' : 'd-none d-sm-block';
  }

  const handleChangeRange = (e) => {
    props.valueRange(parseInt(e.target.value))
  }

  return (
    <div className="form-group">
      <Label {...getLabelProps(props)} />
      <Small {...getSmallProps(props)} />
      <input {...getInputProps(props)} onChange={handleChangeRange} />
    </div>
  )
}

export default InputRange;