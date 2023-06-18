import React from 'react';
import PropTypes from 'prop-types';
import { Profilesss, Info, List, Item } from '../components/App.styled';
import user from '../user.json';

export const Profile = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <Profilesss>
      <div className="description">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
          style={{ width: '200px', borderRadius: '50%', background: 'aqua' }}
        />
        <Info>{username}</Info>
        <Info className="tag">@{tag}</Info>
        <Info className="location">{location}</Info>
      </div>

      <List>
        <Item>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </Item>
        <Item>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </Item>
        <Item>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </Item>
      </List>
    </Profilesss>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
