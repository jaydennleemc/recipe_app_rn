import React, {Component, PureComponent} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, SafeAreaView, FlatList, Image} from 'react-native';
import NavigationBar from '../components/NavigationBar';
import {Actions} from 'react-native-router-flux';
import RecipeVerticalItem from '../components/RecipeVerticalItem';

export default class SeeAllRecipes extends PureComponent {

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView/>
        <NavigationBar
          title={this.props.title}
          leftOnPress={() => {
            Actions.pop();
          }}/>
        <FlatList
          style={{marginHorizontal: 8}}
          data={this.props.data}
          renderItem={({item}) => <RecipeVerticalItem item={item}/>}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
