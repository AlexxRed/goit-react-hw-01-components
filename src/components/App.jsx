import Profile from "./Profile/Profile";
import dataUser from '../components/Profile/user.json'
// import Statistics from "./Statistics/Statistics";
import dataStatistics from '../components/Statistics/data.json'
import StatisticList from './Statistics/StatisticList'
import Section from './Section/Section'
import FriendList from './FriendList/FriendList'
import friendsData from '../components/FriendList/friends.json'
import TransactionHistory from './TransactionHistory/TransactionHistory'
import transactions from '../components/TransactionHistory/transactions.json'
// console.log(transactions);
// console.log(Statistics);
// console.log(dataStatistics);
// console.log(friendsData);
// console.log(FriendList);
export const App = () => {
  return (
    <div>
      <Profile
  url={dataUser.avatar}
  userName={dataUser.username}
  tag={dataUser.tag}
  location={dataUser.location}
  followers={dataUser.stats.followers}
  views={dataUser.stats.views}
  likes={dataUser.stats.likes}
      />
      <Section title='Upload stats'>
        <StatisticList dataStatistics={dataStatistics} />
      </Section>
      <Section title='Friends'>
        <FriendList friendsData={friendsData} />
      </Section>
      <Section title='Transactions'>
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
};













// ReactDOM.render(<Profile
//   url={dataUser.avatar}
//   userName={dataUser.username}
//   tag={dataUser.tag}
//   location={dataUser.location}
//   followers={dataUser.stats.followers}
//   views={dataUser.stats.views}
//   likes={dataUser.stats.likes}
// />,
//   document.querySelector('#root'))