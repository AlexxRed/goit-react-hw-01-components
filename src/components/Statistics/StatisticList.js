import PropTypes from 'prop-types';
import Statistics from './Statistics';
import s from './StatisticList.module.css';

// console.log(Statistics);

export default function StatisticList({ dataStatistics }) {
  // console.log(dataStatistics);
  return (
    <ul className={s.statList}>
      {dataStatistics.map(item => (
        <li className={s.item} key={item.id}>
          <Statistics label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
}

StatisticList.propTypes = {
  dataStatistics: PropTypes.arrayOf(PropTypes.object).isRequired,
};
