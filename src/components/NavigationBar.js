import React, {Component, PureComponent} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class NavigationBar extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.leftOnPress}>
          <Image style={styles.leftImage} source={require('../assets/icons/ic_back_arrow.png')}/>
        </TouchableOpacity>
        <Text style={styles.title}>{this.props.title}</Text>
        <TouchableOpacity onPress={this.props.rightOnPress}>
          <Image style={styles.rightImage} source={this.props.rightImage}/>
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
    width: 40,
    height: 40,
    marginRight: 16,
  },
});
