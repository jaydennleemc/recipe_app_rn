import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';
import WeekRecipes from '../../components/WeekRecipes';
import RecipesList from '../../components/RecipesList';
import {Actions} from 'react-native-router-flux';

export default class FeedTab extends Component {

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView/>
        <ScrollView>
          <View style={styles.filterContainer} key={'filter'}>
            <TouchableOpacity onPress={() => {
              Actions.filter();
            }}>
              <Image source={require('../../assets/icons/ic_slider.png')} style={{width: 40, height: 40, marginHorizontal: 8}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              Actions.search();
            }}>
              <Image source={require('../../assets/icons/ic_search.png')} style={{width: 40, height: 40, marginHorizontal: 8}}/>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 40, fontWeight: '500', color: '#685f58', marginLeft: 16}}>All Recipes</Text>
            <WeekRecipes containerStyle={{height: 200, marginTop: 32}}/>
            <RecipesList
              key={'Appetizer'}
              title={'Appetizer'}
              containerStyle={{height: 'auto', marginTop: 32}}/>
            <RecipesList
              key={'Main dishes'}
              title={'Main dishes'}
              containerStyle={{height: 'auto', marginTop: 32}}/>
            <RecipesList
              key={'Soup'}
              title={'Soup'}
              containerStyle={{height: 'auto', marginTop: 32}}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
