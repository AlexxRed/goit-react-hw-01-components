import PropTypes from 'prop-types';
import Statistics from './Statistics';

// console.log(Statistics);

export default function StatisticList({ dataStatistics }) {
  // console.log(dataStatistics);
  return (
    <ul class="stat-list">
      {dataStatistics.map(item => (
        <li key={item.id}>
          <Statistics label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
}

StatisticList.propTypes = {
  dataStatistics: PropTypes.arrayOf(PropTypes.object).isRequired,
};
