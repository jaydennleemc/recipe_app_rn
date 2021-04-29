import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import {getFavoriteRecipes} from '../../firebase/Firestore';
import RecipeVerticalItem from '../../components/RecipeVerticalItem';
import PlaceLoader from '../../components/PlaceLoader';
import uuid from 'react-native-uuid';

export default class FavoriteTab extends Component {

  state = {
    loadingFavoritesRecipes: true,
    favoritesRecipes: [],
  };

  componentDidMount() {
    getFavoriteRecipes().then((resp => {
      this.setState({favoritesRecipes: resp.docs, loadingFavoritesRecipes: false});
    })).catch(err => {
      console.error(err);
    });
  }

  showPlaceLoader() {
    const loaders = [];
    for (let i = 0; i < 10; i++) {
      loaders.push(<PlaceLoader key={uuid.v4()}/>);
    }
    return loaders;
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView/>
        {this.state.loadingFavoritesRecipes && this.showPlaceLoader()}
        {!this.state.loadingFavoritesRecipes && <FlatList
          style={{marginHorizontal: 8, marginTop: 16}}
          data={this.state.favoritesRecipes}
          renderItem={({item}) => <RecipeVerticalItem item={item}/>}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    width: '95%',
    height: 'auto',
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 1,
  },
});
