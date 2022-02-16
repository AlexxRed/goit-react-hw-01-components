import PropTypes from 'prop-types';

export default function Statistics({ key, label, percentage }) {
  return (
    <li class="item" key={key}>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>
  );
}

Statistics.propTypes = {
  key: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
