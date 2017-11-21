import React from 'react';
import PropTypes from 'prop-types';

function Adress({ adress }) {
	return <div>Coucou Adress</div>;
}

Adress.propTypes = {
	adress: PropTypes.shape({
		number: PropTypes.string.isRequired,
		street: PropTypes.string.isRequired,
		postalCode: PropTypes.string.isRequired,
		city: PropTypes.string.isRequired,
	}).isRequired,
};

export default Adress;
