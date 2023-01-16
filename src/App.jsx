import Profile from './components/Profile';
import StatisticsList from 'components/StatisticsList';
import user from './data/user'
import data from './data/data';

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
    </div>
  );
};
