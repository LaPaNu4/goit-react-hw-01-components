import React from 'react';
import PropTypes from 'prop-types';
import {Profile} from '../profile/Profile';
import user from '../user.json';
import { Section } from './App.styled';

export const App = () => {
  
  return (
    <Section
      className="section"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#ccc',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Section>
  );

};
