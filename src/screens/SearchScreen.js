import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import NavigationBar from '../components/NavigationBar';
import {Actions} from 'react-native-router-flux';

export default class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView/>
        <NavigationBar
          title={'Search'}
          leftOnPress={() => {
            Actions.pop();
          }}/>
        <Text> TextInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

