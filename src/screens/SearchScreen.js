import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity} from 'react-native';
import NavigationBar from '../components/NavigationBar';
import {Actions} from 'react-native-router-flux';
import RecipeVerticalItem from '../components/RecipeVerticalItem';
import {recipeCollections} from '../firebase/Firestore';

export default class SearchScreen extends Component {

  state = {
    searchKey: '',
    recipes: [],
  };

  searchRecipes = (searchKey) => {
    console.log(searchKey);
    recipeCollections.orderBy('name').get().then(resp => {
      let filtered = resp.docs.filter(e => {
        if (e.data().name.includes(searchKey)) {
          return e;
        }
      });
      this.setState({recipes: filtered});
    }).catch(err => {
      console.error(err);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView/>
        <NavigationBar
          searchMode
          leftOnPress={() => {
            Actions.pop();
          }}
          onSearch={({nativeEvent}) => {
            this.setState({searchKey: nativeEvent.text});
            this.searchRecipes(nativeEvent.text);
          }}/>
        <FlatList
          style={{marginHorizontal: 8, marginTop: 16}}
          data={this.state.recipes}
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

