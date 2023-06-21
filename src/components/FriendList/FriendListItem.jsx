import React from 'react';
import PropTypes from 'prop-types';
import { Span, Avatar, Name } from './FriendList.styled';
import { Item } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Span isOnline={isOnline}>{isOnline}</Span>
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </Item>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};