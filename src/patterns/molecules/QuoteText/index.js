import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const QuoteText = ({ withQuote, children }) => {
  const renderQuote = icon =>
    withQuote ? <FontAwesomeIcon icon={icon} /> : null;

  return (
    <div className="row">
      <p className="lead">
        {renderQuote(faQuoteLeft)}
        {children}
        {renderQuote(faQuoteRight)}
      </p>
    </div>
  );
};

export default QuoteText;
