import PropTypes from 'prop-types';
import s from './Statisics.module.css';

export default function Statistics({ label, percentage }) {
  // console.log(id);
  return (
    <div>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </div>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
