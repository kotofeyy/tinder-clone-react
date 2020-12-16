import React from 'react'
import PropTypes from 'prop-types';

function SendButton ({caption, onClick = () => {} }) {

    return (
        <button type="submit" onClick={onClick}>{caption} </button>
    )
}



SendButton.propTypes = {
    caption: PropTypes.string,
    onClick: PropTypes.func,
  };

SendButton.defaultProps = {
    caption: 'Отправить',
    onClick: () => {},
  };

export default SendButton
