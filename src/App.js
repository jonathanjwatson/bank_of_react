import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Debits from './components/Debits';

import axios from 'axios';

class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: {
        userName: 'ejonelunas',
        memberSince: 1995
      },
      debits: [],
      credits: []
    }
  }

  _getDebits = () => {
    axios.get('https://still-dusk-76302.herokuapp.com/debits')
      .then((response) => {
        const debits = response.data;
        this.setState({ debits });
        console.log(this.state.debits);
      });
  };

  _getCredits = () => {
    axios.get('https://still-dusk-76302.herokuapp.com/credits')
      .then((response) => {
        const credits = response.data;
        this.setState({ credits });
        console.log(this.state.credits);
      });
  };

  _calculateAccountBalance = () => {
    const totalCredits = this.state.credits.reduce((totalCredits, credit) => {
      return totalCredits + credit.amount;
    }, 0)

    const totalDebits = this.state.debits.reduce((totalDebits, debit) => {
      return totalDebits + debit.amount;
    }, 0)

    return totalCredits - totalDebits;
  }

  componentWillMount() {
    this._getDebits();
    this._getCredits();
  }

  render() {

    const accountBalance = this._calculateAccountBalance();

    const HomeComponent = () => (<Home accountBalance={accountBalance} />);
    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince} />
    )
    const DebitsComponent = () => (
      <Debits debits={this.state.debits}/>
    );

    return (
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/debits" render={DebitsComponent} />
        </div>
      </Router>
    );
  }
}

export default App;