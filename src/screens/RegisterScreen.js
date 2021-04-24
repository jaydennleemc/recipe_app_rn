import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import NavigationBar from '../components/NavigationBar';
import {Actions} from 'react-native-router-flux';

export default class RegisterScreen extends Component {

  state = {
    email: '',
    password: '',
    confirmPassword: '',
    acceptedCondition: false,
  };

  conditionToggle = (value) => {
    this.setState({acceptedCondition: value});
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView/>
        <NavigationBar
          title={'Register'}
          leftOnPress={() => {
            Actions.pop();
          }}/>
        <TextInput
          style={styles.emailTextInput}
          placeholder={'Email'}
          keyboardType="email-address"
          onChangeText={this.emailTextOnChange}
          value={this.state.email}/>

        <View style={{width: '90%'}}>
          <Text style={styles.passwordText}>Password</Text>
          <TextInput
            style={styles.passwordTextInput}
            placeholder={'Password'}
            secureTextEntry={true}
            onChangeText={this.emailTextOnChange}
            value={this.state.email}/>
        </View>

        <View style={{width: '90%'}}>
          <Text style={styles.passwordText}>Confirm Password</Text>
          <TextInput
            style={styles.passwordTextInput}
            placeholder={'Confirm Password'}
            returnKeyType={'done'}
            secureTextEntry={true}
            onChangeText={this.emailTextOnChange}
            value={this.state.email}/>
        </View>

        <View style={styles.conditionContainer}>
          <CheckBox
            disabled={false}
            style={{width: 20, height: 20}}
            onCheckColor={'white'}
            onFillColor={'#e09178'}
            onTintColor={'#e09178'}
            value={this.state.acceptedCondition}
            onValueChange={this.conditionToggle}/>
          <Text style={styles.conditionText}>{'Accept terms & conditions'}</Text>
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  emailTextInput: {
    width: '90%',
    height: 42,
    marginTop: 42,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  passwordText: {
    marginTop: 32,
    color: '#685f58',
    fontWeight: 'bold',
    fontSize: 16,
  },
  passwordTextInput: {
    width: '100%',
    height: 42,
    marginTop: 8,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  conditionContainer: {
    flexDirection: 'row',
    width: '100%',
    marginLeft: 36,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 48,
  },
  conditionText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#685f58',
  },
  buttonContainer: {
    backgroundColor: '#e09178',
    width: '90%',
    height: 50,
    marginTop: 24,
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
});
