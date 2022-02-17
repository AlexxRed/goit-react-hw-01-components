import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile(props) {
  // console.log(props);
  const { url, userName, tag, location, followers, views, likes } = props;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={url} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{userName}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
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
