import PropTypes from 'prop-types';

export default function Profile(props) {
  // console.log(props);
  const { url, userName, tag, location, followers, views, likes } = props;
  return (
    <div class="profile">
      <div class="description">
        <img src={url} alt="User avatar" class="avatar" />
        <p class="name">{userName}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  url: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

//render without props

// const profile = (<div className="profile">
//   <div className="description">
//     <img
//       src={dataUser.avatar}
//       alt="User avatar"
//       className="avatar"
//     />
//     <p className="name">{dataUser.username}</p>
//     <p className="tag">{dataUser.tag}</p>
//     <p className="location">{dataUser.location}</p>
//   </div>

//   <ul className="stats">
//     <li>
//       <span className="label">Followers</span>
//       <span className="quantity">{dataUser.stats.followers}</span>
//     </li>
//     <li>
//       <span className="label">Views</span>
//       <span className="quantity">{dataUser.stats.views}</span>
//     </li>
//     <li>
//       <span className="label">Likes</span>
//       <span className="quantity">{dataUser.stats.likes}</span>
//     </li>
//   </ul>
// </div>)

// ReactDOM.render(profile, document.querySelector('#root'));
