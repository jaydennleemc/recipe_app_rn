import React, {Component, PureComponent} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import uuid from 'react-native-uuid';
import {Rating} from 'react-native-ratings';
import DottedLine from './DottedLine';
import {timeConvert} from './Utils';
import {Actions} from 'react-native-router-flux';

export default class RecipeVerticalItem extends PureComponent {

  render() {
    return (
      <TouchableOpacity
        style={styles.cardContainer} key={uuid.v4()}
        onPress={() => {
          Actions.push('recipeDetails', {data: this.props.item.data()});
        }}>
        <View style={{width: 110, backgroundColor: 'lightgrey', borderRadius: 10}}>
          <Image source={{uri: this.props.item.data().thumbnail}} style={{width: 110, height: 160, borderRadius: 10}}/>
        </View>
        <View style={{paddingVertical: 8, marginLeft: 16, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#685f58', marginTop: 8}}>{this.props.item.data().name}</Text>
          <View style={{flexDirection: 'row', marginTop: 16, marginLeft: 8}}>
            <Rating
              type="custom"
              ratingCount={5}
              startingValue={this.props.item.data().startingValue}
              ratingColor={'#e09178'}
              imageSize={15}
              readonly
              showReadOnlyText/>
            <Text style={{marginLeft: 16, fontWeight: 'bold', color: 'grey'}}>+{this.props.item.data().reviews}</Text>
          </View>
          <DottedLine margin={30} style={{alignSelf: 'center'}}/>
          <View style={{flexDirection: 'row', marginLeft: 16}}>
            <Text style={{color: 'grey', fontWeight: '700', fontSize: 16}}>Recipe by</Text>
            <Text style={{marginLeft: 8, color: '#685f58', fontWeight: 'bold', fontSize: 16}}>{this.props.item.data().author}</Text>
          </View>
          <View style={{marginTop: 16, flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../assets/icons/ic_timer.png')} style={{width: 20, height: 20}}/>
              <Text style={{alignSelf: 'center', marginLeft: 8, color: '#685f58', fontWeight: '500'}}>{timeConvert(this.props.item.data().totalMins)}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../assets/icons/ic_kitchen.png')} style={{width: 20, height: 20}}/>
              <Text style={{alignSelf: 'center', marginLeft: 8, color: '#685f58', fontWeight: '500'}}>{this.props.item.data().servings} servings</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
});
