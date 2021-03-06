import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import WeekRecipes from '../../components/WeekRecipes';
import RecipesHorizontalList from '../../components/RecipesHorizontalList';
import {Actions} from 'react-native-router-flux';
import {getWeeklyRecipes, recipeCollections} from '../../firebase/Firestore';

export default class FeedTab extends Component {

  state = {
    loadingWeeklyRecipes: true,
    weeklyRecipes: [],
    loadingAppetizerRecipes: true,
    appetizerRecipes: [],
    loadingMainRecipes: true,
    mainRecipes: [],
    loadingSoupRecipes: true,
    soupRecipes: [],
  };

  componentDidMount() {
    this.getWeeklyRecipes();
    this.getAppetizerRecipes();
    this.getMainRecipes();
    this.getSoupRecipes();
  }


  getWeeklyRecipes = () => {
    getWeeklyRecipes().then(resp => {
      this.setState({weeklyRecipes: resp, loadingWeeklyRecipes: false});
    }).catch(err => {
      console.error(err);
    });
  };

  getAppetizerRecipes = () => {
    recipeCollections.where('type', '==', 'appetizer').limit(5).get().then(resp => {
      this.setState({appetizerRecipes: resp.docs, loadingAppetizerRecipes: false});
    }).catch(err => {
      console.error(err);
    });
  };

  getMainRecipes = () => {
    recipeCollections.where('type', '==', 'main').limit(5).get().then(resp => {
      this.setState({mainRecipes: resp.docs, loadingMainRecipes: false});
    }).catch(err => {
      console.error(err);
    });
  };

  getSoupRecipes = () => {
    recipeCollections.where('type', '==', 'soup').limit(5).get().then(resp => {
      this.setState({soupRecipes: resp.docs, loadingSoupRecipes: false});
    }).catch(err => {
      console.error(err);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView/>
        <ScrollView style={{marginBottom: 16}}>
          <View style={styles.filterContainer} key={'filter'}>
            <TouchableOpacity onPress={() => {
              Actions.filter();
            }}>
              <FastImage source={require('../../assets/icons/ic_slider.png')} style={{width: 32, height: 32, marginHorizontal: 8}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              Actions.search();
            }}>
              <FastImage source={require('../../assets/icons/ic_search.png')} style={{width: 32, height: 32, marginHorizontal: 8}}/>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 40, fontWeight: '500', color: '#685f58', marginLeft: 16}}>All Recipes</Text>
            <WeekRecipes
              isLoading={this.state.loadingWeeklyRecipes}
              data={this.state.weeklyRecipes}
              containerStyle={{height: 200, marginTop: 32}}/>
            <RecipesHorizontalList
              isLoading={this.state.loadingAppetizerRecipes}
              key={'Appetizer'}
              type={'appetizer'}
              title={'Appetizer'}
              data={this.state.appetizerRecipes}
              containerStyle={{height: 'auto', marginTop: 32}}/>
            <RecipesHorizontalList
              isLoading={this.state.loadingMainRecipes}
              key={'Main dishes'}
              type={'main'}
              title={'Main dishes'}
              data={this.state.mainRecipes}
              containerStyle={{height: 'auto', marginTop: 32}}/>
            <RecipesHorizontalList
              isLoading={this.state.loadingSoupRecipes}
              key={'Soup'}
              type={'soup'}
              title={'Soup'}
              data={this.state.soupRecipes}
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
