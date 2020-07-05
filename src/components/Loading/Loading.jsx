import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Buffering } from '../../assets/images/loading.svg';

import './Loading.scss';

const Loading = ({ text }) => (
  <React.Fragment>
    <div className="loading">
      <Buffering />
    </div>
  </React.Fragment>
);

Loading.propTypes = {
  text: PropTypes.string,
}

Loading.defaultProps = {
  text: 'Carregando...',
}


export default Loading;
