import PropTypes from 'prop-types';
import css from './TransactionHistoryItem.module.css'

export default function TransactionHistoryItem({type, amount, currency}) {
    return (
        <>
            <td className={css['transaction-data']}>{type}</td>
            <td className={css['transaction-data']}>{amount}</td>
            <td className={css['transaction-data']}>{currency}</td>
        </>
    )
}

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}