import Profile from './modules/Profile/Profile';
import StatisticsList from './modules/StatisticsList/StatisticsList';
import FriendList from './modules/FriendList/FriendList';
import TransactionHistory from './modules/TransactionHistory/TransactionHistory';
import MainMenu from './modules/MainMenu/MainMenu';
import Vote from './modules/Vote/Vote';
import MyBook from './modules/MyBooks/MyBooks';

import ToggleButton from 'shared/components/ToggleButton/ToggleButton';

import user from './data/user'
import data from './data/data';
import friends from "./data/friends";
import transactions from './data/transactions';
import menuItems from './data/menuItems';

import './shared/styles/styles.scss';

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
      <MainMenu
        items={menuItems} />
      <ToggleButton text="Subscribe" type="button" />
      <Vote />
      <MyBook />
    </div>
  );
};
