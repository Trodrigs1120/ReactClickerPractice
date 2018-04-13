import React from "react";
import "./ScoreCard.css";

class ScoreCard extends React.Component {
  constructor(props) {
      super(props);
      this.state = {CurrentScore: 0,
                    HighScore:0};
      this.incrementCounter = this.updateCounter.bind(this, 1);
      this.decrementCounter = this.updateCounter.bind(this, -1);
  }
  
  render() {
      return (
          <div>
              <p>Score: {this.state.CurrentScore} High Score: {this.state.HighScore}</p>
              <input type='button' value='+' onClick={this.incrementCounter} />
              <input type='button' value='-' onClick={this.decrementCounter} />
          </div>
      );
  }
  
  updateCounter(CurrentScore) {
      this.setState({CurrentScore: this.state.CurrentScore + CurrentScore});
      // this.setState({HighScore:this.state.CurrentScore + CurrentScore})
       if (this.state.CurrentScore===this.state.HighScore){
        this.setState({HighScore:this.state.CurrentScore + CurrentScore})
       }
     
  }
}

// const ScoreCard = props => (
//   <div>

//     <div className="content">
//     <p>Score: {CurrentScore} High Score: {HighScore}</p> 
//     </div>
    
//   </div>

// );

export default ScoreCard;
