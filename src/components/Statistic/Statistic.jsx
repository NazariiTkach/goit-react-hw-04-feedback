import PropTypes from 'prop-types';
import { StatList, StatItem } from './Statistic.styled';
import Notification from '../Notification/Notifi';

const Statistic = ({ good, neutral, bad, total, positivePercent }) => {
  return total === 0 ? (
    <Notification messege="There is no feedback"></Notification>
  ) : (
    <StatList>
      <StatItem>
        <span>Good:</span> {good}
      </StatItem>
      <StatItem>
        <span>Neutral:</span> {neutral}
      </StatItem>
      <StatItem>
        <span>Bad:</span> {bad}
      </StatItem>
      <StatItem>
        <span>Total feedback: </span>
        {total}
      </StatItem>
      <StatItem>
        <span>Positive feedback: </span>
        {positivePercent}%
      </StatItem>
    </StatList>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercent: PropTypes.number.isRequired,
};

export default Statistic;