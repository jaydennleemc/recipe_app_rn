import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView, TouchableOpacity, TextInput, Dimensions, Platform, ScrollView, Keyboard, FlatList} from 'react-native';
import NavigationBar from '../components/NavigationBar';
import {Actions} from 'react-native-router-flux';
import {TabBar, TabView} from 'react-native-tab-view';
import {getFavoriteRecipes, usersCollection} from '../firebase/Firestore';
import RecipeVerticalItem from '../components/RecipeVerticalItem';
import {getUserInfo} from '../components/Utils';

const FirstRoute = (data) => (
  <FlatList
    style={{marginHorizontal: 8, marginTop: 16}}
    data={data}
    renderItem={({item}) => <RecipeVerticalItem item={item}/>}/>
);

const SecondRoute = (data) => (
  <FlatList
    style={{marginHorizontal: 8, marginTop: 16}}
    data={data}
    renderItem={({item}) => <RecipeVerticalItem item={item}/>}/>
);

const ThreeRoute = (data) => (
  <FlatList
    style={{marginHorizontal: 8, marginTop: 16}}
    data={data}
    renderItem={({item}) => <RecipeVerticalItem item={item}/>}/>
);

export default class ProfileScreen extends Component {

  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'Favorites'},
      {key: 'second', title: 'SAVED'},
      {key: 'three', title: 'Friends'},
    ],
    username: '',
    favoritesRecipes: [],
  };


  componentDidMount() {
    getUserInfo().then(resp => {
      this.setState({username: resp.name});
    }).catch(err => {
      console.error(err);
    });
    getFavoriteRecipes().then((resp => {
      this.setState({favoritesRecipes: resp.docs});
    })).catch(err => {
      console.error(err);
    });
  }

  renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return FirstRoute(this.state.favoritesRecipes);
      case 'second':
        return SecondRoute(this.state.favoritesRecipes);
      case 'three':
        return ThreeRoute(this.state.favoritesRecipes);
      default:
        return null;
    }
  };

  renderTabBar = (props) => (
    <TabBar
      {...props}
      renderLabel={({route, focused, color}) => (
        <Text style={{color: focused ? '#e09178' : 'lightgrey', margin: 8}}>{route.title}</Text>
      )}
      indicatorStyle={{backgroundColor: '#e09178'}}
      style={{backgroundColor: 'transparent'}}
    />
  );

  render() {
    return (
      <View style={{alignItems: 'center', flex: 1}}>
        <SafeAreaView/>
        <NavigationBar
          title={'Chef information'}
          leftOnPress={() => {
            Actions.pop();
          }}/>

        <View style={{width: '100%', alignItems: 'center'}}>
          <Image
            source={require('../assets/icons/icons8-mushbooh-food-50.png')}
            style={{height: 150, width: 150, borderWidth: 2, borderRadius: 100, borderColor: '#e09178', marginTop: 8}}/>

          <TouchableOpacity
            style={{position: 'absolute', right: 16, top: -32}}
            onPress={() => {
              Actions.editProfile();
            }}>
            <Text style={{fontSize: 40, color: '#e09178'}}>...</Text>
          </TouchableOpacity>
        </View>
        <Text style={{color: '#685f58', fontWeight: 'bold', marginTop: 16, fontSize: 18}}>{this.state.username}</Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%%'}}>
          <View>
            <Text style={{color: '#e09178', fontWeight: 'bold', marginTop: 16, fontSize: 18, textAlign: 'center'}}>25</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/icons8-mushbooh-food-50.png')}
                style={{height: 24, width: 24, borderWidth: 2, borderRadius: 100, borderColor: '#e09178', marginTop: 8}}/>
              <Text style={{color: 'grey', fontSize: 14, marginTop: 8, marginLeft: 8, fontWeight: '600'}}>Followers</Text>
            </View>
          </View>

          <View>
            <Text style={{color: '#e09178', fontWeight: 'bold', marginTop: 16, fontSize: 18, textAlign: 'center'}}>25</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/icons8-mushbooh-food-50.png')}
                style={{height: 24, width: 24, borderWidth: 2, borderRadius: 100, borderColor: '#e09178', marginTop: 8}}/>
              <Text style={{color: 'grey', fontSize: 14, marginTop: 8, marginLeft: 8, fontWeight: '600'}}>Favorites</Text>
            </View>
          </View>

          <View>
            <Text style={{color: '#e09178', fontWeight: 'bold', marginTop: 16, fontSize: 18, textAlign: 'center'}}>25</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/icons8-mushbooh-food-50.png')}
                style={{height: 24, width: 24, borderWidth: 2, borderRadius: 100, borderColor: '#e09178', marginTop: 8}}/>
              <Text style={{color: 'grey', fontSize: 14, marginTop: 8, marginLeft: 8, fontWeight: '600'}}>Made dishes</Text>
            </View>
          </View>
        </View>

        <View style={{height: 1, width: '100%', backgroundColor: '#e09178', marginTop: 16, opacity: 0.5}}/>

        <TabView
          style={{width: '100%'}}
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={(index) => {
            this.setState({index});
          }}/>
      </View>
    );
  }
}
