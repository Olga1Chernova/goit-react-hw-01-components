import { Component } from "react";

import styles from "./vote.module.scss";

import VoteResults from "./VoteResults/VoteResults";
import VoteVariants from "./VoteVariants/VoteVariants";
import VoteBlock from "./VoteBlock/VoteBlock";

class Vote extends Component {
    state = {
        democrats: 0,
        republicants: 0,
    }

    leaveVote = (name) => {
        this.setState(prevState => {
            return {[name]: prevState[name] + 1}
        })
    }

    calcTotal() {
        const { democrats, republicants } = this.state;
        const total = democrats + republicants;
        return total;
    }

    calcPercentage(propName) {
        const total = this.calcTotal();
        if (!total) {
            return 0;
        }
        const value = this.state[propName];
        const result = ((value / total)*100).toFixed(2);
        return Number(result);
    }
    /*
    increaseDemocratsVote = () => {
        this.setState(prevState => {
            return {democrats: prevState.democrats + 1}
        })
    }
    
    increaseRepublicantsVote = () => {
        this.setState(prevState => {
            return {republicants: prevState.republicants + 1}
        })
    }
    */

    render() {
        //this.props
        const total = this.calcTotal();
        const democratsPercent = this.calcPercentage("democrats");
        const republicantsPercent = this.calcPercentage("republicants");
        return (
            <div>
                <h3 className={styles.title}>Leave your vote</h3>
                <div className={styles.wrapper}>
                    <VoteBlock title="Vote variants">
                        <VoteVariants leaveVote={this.leaveVote} />
                    </VoteBlock>
                    <VoteBlock title="Vote results:">
                        <VoteResults total={total}
                        democratsPercent={democratsPercent}
                        republicantsPercent={republicantsPercent} />
                    </VoteBlock>
                </div>
            </div>
        )
    }
}

export default Vote;