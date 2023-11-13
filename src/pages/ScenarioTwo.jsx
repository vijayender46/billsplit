import React from 'react'
import { transactionsSet2 } from '../constants'
import BillSettlement from '../components/BillSattlement'

export default function ScenarioTwo() {
  return (
    <>
    {/* ================ User Bill Data =========== */}
        <div className='section-full first'>
        <h3>Users Bill Data</h3>
        <table>
        <thead>
            <tr>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
            <th>What</th>
            </tr>
        </thead>
        <tbody>
            {transactionsSet2.map((bill, index) => (
            <tr key={index}>
                <td>{bill.from}</td>
                <td>{bill.to}</td>
                <td>{bill.amount}</td>
                <td>{bill.what}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>


    {/* ================ Report generated from Split App =========== */}
    <div className='section-full second'>
        <h3>Sattlement report generated</h3>
        <BillSettlement transactions={transactionsSet2} />
    </div>
   </>
  )
}
