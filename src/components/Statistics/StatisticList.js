import PropTypes from 'prop-types';
import Statistics from './Statistics';

// console.log(Statistics);

export default function StatisticList({ dataStatistics }) {
  // console.log(dataStatistics);
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>
      <ul class="stat-list">
        {dataStatistics.map(
          item => (
            // <li key={item.key}>
            <Statistics
              key={item.key}
              label={item.label}
              percentage={item.percentage}
            />
          )
          // </li>
        )}
      </ul>
    </section>
  );
}

StatisticList.propTypes = {
  dataStatistics: PropTypes.arrayOf(PropTypes.object),
};
