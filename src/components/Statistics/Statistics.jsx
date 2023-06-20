import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsSect, Item, List, Title } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSect>
      {title && <Title>Upload stats</Title>}

      <List>
        {stats.map(stat => {
          return (
            <Item style={{ background: generateRandomColor() }} key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}</span>
            </Item>
          );
        })}
      </List>
    </StatisticsSect>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
function generateRandomColor() {
  var letters = '0123456789ABCDEF'; // Допустимі символи для кольору
  var color = '#'; // Початковий символ для позначення коліру

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; // Додаємо випадковий символ з допустимих
  }

  return color;
}
