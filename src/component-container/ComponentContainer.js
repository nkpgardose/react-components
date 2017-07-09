import React from 'react';
import PropTypes from 'prop-types';
import './ComponentContainer.css';

const propTypes = {
  children: PropTypes.node,
};

function ComponentContainer({children}) {
  return <div className="ComponentContainer">{children}</div>;
}

ComponentContainer.propTypes = propTypes;

export default ComponentContainer;
