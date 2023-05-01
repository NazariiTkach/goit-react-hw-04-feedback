import { useState } from 'react';
import Section from '../Section/Section';
import FeedbackBtn from '../FeedbeckButtons/FeedbackButtons'
import Statistic from '../Statistic/Statistic';
import AppContainer from './App.styled';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGetFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const allFeed = good + neutral + bad;
    return Math.round((good / allFeed) * 100);
  };

  return (
    <AppContainer>
      <Section title="Please leave feedback">
        <FeedbackBtn
          options={['good', 'neutral', 'bad']}
          onGetFeedback={onGetFeedback}
        ></FeedbackBtn>
      </Section>
      <Section title="Statistics">
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercent={countPositiveFeedbackPercentage()}
        ></Statistic>
      </Section>
    </AppContainer>
  );
};


export default App;
