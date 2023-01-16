import PropTypes from 'prop-types';

export default function Statistics({label, percentage}) {
    return (
    <>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </>
    )
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}