import { Component } from "react";
import PropTypes from "prop-types";

import styles from "./ToggleButton.module.scss";

class ToggleButton extends Component{
    static defaultProps = {
        type: "submit",
    }

    state = {
        active: false,
    }
    
    handleClick = () => {
        //console.log(this);
        this.setState(({active}) => {
            return {active: !active}
        })
    }
    render() {
        const { text, type } = this.props;
        const { active } = this.state;
        return (
            <button onClick={ this.handleClick} type={type} className={active ? `${styles.btn} ${styles.active}`: styles.btn}>{text}</button>
        )
    }
}

export default ToggleButton;

ToggleButton.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["submit", "button", "reset"])
}