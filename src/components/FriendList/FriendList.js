import PropTypes from 'prop-types';
import FriendListItem from '../FriendList/FriendListItem';

export default function FriendList({ friendsData }) {
  // console.log(friendsData);
  // console.log(FriendListItem);
  return (
    <ul class="friend-list">
      {friendsData.map(friend => (
        <li class="item" key={friend.id}>
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
