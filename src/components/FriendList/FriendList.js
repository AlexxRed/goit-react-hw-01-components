import PropTypes from 'prop-types';
import FriendListItem from '../FriendList/FriendListItem';
import s from './FriendList.module.css';

export default function FriendList({ friendsData }) {
  // console.log(friendsData);
  // console.log(FriendListItem);
  return (
    <ul className={s.friendList}>
      {friendsData.map(friend => (
        <li className={s.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
            id={friend.id}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friendsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
