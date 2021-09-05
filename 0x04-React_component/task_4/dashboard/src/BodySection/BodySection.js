import React from 'react';
import PropTypes from 'prop-types';


export default function BodySection({title, children}) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
}


BodySection.propTypes = {
  title: PropTypes.string,
}