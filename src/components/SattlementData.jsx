import React from 'react'
import { transactionsSet1 } from '../constants';
// Step 1: Calculate net balances
const netBalances = {};

transactionsSet1.forEach(transaction => {
  const { from, to, amount } = transaction;

  // Update net balance for the lender
  netBalances[from] = (netBalances[from] || 0) + amount;

  // Update net balance for the debtor
  netBalances[to] = (netBalances[to] || 0) - amount;
});

// Step 2: Generate settlements
const settlements = [];

while (Object.values(netBalances).some(balance => balance !== 0)) {
  const maxCreditor = Object.keys(netBalances).reduce((a, b) => netBalances[a] > netBalances[b] ? a : b);
  const maxDebtor = Object.keys(netBalances).reduce((a, b) => netBalances[a] < netBalances[b] ? a : b);
  const settlementAmount = Math.min(Math.abs(netBalances[maxCreditor]), Math.abs(netBalances[maxDebtor]));

  // Create a settlement entry
  settlements.push({
    to: maxDebtor,
    from: maxCreditor,
    amount: settlementAmount,
    what: 'Settlement'
  });

  // Update net balances
  netBalances[maxCreditor] -= settlementAmount;
  netBalances[maxDebtor] += settlementAmount;
}

// Print the settlements report
settlements.forEach(settlement => {
  console.log(`To:${settlement.to}   From:${settlement.from}   Amount (GBP):${settlement.amount}   What:${settlement.what}`);
});
export default function SattlementData() {
  return (
    <table>
        <thead>
        <tr>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
            <th>Sattlement Type</th>
        </tr>
        </thead>
        <tbody>
        {settlements.map((settlement, index) => (
            <tr key={index}>
            <td>{settlement.from}</td>
            <td>{settlement.to}</td>
            <td>{settlement.amount}</td>
            <td>{settlement.what}</td>
            </tr>
        ))}
        </tbody>
    </table>
  )
}
