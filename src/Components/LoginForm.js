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

   onLogin = () => {
        this.setState({loading: true})
        const { email, password } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => this.alertMessage("Login", "Login sucess"))
        .catch((erro) => this.alertMessage("Login", erro.message))
   }

    onRegister = () => {
        this.setState({loading: true})
        const { email, password } = this.state;

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => this.alertMessage("Register", "Register sucess"))
        .catch((erro) => this.alertMessage("Register", erro.message))
   }


   alertMessage(title, message){
      this.setState({loading: false})
      Alert.alert(title, message, {text: "OK" })
   }


 renderButton() {
   if (this.state.loading){
     return <Spinner size="large" />
   }
   else {
     return (
        <View>
          <Button
           onPress={this.onLogin}
           title="Login"
           color="#36B2B2"
          />

           <Button
           onPress={this.onRegister}
           title="Register"
           color="#36B2B2"
          />

        </View>
      );
   }
 }

  render(){
    const { container, textStyle, Input } = styles;
    return (
      <View style = {container}>
        <Text style={textStyle}>Login/Register</Text>
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
