import React from 'react';

const calculateSettlements = (transactions) => {
  const balances = {};
  transactions.forEach((transaction) => {
    balances[transaction.from] = (balances[transaction.from] || 0) - transaction.amount;
    balances[transaction.to] = (balances[transaction.to] || 0) + transaction.amount;
  });

  const settlements = [];
  const sortedBalances = Object.entries(balances).sort((a, b) => a[1] - b[1]);

  let leftIndex = 0;
  let rightIndex = sortedBalances.length - 1;

  while (leftIndex < rightIndex) {
    const [debtor, debtorBalance] = sortedBalances[leftIndex];
    const [creditor, creditorBalance] = sortedBalances[rightIndex];

    if (debtorBalance !== 0 && creditorBalance !== 0) {
      const amount = Math.min(Math.abs(debtorBalance), creditorBalance);
      settlements.push({
        to: debtor,
        from: creditor,
        amount: amount,
        what: 'Settlement',
      });

      balances[debtor] += amount;
      balances[creditor] -= amount;
    }

    if (debtorBalance <= 0) {
      leftIndex++;
    }

    if (creditorBalance >= 0) {
      rightIndex--;
    }
  }

  return settlements;
};

const BillSettlement = ({ transactions }) => {
  const settlements = calculateSettlements(transactions);

  return (
    <div> 
      <table>
        <thead>
          <tr>
          <th>From (lender)</th>
            <th>To (debtor)</th>            
            <th>Amount (GBP)</th>
            <th>What</th>
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
    </div>
  );
};

export default BillSettlement;
