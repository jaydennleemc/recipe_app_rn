import React, {Component, PureComponent} from 'react';
import {FlatList, Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import {Rating} from 'react-native-ratings';
import DottedLine from './DottedLine';
import uuid from 'react-native-uuid';
import {Actions} from 'react-native-router-flux';
import {timeConvert} from './Utils';
import {recipeCollections} from '../firebase/Firestore';


export default class RecipesHorizontalList extends PureComponent {

  state = {
    allRecipes: [],
  };

  componentDidMount() {
    recipeCollections.where('type', '==', this.props.type).get().then(resp => {
      this.setState({allRecipes: resp.docs});
    }).catch(err => {
      console.error(err);
    });
  }

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.cardContainer} key={uuid.v4()}
        onPress={() => {
          Actions.push('recipeDetails', {data: item.data()});
        }}>
        <View style={{height: 150, borderRadius: 10}}>
          <Image source={{uri: item.data().thumbnail}} style={{width: '100%', height: 150, borderRadius: 10}}/>
          <TouchableOpacity style={{width: 40, height: 40, backgroundColor: 'red', position: 'absolute', right: 8, top: 8, borderRadius: 25, alignSelf: 'center', justifyContent: 'center'}}>
            <Image source={require('../assets/icons/ic_favorite.png')} style={{width: 30, height: 30, alignSelf: 'center'}}/>
          </TouchableOpacity>
        </View>
        <View style={{height: 180, marginLeft: 16, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
          <TouchableOpacity style={{width: 40, height: 40, backgroundColor: '#e09178', alignSelf: 'flex-end', borderRadius: 50, marginTop: -20, marginRight: 8, justifyContent: 'center'}}>
            <Image source={require('../assets/icons/ic_favorite.png')} style={{width: 30, height: 30, alignSelf: 'center'}}/>
          </TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#685f58', marginTop: 8, alignSelf: 'center'}}>{item.data().name}</Text>
          <View style={{flexDirection: 'row', marginTop: 16, marginLeft: 8}}>
            <Rating
              type="custom"
              ratingCount={5}
              startingValue={item.data().startingValue}
              ratingColor={'#e09178'}
              imageSize={15}
              readonly
              showReadOnlyText/>
            <Text style={{marginLeft: 16, fontWeight: 'bold', color: 'grey'}}>+{item.data().reviews}</Text>
          </View>
          <DottedLine margin={30} style={{alignSelf: 'center'}}/>
          <View style={{flexDirection: 'row', marginLeft: 16}}>
            <Text style={{color: 'grey', fontWeight: '700', fontSize: 16}}>recipe by</Text>
            <Text style={{marginLeft: 8, color: '#685f58', fontWeight: 'bold', fontSize: 16}}>{item.data().author}</Text>
          </View>
          <View style={{marginTop: 16, flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../assets/icons/ic_timer.png')} style={{width: 20, height: 20}}/>
              <Text style={{alignSelf: 'center', marginLeft: 8, color: '#685f58', fontWeight: '500'}}>{timeConvert(item.data().totalMins)}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../assets/icons/ic_kitchen.png')} style={{width: 20, height: 20}}/>
              <Text style={{alignSelf: 'center', marginLeft: 8, color: '#685f58', fontWeight: '500'}}>{item.data().servings} servings</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={this.props.containerStyle}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: 1, backgroundColor: '#e09178', marginLeft: 16, height: 30}}/>
          <Text style={{flex: 1, marginLeft: 16, fontSize: 20, fontWeight: 'bold', color: '#685f58'}}>{this.props.title}</Text>
          <TouchableOpacity onPress={() => {
            Actions.push('allRecipes', {title: `All ${this.props.type} recipes`, data: this.state.allRecipes});
          }}>
            <Text style={{color: '#e09178', fontWeight: 'bold', marginRight: 24, fontSize: 16}}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{marginTop: 32, marginLeft: 16, overflow: 'hidden'}}
          horizontal
          data={this.props.data}
          ItemSeparatorComponent={() => <View style={{width: 16, backgroundColor: 'transparent', opacity: 0.1}}/>}
          renderItem={this.renderItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 250,
    height: 'auto',
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
