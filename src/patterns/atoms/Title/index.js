import React from 'react';

const Title = props => {
  const { priority, children } = props;
  const Tag = `h${priority}`;
  return <Tag {...props}>{children}</Tag>;
};

export default Title;
