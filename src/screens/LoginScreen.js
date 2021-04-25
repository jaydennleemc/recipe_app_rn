import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';


export default class LoginScreen extends Component {

  state = {
    email: '',
    password: '',
  };

  emailTextOnChange = (text) => {
    console.log(text);
    this.setState({email: text});
  };

  passwordTextOnChange = (text) => {
    this.setState({password: text});
  };

  signUpOnPress = () => {
    Actions.push('register');
  };

  forgetPasswordOnPress = () => {
    Actions.push('forgetPassword');
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView/>
        <Text style={styles.bigText}>{' Wellcome to \n CookWithMe!'}</Text>
        <Text style={styles.smallText}>Sign in to continue </Text>
        <TextInput
          style={styles.emailTextInput}
          placeholder={'Email'}
          keyboardType="email-address"
          onChangeText={this.emailTextOnChange}
          value={this.state.email}/>
        <TextInput
          style={styles.passwordTextInput}
          placeholder={'Password'}
          onChangeText={this.passwordTextOnChange}
          returnKeyType={'done'}
          secureTextEntry={true}
          value={this.state.password}/>
        <TouchableOpacity
          containerStyle={styles.buttonContainer}
          onPress={() => {
            Actions.push('home');
          }}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.bottomViewContainer}>
          <TouchableOpacity onPress={this.signUpOnPress}>
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.forgetPasswordOnPress}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  bigText: {
    marginTop: 100,
    fontWeight: '800',
    fontSize: 32,
    color: '#6a5a50',
  },
  smallText: {
    marginTop: 16,
    fontWeight: '600',
    color: '#7d756f',
    fontSize: 18,
  },
  emailTextInput: {
    width: '90%',
    height: 42,
    marginTop: 42,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  passwordTextInput: {
    width: '90%',
    height: 42,
    marginTop: 24,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  buttonContainer: {
    backgroundColor: '#e09178',
    width: '80%',
    height: 50,
    marginTop: 16,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  bottomViewContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  signUpText: {
    color: '#685f58',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-end',
  },
  forgotText: {
    color: '#e09178',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-end',
  },
});
