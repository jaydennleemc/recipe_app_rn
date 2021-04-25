import React, {Component, PureComponent} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IndicatorViewPager, PagerDotIndicator} from '@shankarmorwal/rn-viewpager';
import {Rating} from 'react-native-ratings';
import DottedLine from './DottedLine';
import uuid from 'react-native-uuid';


const PagingData = [
  {
    key: 1,
    title: 'Italian Barbercue',
    startingValue: 2,
    ratingCount: 186,
    authorImage: '',
    author: 'By Jessica Chan',
    image: require('../assets/icons/icons8-mushbooh-food-50.png'),
  },
  {
    key: 2,
    title: 'Italian Barbercue',
    startingValue: 4,
    ratingCount: 186,
    authorImage: '',
    author: 'Jessica',
    // image: require('../assets/icons/icons8-mushbooh-food-50.png'),
  },
  {
    key: 3,
    title: 'Italian Barbercue',
    startingValue: 1,
    ratingCount: 186,
    authorImage: '',
    author: 'Jessica',
    // image: require('../assets/icons/icons8-mushbooh-food-50.png'),
  },
  {
    key: 4,
    title: 'Italian Barbercue',
    startingValue: 5,
    ratingCount: 186,
    authorImage: '',
    author: 'Jessica',
    // image: require('../assets/icons/icons8-mushbooh-food-50.png'),
  },
  {
    key: 5,
    title: 'Italian Barbercue',
    startingValue: 0,
    ratingCount: 186,
    authorImage: '',
    author: 'Jessica',
    // image: require('../assets/icons/icons8-mushbooh-food-50.png'),
  },
];

const Page = ({key, title, startingValue, ratingCount, authorImage, author, image}) => (
  <View style={styles.page} key={uuid.v4()}>
    <View style={styles.cardContainer}>
      <View style={{backgroundColor: 'lightgrey', width: 150}}>
        <Image source={image} style={{width: 150, height: 150}}/>
      </View>

      <View style={{marginLeft: 16}}>
        <Text style={{marginTop: 16, color: '#685f58', fontWeight: 'bold', fontSize: 20}}>{title}</Text>
        <View style={{flexDirection: 'row', marginTop: 16}}>
          <Rating
            type="custom"
            ratingCount={5}
            jumpValue={6}
            startingValue={startingValue}
            ratingColor={'#e09178'}
            imageSize={15}
            readonly
            showReadOnlyText/>
          <Text style={{marginLeft: 16, fontWeight: 'bold', color: 'grey'}}>{ratingCount}</Text>
        </View>
        <DottedLine margin={-32}/>
        <View style={{flexDirection: 'row', marginTop: 8, alignItems: 'center'}}>
          <View style={{width: 24, height: 24, borderRadius: 20, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={authorImage} style={{width: 15, height: 15}}/>
          </View>
          <Text style={{marginLeft: 8, fontWeight: '500', color: '#685f58', fontSize: 14}}>{author}</Text>
        </View>
      </View>
    </View>
  </View>
);

export default class WeekRecipes extends PureComponent {

  state = {
    pageIndex: 0,
  };

  renderDotIndicator() {
    return (
      <PagerDotIndicator
        pageCount={PagingData.length}
        style={{bottom: -16}}
        dotStyle={{backgroundColor: '#ffdcd1', width: 10, height: 10, borderRadius: 50}}
        selectedDotStyle={{backgroundColor: '#e09178', width: 10, height: 10, borderRadius: 50}}
      />
    );
  }

  onPageSelected = ({position}) => {
    this.setState({pageIndex: position});
    console.log('Selected page position:', position);
  };

  render() {
    return (
      <View style={this.props.containerStyle}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: 1, backgroundColor: '#e09178', marginLeft: 16, height: 30}}/>
          <Text style={{flex: 1, marginLeft: 16, fontSize: 20, fontWeight: 'bold', color: '#685f58'}}>Recipes of the week</Text>
          <TouchableOpacity>
            <Text style={{color: '#e09178', fontWeight: 'bold', marginRight: 24}}>See all</Text>
          </TouchableOpacity>
        </View>
        <IndicatorViewPager
          initialPage={0}
          style={{flex: 1}}
          onPageSelected={this.onPageSelected}
          indicator={this.renderDotIndicator()}>
          {PagingData.map(page => Page(page))}
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

