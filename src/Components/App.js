import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import Header from '../Containers/Header';
import LoginForm from './LoginForm';
import firebase from 'firebase';
import Spinner from '../Containers/Spinner';

 class App extends Component {
  state = {
    logged: null
  }

   componentWillMount() {
       firebase.initializeApp({
          apiKey: "AIzaSyDQy1rQBPZqhqlWwktPFr9bbTv7UUuN9ek",
          authDomain: "auth-28aec.firebaseapp.com",
          databaseURL: "https://auth-28aec.firebaseio.com",
          projectId: "auth-28aec",
          storageBucket: "auth-28aec.appspot.com",
          messagingSenderId: "735890312683"

       });

        firebase.auth().onAuthStateChanged((user) => {
          if (user !== null){
            console.log(user.name)
            console.log(user.email)
            console.log(user.photoUrl)
            console.log(user.uid)}
        if(user){
          this.setState({logged: true})
        }
        else {
          this.setState({logged: false})
        }
     })
   };


   AppPage() {
    switch(this.state.logged) {
      case true:
      return (
        <View>
          <Header NavText='Home'/>
          <Button onPress={() => firebase.auth().signOut()} title="Logout" color="#36B2B2"/>
        </View>
        );

      case false:
      return (
        <View>
          <Header NavText='Auth'/>
          <LoginForm />
        </View>
        );

      case null:
        return (
        <View>
          <Header NavText='Loading...'/>
          <Spinner size="large" />
        </View>
        );
    }
}


  render() {
    return (
      <View style={styles.container}>

        {this.AppPage()}
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
