import React, {Component, PureComponent} from 'react';
import {FlatList, Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import {Rating} from 'react-native-ratings';
import DottedLine from './DottedLine';


export default class RecipesList extends PureComponent {

  data = [
    {
      key: 1,
    },
    {
      key: 2,
    },
    {
      key: 3,
    },
  ];

  renderItem = (item) => {
    return (
      <View style={styles.cardContainer} key={item.key}>
        <View style={{height: 150, backgroundColor: 'lightgrey', borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
          <View style={{width: 40, height: 40, backgroundColor: 'red', alignSelf: 'flex-end', borderRadius: 50, marginTop: 8, marginRight: 8, justifyContent: 'center'}}>
            <Image source={require('../assets/icons/ic_favorite.png')} style={{width: 30, height: 30, alignSelf: 'center'}}/>
          </View>
        </View>
        <View style={{height: 180, marginLeft: 16, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
          <View style={{width: 40, height: 40, backgroundColor: '#e09178', alignSelf: 'flex-end', borderRadius: 50, marginTop: -20, marginRight: 8, justifyContent: 'center'}}>
            <Image source={require('../assets/icons/ic_favorite.png')} style={{width: 30, height: 30, alignSelf: 'center'}}/>
          </View>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#685f58', marginTop: 8, alignSelf: 'center'}}>Slow Cooker Carinatas</Text>
          <View style={{flexDirection: 'row', marginTop: 16, marginLeft: 8}}>
            <Rating
              type="custom"
              ratingCount={5}
              jumpValue={6}
              startingValue={0}
              ratingColor={'#e09178'}
              imageSize={15}
              readonly
              showReadOnlyText/>
            <Text style={{marginLeft: 16, fontWeight: 'bold', color: 'grey'}}>0</Text>
          </View>
          <DottedLine margin={30} style={{alignSelf: 'center'}}/>
          <View style={{flexDirection: 'row', marginLeft: 16}}>
            <Text style={{color: 'grey', fontWeight: '700', fontSize: 16}}>recipe by</Text>
            <Text style={{marginLeft: 8, color: '#685f58', fontWeight: 'bold', fontSize: 16}}>Luca chef</Text>
          </View>
          <View style={{marginTop: 16, flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../assets/icons/ic_timer.png')} style={{width: 20, height: 20}}/>
              <Text style={{alignSelf: 'center', marginLeft: 8, color: '#685f58', fontWeight: '500'}}>1h40</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../assets/icons/ic_kitchen.png')} style={{width: 20, height: 20}}/>
              <Text style={{alignSelf: 'center', marginLeft: 8, color: '#685f58', fontWeight: '500'}}>4 servings</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={this.props.containerStyle}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: 1, backgroundColor: '#e09178', marginLeft: 16, height: 30}}/>
          <Text style={{flex: 1, marginLeft: 16, fontSize: 20, fontWeight: 'bold', color: '#685f58'}}>{this.props.title}</Text>
          <TouchableOpacity>
            <Text style={{color: '#e09178', fontWeight: 'bold', marginRight: 24, fontSize: 16}}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{marginTop: 32, marginLeft: 16, overflow: 'hidden'}}
          horizontal
          data={this.data}
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
