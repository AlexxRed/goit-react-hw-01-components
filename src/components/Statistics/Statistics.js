import PropTypes from 'prop-types';

export default function Statistics({ label, percentage }) {
  // console.log(id);
  return (
    <div>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </div>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
