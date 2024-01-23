import PropTypes from 'prop-types';
import { FieldLayout } from './fieldLayout';

export const Field = ({ field, handleClickCell, winningIndex }) => {
	return (
		<FieldLayout
			field={field}
			handleClickCell={handleClickCell}
			winningIndex={winningIndex}
		/>
	);
};

Field.propTypes = {
	field: PropTypes.array,
	handleClickCell: PropTypes.func,
	winningIndex: PropTypes.array,
};
