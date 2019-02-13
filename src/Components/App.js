import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from '../Containers/Header';
import LoginForm from './LoginForm';
import firebase from 'firebase';

 class App extends Component {
   componentWillMount() {
     firebase.initializeApp({
         apiKey: 'AIzaSyDQy1rQBPZqhqlWwktPFr9bbTv7UUuN9ek',
         authDomain: 'auth-28aec.firebaseapp.com',
         databaseURL: 'https://auth-28aec.firebaseio.com',
         projectId: 'auth-28aec',
         storageBucket: 'auth-28aec.appspot.com',
         messagingSenderId: '735890312683',
     });
   };

  render() {
    return (
      <View style={styles.container}>
        <Header NavText='Auth'/>
        <LoginForm />
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#F5FCFF',
    height: 900,
  }
}


export default App;
