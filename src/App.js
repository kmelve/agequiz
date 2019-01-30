// dependencies
import React, { Component } from 'react';

// local files
// import './App.css';
import questions from './data/questions.js';

// components
import Swiper from './components/swiper.js';
import Question from './components/question.js';
import Image from './components/image.js';

class App extends Component {

  // constructor (props) {
  //   super();
  // }

  componentWillMount () {
    this.setState({
      question: questions[this.getRandom()]
    });
  }

  getRandom () {
    const randomNumber = Math.floor(Math.random()*questions.length);
    return randomNumber;
  }

  swiperClick () {
    console.log('click!');
  }

  render() {
    return (
      <div className="App">
        <Question text={this.state.question.text} />
        <Image path={this.state.question.image}/>
        <Swiper onClick={() => {this.swiperClick()}}/>
      </div>
    );
  }
}

export default App;
