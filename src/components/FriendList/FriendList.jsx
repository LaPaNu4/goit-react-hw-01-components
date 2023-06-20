import React from 'react';
import PropTypes from 'prop-types';
import { FriendDiv, List, Item, Span } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <FriendDiv>
      <List>
        {friends.map(friend => {
          return (
            <Item key={friend.id}>
              <Span isOnline={friend.isOnline}>{friend.isOnline}</Span>
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
