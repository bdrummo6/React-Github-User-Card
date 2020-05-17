import React, { Component } from 'react';

import './App.css';
import styled from 'styled-components';

import UserCard from './components/UserCard';
import Followers from './components/Followers';

class App extends Component {
   constructor() {
      super();
      this.state = {
         users: [],
         followers: []
      };
   }

   componentDidMount() {
      console.log('Component did mount!');

      fetch(`https://api.github.com/users/bdrummo6`)
         .then(results => results.json())
         .then(users => {
            console.log('users: ', users);
            this.setState({ users: users });
         })
         .catch(err => {
            console.log('Error: ', err)
         });

      fetch(`https://api.github.com/users/bdrummo6/followers`)
         .then(results => results.json())
         .then(follows => {
            console.log('followers: ', follows);
            this.setState({ followers: follows });
         })
         .catch(err => {
            console.log('Errors: ', err)
         });
   }

   render() {
      const App = styled.div`
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         background: lightblue;
         color: navy;
      `;
       
      document.title = 'React Github Usercard';
      return (
         <App>
            <h1>Github UserCard</h1>
            <UserCard user={this.state.users}/>
            <Followers followers={this.state.followers} />
         </App>
      )
   }
}

export default App;
