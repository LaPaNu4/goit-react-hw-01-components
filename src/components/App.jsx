import user from './data/user.json';
import data from './data/data';
import friends from './data/friends';
import transactions from './data/transactions';

import { Profile } from './profile/Profile';
import { Section } from './App.styled';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList.jsx';
import { TransactionDiv } from './TransactionHistory/TransactionHistory';

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
