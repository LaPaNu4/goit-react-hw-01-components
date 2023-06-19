import React from 'react';
import PropTypes from 'prop-types';
import { FriendDiv, List, Item, Span } from './FriendList.styled';
export const FriendList = ({ friends }) => {

  return (
    <FriendDiv>
      <List>
        {friends.map(friend => {
           const spanStyle = {
             background: friend.isOnline ? '#24f101' : 'red', // Зелений колір для онлайн, червоний для офлайн
           };
          return (
            <Item key={friend.id}>
              <Span style={spanStyle}>{friend.isOnline}</Span>
              <img
                className="avatar"
                src={friend.avatar}
                alt="User avatar"
                width="48"
              />
              <p className="name">{friend.name}</p>
            </Item>
          );
        })}
      </List>
    </FriendDiv>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
