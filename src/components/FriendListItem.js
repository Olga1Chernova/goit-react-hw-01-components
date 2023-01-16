import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <>
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}