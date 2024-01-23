import styles from './information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ textInformation }) => (
	<div className={styles.text}>{textInformation}</div>
);

InformationLayout.propTypes = {
	textInformation: PropTypes.string,
};
