import Profile from "./Profile/Profile";
import dataUser from '../components/Profile/user.json'
import Statistics from "./Statistics/Statistics";
import dataStatistics from '../components/Statistics/data.json'
console.log(Statistics);
console.log(dataStatistics);

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