import * as React from 'react';
import './App.css';

import Title from './components/quiz/title'
import Question from './components/quiz/questions'
import Answers from './components/quiz/answers'

class App extends React.Component {
  render() {
    return (
      <div>
        <Title>Supernatural Quiz</Title>
        <Question>How many seasons of Supernatural has been produced?</Question>
        <Answers questions={[]} />
      </div>
    );
  }
}

export default App;
