import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
      <table className={css['transaction-history']}>
  <thead>
    <tr className={css['transaction-names']}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
        {
              items.map(item => (
        <tr key={item.id}>
            <TransactionHistoryItem
                type={item.type}
                amount={item.amount}
                currency={item.currency}        
            />
        </tr>   
      ))      
        }
    </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(Object),
}