import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import {getFavoriteRecipes} from '../../firebase/Firestore';
import RecipeVerticalItem from '../../components/RecipeVerticalItem';

export default class FavoriteTab extends Component {

  state = {
    favoritesRecipes: [],
  };

  componentDidMount() {
    getFavoriteRecipes().then((resp => {
      this.setState({favoritesRecipes: resp.docs});
    })).catch(err => {
      console.error(err);
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView/>
        <FlatList
          style={{marginHorizontal: 8, marginTop: 16}}
          data={this.state.favoritesRecipes}
          renderItem={({item}) => <RecipeVerticalItem item={item}/>}/>
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
