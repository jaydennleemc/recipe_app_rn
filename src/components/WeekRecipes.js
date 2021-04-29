import React, {Component, PureComponent} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IndicatorViewPager, PagerDotIndicator} from '@shankarmorwal/rn-viewpager';
import {Rating} from 'react-native-ratings';
import DottedLine from './DottedLine';
import uuid from 'react-native-uuid';
import {Actions} from 'react-native-router-flux';

const ItemComp = (item) => (
  <TouchableOpacity
    style={styles.page} key={uuid.v4()}
    onPress={() => {
      Actions.push('recipeDetails', {data: item});
    }}>
    <View style={styles.cardContainer}>
      <View style={{backgroundColor: 'lightgrey', width: 150, borderRadius: 10}}>
        <Image source={{uri: item.thumbnail}} style={{width: 150, height: 150, borderRadius: 10}}/>
      </View>
      <View style={{marginLeft: 16}}>
        <Text style={{marginTop: 16, color: '#685f58', fontWeight: 'bold', fontSize: 20}}>{item.name}</Text>
        <View style={{flexDirection: 'row', marginTop: 16}}>
          <Rating
            type="custom"
            ratingCount={5}
            startingValue={item.startingValue}
            ratingColor={'#e09178'}
            imageSize={15}
            readonly
            showReadOnlyText/>
          <Text style={{marginLeft: 16, fontWeight: 'bold', color: 'grey'}}>{item.reviews}</Text>
        </View>
        <DottedLine margin={-32}/>
        <View style={{flexDirection: 'row', marginTop: 8, alignItems: 'center'}}>
          <View style={{width: 24, height: 24, borderRadius: 20, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={{uri: item.authorImage}} style={{width: 24, height: 24, borderRadius: 20}}/>
          </View>
          <Text style={{marginLeft: 8, fontWeight: '500', color: '#685f58', fontSize: 14}}>Recipe By {item.author}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default class WeekRecipes extends PureComponent {

  renderDotIndicator() {
    return (
      <PagerDotIndicator
        pageCount={this.props.data.length}
        style={{bottom: -16}}
        dotStyle={{backgroundColor: '#ffdcd1', width: 10, height: 10, borderRadius: 50}}
        selectedDotStyle={{backgroundColor: '#e09178', width: 10, height: 10, borderRadius: 50}}
      />
    );
  }

  render() {
    return (
      <View style={this.props.containerStyle}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: 1, backgroundColor: '#e09178', marginLeft: 16, height: 30}}/>
          <Text style={{flex: 1, marginLeft: 16, fontSize: 20, fontWeight: 'bold', color: '#685f58'}}>Recipes of the week</Text>
          <TouchableOpacity onPress={() => {
            Actions.push('allRecipes', {title: 'All weekly recipes',data: this.props.data});
          }}>
            <Text style={{color: '#e09178', fontWeight: 'bold', marginRight: 24}}>See all</Text>
          </TouchableOpacity>
        </View>
        <IndicatorViewPager
          initialPage={0}
          style={{flex: 1}}
          indicator={this.renderDotIndicator()}>
          {this.props.data.map(item => ItemComp(item.data()))}
        </IndicatorViewPager>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  cardContainer: {
    width: '90%',
    height: 150,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'white',
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

