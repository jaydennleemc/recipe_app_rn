import React, {Component, PureComponent} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import FastImage from 'react-native-fast-image';

export default class NavigationBar extends PureComponent {

  renderSearchBar = () => {
    return (
      <TextInput
        placeholder={'Search here'}
        returnKeyType={'done'}
        onSubmitEditing={this.props.onSearch}
        autoCapitalize={'none'}
        style={{
          paddingHorizontal: 5,
          flex: 1,
          color: 'grey',
          backgroundColor: 'white',
          borderRadius: 5,
          marginLeft: 16,
          height: 32,
        }}/>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.leftOnPress}>
          <FastImage style={styles.leftImage} source={require('../assets/icons/ic_back_arrow.png')}/>
        </TouchableOpacity>
        {this.props.searchMode ? this.renderSearchBar() : <Text style={styles.title}>{this.props.title}</Text>}
        <TouchableOpacity onPress={this.props.rightOnPress}>
          <FastImage style={styles.rightImage} source={this.props.rightImage}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftImage: {
    width: 30,
    height: 30,
    marginLeft: 16,
  },
  title: {
    flex: 1,
    marginLeft: 32,
    color: '#615750',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightImage: {
    width: 30,
    height: 30,
    marginRight: 16,
  },
});
