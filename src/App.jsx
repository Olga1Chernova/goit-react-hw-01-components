import Profile from './components/Profile/Profile';
import StatisticsList from './components/StatisticsList/StatisticsList';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/user'
import data from './data/data';
import friends from "./data/friends";
import transactions from './data/transactions';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
          />
          <StatisticsList
            stats = {data}
          />
          <FriendList
              friends={friends}
          />
          <TransactionHistory
              items={transactions}
          />
    </div>
  );
};
