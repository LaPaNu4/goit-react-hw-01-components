import React from 'react';
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
