import PropTypes from 'prop-types';
import Statistics from "./Statistics/Statistics";
import css from './StatisticsList.module.css';
import getRandomHexColor from 'utils/getRandomColor';

export default function StatisticsList({title, stats}) {
    return (
        <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css["stat-list"]}>
                {
                    stats.map(stat => (
                        <li className={css.item} key={stat.id} style={{
                            backgroundColor: getRandomHexColor(),
                        }}>
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