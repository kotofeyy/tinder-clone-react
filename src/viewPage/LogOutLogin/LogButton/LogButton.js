import React from 'react'
import PropTypes from 'prop-types';


function LogButton({caption, onClick = () => {} }) {

    return (
        <button onClick = {onClick}>{caption}</button>
    )
}


LogButton.propTypes = {
    caption: PropTypes.string,
    onClick: PropTypes.func,
  };

LogButton.defaultProps = {
    caption: 'Войти',
    onClick: () => {},
  };
  
  export default LogButton