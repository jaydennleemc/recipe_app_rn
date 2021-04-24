import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';
import NavigationBar from '../components/NavigationBar';
import {Actions} from 'react-native-router-flux';


export default class ForgetPasswordScreen extends Component {

  state = {
    email: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView/>
        <NavigationBar
          title={'Forget password'}
          leftOnPress={() => {
            Actions.pop();
          }}/>
        <Text style={styles.forgetText}>Forgot password?</Text>
        <TextInput
          style={styles.emailTextInput}
          placeholder={'Email'}
          keyboardType="email-address"
          onChangeText={this.emailTextOnChange}
          value={this.state.email}/>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Submit</Text>
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
  forgetText: {
    marginTop: 24,
    color: '#685f58',
    fontWeight: 'bold',
    fontSize: 28,
  },
  emailTextInput: {
    width: '90%',
    height: 42,
    marginTop: 42,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  buttonContainer: {
    backgroundColor: '#e09178',
    width: '90%',
    height: 50,
    marginTop: 32,
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
