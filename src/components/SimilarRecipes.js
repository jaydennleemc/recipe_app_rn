import React, {Component, PureComponent} from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Rating} from 'react-native-ratings';
import DottedLine from './DottedLine';
import uuid from 'react-native-uuid';
import {timeConvert} from './Utils';
import RecipeVerticalItem from './RecipeVerticalItem';

export default class SimilarRecipes extends PureComponent {

  renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.cardContainer} key={uuid.v4()}>
        <View style={{width: 110, backgroundColor: 'lightgrey', borderRadius: 10}}>
          <FastImage source={{uri: item.data().thumbnail}} style={{width: 110, height: 160, borderRadius: 10}}/>
        </View>
        <View style={{paddingVertical: 8, marginLeft: 16, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#685f58', marginTop: 8}}>{item.data().name}</Text>
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
          <DottedLine margin={-8} style={{alignSelf: 'center'}}/>
          <View style={{flexDirection: 'row', marginLeft: 16}}>
            <Text style={{color: 'grey', fontWeight: '700', fontSize: 16}}>Recipe by</Text>
            <Text style={{marginLeft: 8, color: '#685f58', fontWeight: 'bold', fontSize: 16}}>{item.data().author}</Text>
          </View>
          <View style={{marginTop: 16, flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'row'}}>
              <FastImage source={require('../assets/icons/ic_timer.png')} style={{width: 20, height: 20}}/>
              <Text style={{alignSelf: 'center', marginLeft: 8, color: '#685f58', fontWeight: '500'}}>{timeConvert(item.data().totalMins)}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <FastImage source={require('../assets/icons/ic_kitchen.png')} style={{width: 20, height: 20}}/>
              <Text style={{alignSelf: 'center', marginLeft: 8, color: '#685f58', fontWeight: '500'}}>{item.data().servings} servings</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.data.map(e => <RecipeVerticalItem key={uuid.v4()} item={e}/>)}
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
      height: 160,
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
  },
);
