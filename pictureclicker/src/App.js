import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import ScoreCard from "./components/Scorecard"
// change instances of friend to god 


// increaseScore = CurrentScore => {
//   CurrentScore++
// }

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    seen: false,
  };


  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };
  seenFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
    console.log (this.state.seen)
  };

  
  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Diety Clicker</Title>
        <ScoreCard />
        <p>The gods demand tribute, you must pay tribute to each one by clicking on them. However the gods are a fickle bunch and you will lose if you don't give each one their due. Click each god without repeating in order to win.</p>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
