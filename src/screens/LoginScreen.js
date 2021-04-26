import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';
import Toast from 'react-native-toast-message';
import {authUser} from '../firebase/Firestore';


export default class LoginScreen extends Component {

  state = {
    email: '',
    password: '',
  };

  emailTextOnChange = (text) => {
    this.setState({email: text});
  };

  passwordTextOnChange = (text) => {
    this.setState({password: text});
  };

  loginOnPress = async () => {
    let user = await authUser(this.state.email, this.state.password);
    if (user) {
      await this.saveUserInfo(user);
      Actions.home();
    } else {
      this.toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Email or password invalid',
      });
    }
  };

  signUpOnPress = () => {
    Actions.push('register');
  };

  forgetPasswordOnPress = () => {
    Actions.push('forgetPassword');
  };

  saveUserInfo = async (user) => {
    try {
      await AsyncStorage.setItem('userInfo', JSON.stringify(user));
    } catch (e) {
      console.error(e);
    }
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
          autoCapitalize="none"
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
          onPress={this.loginOnPress}>
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
        <Toast ref={(ref) => this.toast = ref}/>
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
