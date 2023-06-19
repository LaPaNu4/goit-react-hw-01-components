import React from 'react';
// import PropTypes from 'prop-types';
import { Profile } from '../profile/Profile';
import user from '../user.json';
import { Section } from './App.styled';
import { Statistics } from 'Statistics/Statist';
import data from '../data';
import friends from '../friends'
import { FriendList } from '../FriendList/FriendList.jsx';
import { TransactionDiv } from 'TransactionHistory/TransactionHistory';
import transactions from '../transactions'
export const App = () => {
  return (
    <>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={data} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionDiv items={transactions} />
      </Section>
    </>
  );
};
