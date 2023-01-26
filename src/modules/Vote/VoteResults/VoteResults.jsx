import styles from "../vote.module.css"

const VoteResults = ({total, democratsPercent, republicantsPercent}) => {
    return (
        <>
            <h4 className={styles.blockTitle}>Vote results:</h4>
            <p>Total: { total }</p>
            <p>Democrats: {democratsPercent}%</p>
            <p>Republicants: {republicantsPercent}%</p>
        </>
    )
}
export default VoteResults;