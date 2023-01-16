import PropTypes from 'prop-types';
import Statistics from "./Statistics";
/*
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
*/
export default function StatisticsList({title, stats}) {
    return (
        <section class="statistics">
        {title && <h2 class="title">{title}</h2>}
            <ul class="stat-list">
                {
                    stats.map(stat => (
                        <li class="item" key={stat.id}>
                            <Statistics 
                                label={stat.label}
                                percentage={stat.percentage}
                            />
                        </li>
                    ))
                }
        </ul>
        </section>
        )
}

StatisticsList.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(Object),
}