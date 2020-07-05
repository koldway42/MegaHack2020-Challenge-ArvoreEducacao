import React from 'react';

import "./Content.scss"

export default (props) => {
  return (
      <div className="Content">
          <div className="ContentContainer">
            {props.children}
          </div>
      </div>
  );
}