import React from 'react';
import PropTypes from 'prop-types';
import {
  Trans,
  Table,
  Thead,
  Thel,
  Tdel,
  Trel,
} from './TransactionHistory.styled';
export const TransactionDiv = ({ items }) => {
  return (
    <Trans>
      <Table >
        <Thead>
          <tr>
            <Thel>Type</Thel>
            <Thel>Amount</Thel>
            <Thel>Currency</Thel>
          </tr>
        </Thead>

        <tbody>
          {items.map(item => {
            return (
              <Trel key={item.id}>
                <Tdel>{item.type}</Tdel>
                <Tdel>{item.amount}</Tdel>
                <Tdel>{item.currency}</Tdel>
              </Trel>
            );
          })}
        </tbody>
      </Table>
    </Trans>
  );
};


TransactionDiv.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};