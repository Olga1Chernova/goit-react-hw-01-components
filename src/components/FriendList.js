import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';


export default function FriendList({friends}){
    return (
        <ul class="friend-list">
            {
                friends.map(friend => (
                        <li class="item" key={friend.id}>
                            <FriendListItem 
                                avatar={friend.avatar}
                                name={friend.name}
                                isOnline={friend.isOnline}
                            />
                        </li>
                    ))
            }
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(Object),
}