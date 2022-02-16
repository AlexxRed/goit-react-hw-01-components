import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, status, id }) {
  return (
    <div>
      <span class="status">{status}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
