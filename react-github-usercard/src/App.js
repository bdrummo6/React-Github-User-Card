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

         </div>
      )
   }
}

export default App;