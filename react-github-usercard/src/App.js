import React from 'react';
import { Component } from 'react';

import './App.css';

class App extends Component {
   constructor() {
      super();
      this.state = {
         users: [],
      };

   }

   componentDidMount() {
      // console.log('Component did mount!');

      fetch(`https://api.github.com/users/bdrummo6`)
         .then(results => results.json())
         .then(users => {
            // console.log('users: ', users);
            this.setState({ users: users });
         })
         .catch(err => {
            console.log('Error: ', err)
         });
   }


   render() {

      let userState = this.state.users;

      return (
         <div className='App'>
            <h1>Github UserCard</h1>
            <div className='usercard'>
               <h3>{userState.name}</h3>
               <div className='avatar'>
                  <img src={userState.avatar_url} alt={userState.avatar_url} key={userState.avatar_url} />
               </div>
               <div className='userData'>
                  <p><span>Username:</span> {userState.login}</p>
                  <p><span>ID:</span> {userState.id}</p>
                  <p><span>URL:</span> <a href={userState.html_url}>{userState.html_url}</a></p>
                  <p><span>Repos:</span> {userState.public_repos}</p>
                  <p><span>Followers:</span> {userState.followers}</p>
                  <p><span>Following:</span> {userState.following}</p>
               </div>
            </div>
         </div>
      )
   }
}

export default App;