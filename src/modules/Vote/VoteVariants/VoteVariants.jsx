import styles from "../vote.module.css"

const VoteVariants = ({leaveVote}) => {
    return (
        <>
            <h4 className={styles.blockTitle}>Vote variants</h4>
            <button onClick={() => leaveVote("democrats")}>Democrats</button>
            <button onClick={() => leaveVote("republicants")}>Republicants</button>   
        </>
    )
}
export default VoteVariants;