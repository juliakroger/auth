import React, {Component} from 'react';
import firebase from 'firebase';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import Spinner from '../Containers/Spinner';
class LoginForm extends Component {
  state = {
      email: '',
      password: '',
      loading: false
  }

  onEmailChange = (text) => {
    this.setState({email: text})
  }

  onPasswordChange = (text) => {
    this.setState({password: text})
  }

 onPress = () => {
   this.setState({loading: true})
   const { email, password } = this.state;
   firebase.auth().signInWithEmailAndPassword(email, password)
   .then(this.onSucess)
   .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(() => {
              this.setState({loading: false})
              Alert.alert("Login failed","Authentication Failed",{ text: "OK" });
        });
   });
 }

 onSucess(){
   this.setState({
     email: '',
     password: '',
     loading: false
   })
   Alert.alert("Login Sucess","Authentication Sucess",{ text: "OK" });
 }

 renderButton() {
   if (this.state.loading){
     return <Spinner />
   }
   else {
     return <Button
       onPress={this.onPress}
       title="Login"
       color="#36B2B2"
     />
   }
 }

  render(){
    const { container, textStyle, Input } = styles;
    return (
      <View style = {container}>
        <Text style = {textStyle}>Login</Text>
        <TextInput
            style = {Input}
            autoCapitalize = 'none'
            placeholder = 'user@gmail.com'
            onChangeText={this.onEmailChange}
        />
        <TextInput
            style = {Input}
            secureTextEntry={true}
            placeholder='password'
            onChangeText={this.onPasswordChange}
         />
         {this.renderButton()}

      </View>

    );
  }
}


const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 20,
  },
  Input: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#B9BBBB',
    width: 350,
    marginBottom: 10,
  }
}


export default LoginForm;
