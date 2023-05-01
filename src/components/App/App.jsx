import React, { Component } from 'react';
import Section from '../Section/Section';
import FeedbackBtn from '../FeedbeckButtons/FeedbackButtons'
import Statistic from '../Statistic/Statistic';
import AppContainer from './App.styled';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGetFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const allFeed = good + neutral + bad;
    return Math.round((good / allFeed) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <AppContainer>
        <Section title="Please leave feedback">
          <FeedbackBtn
            options={['good', 'neutral', 'bad']}
            onGetFeedback={this.onGetFeedback}
          ></FeedbackBtn>
        </Section>
        <Section title="Statistics">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercent={this.countPositiveFeedbackPercentage()}
          ></Statistic>
        </Section>
      </AppContainer>
    );
  }
}

export default App;
