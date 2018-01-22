import React from 'react';
import './SourceLink.css';

const SourceLink = () => (
  <div className="source-link">
    View <a href={process.env.REACT_APP_SOURCE_URL}>source</a>.
  </div>
);

export default SourceLink;
