import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView, TouchableOpacity, TextInput, Dimensions, Platform, ScrollView, Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import NavigationBar from '../components/NavigationBar';
import {Actions} from 'react-native-router-flux';

export default class EditProfileScreen extends Component {

  keyboardOffSet = 0;

  state = {
    name: '',
    country: '',
    quotes: '',
  };

  componentDidMount() {
    Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount() {
    Keyboard.removeListener('keyboardDidShow', this._keyboardDidShow);
    Keyboard.removeListener('keyboardDidHide', this._keyboardDidHide);
  }

  _keyboardDidShow = () => {
    this.keyboardOffSet = 180;
  };

  _keyboardDidHide = () => {
    this.keyboardOffSet = 0;
  };

  onNameChange = (text) => {
    this.setState({name: text});
  };

  onCountryChange = (text) => {
    this.setState({country: text});
  };

  onQuotesChanges = (text) => {
    this.setState({quotes: text});
  };

  render() {
    return (
      <KeyboardAwareScrollView
        style={{flex: 1}}
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={styles.container}
        scrollEnabled={false}>
        <View style={{alignItems: 'center'}}>
          <SafeAreaView/>
          <NavigationBar
            title={'Edit Profile'}
            leftOnPress={() => {
              Actions.pop();
            }}/>
          <Image
            source={require('../assets/icons/icons8-mushbooh-food-50.png')}
            style={{height: 200, width: 200, borderWidth: 1, borderRadius: 100, borderColor: '#e09178'}}/>
          <TouchableOpacity
            style={[styles.shadow, {flexDirection: 'row', alignItems: 'center', marginTop: 16, backgroundColor: 'white', padding: 8, borderRadius: 10}]}>
            <Image source={require('../assets/icons/ic_timer.png')} style={{width: 20, height: 20, marginRight: 16}}/>
            <Text style={{color: 'grey', fontWeight: 'bold'}}>Add profile photo</Text>
          </TouchableOpacity>
          <Text style={{alignSelf: 'flex-start', marginLeft: 16, marginTop: 16, fontSize: 20, fontWeight: 'bold', color: '#685f58'}}>Name</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={'Your Name'}
            onChangeText={this.onNameChange}
            value={this.state.name}/>
          <TextInput
            style={styles.inputStyle}
            placeholder={'Your Country'}
            onChangeText={this.onCountryChange}
            value={this.state.country}/>
          <TextInput
            style={styles.inputStyle}
            placeholder={'Your Quotes...'}
            onChangeText={this.onQuotesChanges}
            value={this.state.quotes}/>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {

            }}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 6,
  },
  inputStyle: {
    width: Dimensions.get('window').width - 32,
    height: 42,
    marginTop: 32,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  buttonContainer: {
    backgroundColor: '#e09178',
    width: Dimensions.get('window').width - 64,
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
